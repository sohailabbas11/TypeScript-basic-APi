import { RequestHandler } from "express";
import { userSchema } from "./userSchema";
import validator from "../utils/validator"

export const signUpUserValidation: RequestHandler = (req, res, next) =>
    validator(userSchema.signUpUser, req.body, next)

export const signInUserValidation: RequestHandler = (req, res, next) =>
    validator(userSchema.signInUser, req.body, next)