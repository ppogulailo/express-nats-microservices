import {CustomError} from "./custom-error";

export class NotAuthorizeError extends CustomError {
    statusCode = 401

    constructor() {
        super('Not authorize');

        Object.setPrototypeOf(this, NotAuthorizeError.prototype)
    }

    serializeErrors() {
        return [{message: 'Not authorize'}];
    }
}