import joi from "joi"
export const exampleSchema = {
    getExampleData: joi.object({
        name: joi.string().required(),
        id: joi.string().required()
    })
}