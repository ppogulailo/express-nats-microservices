export abstract class CustomError extends Error {
    abstract statusCode: number;

    abstract serializeErrors(): { message: string; field?: string }[];

    constructor(message: any) {
        super(message);
        Object.setPrototypeOf(this, CustomError.prototype)
    }

}