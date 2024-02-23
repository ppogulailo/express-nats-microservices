import express, {Request, Response} from "express";
import {body, validationResult} from "express-validator";
import {RequestValidationError} from "../errors/request-validation-error";
import jwt from 'jsonwebtoken'
import {User} from "../models/user";
import {BadRequestError} from "../errors/badrequest-error";

const router = express.Router();

router.post('/api/users/signup', [
    body('email')
        .isEmail()
        .withMessage('Email must be valid'),
    body('password')
        .trim()
        .isLength({min: 4, max: 20})
        .withMessage('password.ts must be between 4 and 20')
], async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new RequestValidationError(errors.array())
    }
    const {email, password} = req.body
    const existingUser = await User.findOne({email})
    if (existingUser) {
        throw new BadRequestError('User already exist')
    }
    const user = User.build({email, password})
    await user.save()

    const userJwt = jwt.sign({id: user.id, email: user.email}, 'jwt')

    req.session = {
        jwt: userJwt
    }

    res.status(201).send(user)
})

export {router as signupRouter};