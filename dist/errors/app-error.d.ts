export declare class AppError extends Error {
    readonly statusCode: number;
    readonly errors?: unknown;
    constructor(message: string, statusCode: number, errors?: unknown);
}
export declare class RequestValidationError extends AppError {
    constructor(errors: unknown);
}
//# sourceMappingURL=app-error.d.ts.map