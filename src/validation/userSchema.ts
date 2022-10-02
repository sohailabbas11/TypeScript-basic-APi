import joi from "joi"
export const userSchema = {
    getUserData: joi.object({
        name: joi.string().required(),
        id: joi.string().required()
    })
}