import * as mongoose from "mongoose";

//
interface UserAttrs {
    email: string
    password: string
}

// An interface that describe prop
// That User model has
interface UserModel extends mongoose.Model<UserDoc> {
    build(attrs: UserAttrs): UserDoc
}

interface UserDoc extends mongoose.Document {
    email: string
    password: string
}

const userSchema: any = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})
userSchema.static.build = (attrs: UserAttrs) => new User(attrs)
const User = mongoose.model<UserDoc, UserModel>('User', userSchema)


export {User}