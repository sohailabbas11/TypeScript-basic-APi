import { RequestHandler } from "express";
import userSchema from "../model/userSchema";
import createHttpErrors from "http-errors"

export const getUser: RequestHandler = (req, res, next) => {
    res.json({ message: "hello" })
}

export const getUserData: RequestHandler = async (req, res, next) => {
    try {
        const { name, id }: userData = req.body
        const user = await userSchema.findOne({ name })
        if (user) return next(createHttpErrors(406, "user already exists"))
        const newuser = new userSchema({ name, id })
        await newuser.save()

        res.json({ name, id })
    } catch (error) {
        return next(createHttpErrors.InternalServerError)
    }
}