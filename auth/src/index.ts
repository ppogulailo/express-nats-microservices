import mongoose from "mongoose";
import {app} from "./app";

const start = async () => {
<<<<<<< HEAD
    console.log('Starting auth service ...')

=======
    console.log('Auth service starting ...')
>>>>>>> efbfdbae0eb8266efc3f5c5e25bd9129591a85a4
    if (!process.env.JWT_KEY) {
        throw new Error('JWT_KEY must be defined!')
    }
    if (!process.env.MONGO_URI) {
        throw new Error('MONGO_URI must be defined!')
    }
    try {
        await mongoose.connect(process.env.MONGO_URI!)
        console.log('Connected to MongoDB')
    } catch (e) {
        console.error(e)
    }
    app.listen(3000, () => {
        console.log('Listening on 3000')
    })
}

start()