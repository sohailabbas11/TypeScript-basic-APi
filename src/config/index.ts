import dotenv from "dotenv"
dotenv.config()

export const DB = process.env.DB!
export const PORT = process.env.PORT!
export const JWT_KEY = process.env.JWT_KEY!