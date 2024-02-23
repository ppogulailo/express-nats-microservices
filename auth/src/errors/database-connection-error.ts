export class DatabaseConnectionError extends Error {
    reason = 'Error connection to database'

    constructor() {
        super();
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype)
    }
}