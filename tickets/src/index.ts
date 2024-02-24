import mongoose from "mongoose";
import {app} from "./app";

const start = async () => {
    if (!process.env.JWT_KEY) {
        throw new Error('JWT_KEY must be defined!')
    }
    try {
        await mongoose.connect(process.env.MONGO_URI!)
        console.log('Connected to MongoDB')
    } catch (e) {
        console.error(e)
    }
    app.listen(3001, () => {
        console.log('Listening on 3001')
    })
}

start()