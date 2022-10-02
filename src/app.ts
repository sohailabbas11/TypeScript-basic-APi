import express, { ErrorRequestHandler } from "express";
const app = express()
import createHttpError from "http-errors"
import mongoose from "mongoose";
import { DB, PORT } from "./config";
import { errorHandler } from "./middleware/errorHandler";
import userRoute from './routes/userRoutes'
app.use(express.json())


app.use('/', userRoute)

app.use(() => {
    throw createHttpError(404, "route not found")
})

app.use(errorHandler)

mongoose.connect(DB)
    .then(() => {
        console.log('mongodb connected')
    })
    .catch(() => {
        throw createHttpError(501, 'unable to connect database')
    })
app.listen(PORT, () => (`server running on port ${PORT}`))