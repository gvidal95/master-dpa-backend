export class AppError extends Error {
    statusCode;
    errors;
    constructor(message, statusCode, errors) {
        super(message);
        this.statusCode = statusCode;
        this.errors = errors;
        this.name = 'AppError';
    }
}
export class RequestValidationError extends AppError {
    constructor(errors) {
        super('La solicitud contiene datos inválidos', 400, errors);
        this.name = 'RequestValidationError';
    }
}
//# sourceMappingURL=app-error.js.map