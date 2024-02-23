import express, {Request, Response} from "express";
import {body} from "express-validator";
import {User} from "../models/user";
import {BadRequestError} from "../errors/badrequest-error";
import jwt from "jsonwebtoken";
import {Password} from "../service/password";
import {validateRequest} from "../middlewares/validate-request";

const router = express.Router();

router.post('/api/users/signin', [
    body('email')
        .isEmail()
        .withMessage('Email must be valid'),
    body('password')
        .trim()
        .notEmpty()
        .withMessage('you must apply with password')
], validateRequest, async (req: Request, res: Response) => {
    const {email, password} = req.body
    const existingUser = await User.findOne({email})
    if (!existingUser) {
        throw new BadRequestError('User doesn\'\t exist')
    }
    const passwordsIsEqual = await Password.compare(existingUser.password, password)
    if (!passwordsIsEqual) {
        throw new BadRequestError('Wrong password')
    }
    const userJwt = jwt.sign({id: existingUser.id, email: existingUser.email}, process.env.JWT_KEY!)
    req.session = {
        jwt: userJwt
    }

    res.status(200).send(existingUser)
})

export {router as signinRouter};