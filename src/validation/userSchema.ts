import joi from "joi"
export const userSchema = {
    signUpUser: joi.object({
        name: joi.string().required(),
        email: joi.string().email().required(),
        password: joi.string().required()
    }),
    signInUser: joi.object({
        email: joi.string().email().required(),
        password: joi.string().required()
    })
}