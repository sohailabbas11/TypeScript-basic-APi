import { RequestHandler } from "express";
import { userSchema } from "./userSchema";
import validator from "../utils/validator"

export const getUserDataValidation: RequestHandler = (req, res, next) =>
    validator(userSchema.getUserData, req.body, next)