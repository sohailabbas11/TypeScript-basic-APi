import { RequestHandler } from "express";
import User from "../model/User";
import createHttpError, { InternalServerError } from "http-errors"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { JWT_KEY } from "../config";

export const getUser: RequestHandler = (req, res, next) => {
    res.json({ message: "hello" })
}

export const getUserData: RequestHandler = async (req, res, next) => {
    try {
        const { name, id }: userData = req.body
        const user = await User.findOne({ name })
        if (user) return next(createHttpError(406, "user already exists"))
        const newuser = new User({ name, id })
        await newuser.save()
        res.json({ name, id })
    } catch (error) {
        return next(createHttpError.InternalServerError)
    }
}

export const signUpUser: RequestHandler = async (req, res, next) => {
    const { name, email, password } = req.body
    try {
        const existingUser = await User.findOne({ email })
        if (existingUser) return next(createHttpError(422, "Email already exists"))

        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new User({ name, email, password: hashedPassword })
        await user.save()
        res.json({ message: 'user created' })
    } catch (error) {
        return next(InternalServerError)
    }
}

export const signInUser: RequestHandler = async (req, res, next) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        if (!user) return next(createHttpError(404, "user not found"))
        const isInvalidPassword = await bcrypt.compare(password, user.password)
        if (!isInvalidPassword)
            return next(createHttpError(401, 'not valid password'))
        const token = jwt.sign({
            name: user.name,
            email: user.email,
            userId: user.id
        },
            JWT_KEY,
            { expiresIn: '1d' })

        res.cookie('jwt', token)
        res.json({ message: 'user logged in', token })
    } catch (error) {
        return next(InternalServerError)
    }
}