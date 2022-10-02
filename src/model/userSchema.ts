import { Schema, model, Document } from "mongoose";

export interface user extends Document {
    name: string,
    id: string
}

const userSchema: Schema = new Schema({
    name: { type: String },
    id: { type: String }
})

export default model<user>("user", userSchema)