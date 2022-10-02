import { RequestHandler } from "express";
import ExampleSchema from "../model/ExampleSchema";
import createHttpErrors from "http-errors"

export const getExample: RequestHandler = (req, res, next) => {
    res.json({ message: "hello" })
}

export const getExampleData: RequestHandler = async (req, res, next) => {
    try {
        const { name, id }: IExampleData = req.body
        const example = await ExampleSchema.findOne({ name })
        if (example) return next(createHttpErrors(406, "example already exists"))
        const newExample = new ExampleSchema({ name, id })
        await newExample.save()

        res.json({ name, id })
    } catch (error) {
        return next(createHttpErrors.InternalServerError)
    }
}