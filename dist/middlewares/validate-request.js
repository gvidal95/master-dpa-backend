import { RequestValidationError } from '../errors/app-error.js';
export const validateRequest = (schema, part) => (req, _res, next) => {
    const result = schema.safeParse(req[part]);
    if (!result.success) {
        next(new RequestValidationError(result.error.issues));
        return;
    }
    if (part === 'body') {
        req.body = result.data;
    }
    else {
        req.params = result.data;
    }
    next();
};
//# sourceMappingURL=validate-request.js.map