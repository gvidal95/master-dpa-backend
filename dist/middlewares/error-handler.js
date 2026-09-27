import mongoose from 'mongoose';
import { AppError } from '../errors/app-error.js';
const sendError = (res, statusCode, message, errors) => res.status(statusCode).json({
    success: false,
    message,
    data: null,
    ...(errors === undefined ? {} : { errors }),
});
export const notFoundHandler = (req, _res, next) => {
    next(new AppError(`No se encontró la ruta ${req.method} ${req.originalUrl}`, 404));
};
export const errorHandler = (error, _req, res, _next) => {
    if (error instanceof AppError) {
        sendError(res, error.statusCode, error.message, error.errors);
        return;
    }
    if (error instanceof mongoose.Error.CastError) {
        sendError(res, 400, 'El identificador enviado no es válido');
        return;
    }
    if (error instanceof mongoose.Error.ValidationError) {
        sendError(res, 422, 'Los datos no cumplen las reglas de persistencia');
        return;
    }
    console.error('Error no controlado:', error);
    sendError(res, 500, 'Error interno del servidor');
};
//# sourceMappingURL=error-handler.js.map