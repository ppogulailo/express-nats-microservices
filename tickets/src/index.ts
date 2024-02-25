import mongoose from "mongoose";
import {app} from "./app";
import {natsWrapper} from "./nats-wrapper";

const start = async () => {
    if (!process.env.JWT_KEY) {
        throw new Error('JWT_KEY must be defined!')
    }
    if (!process.env.MONGO_URI) {
        throw new Error('MONGO_URI must be defined!')
    }
    try {
        await natsWrapper.connect('ticketing', 'randomString', 'http://nats-srv:4222')
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