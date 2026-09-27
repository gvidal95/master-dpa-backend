import type { NextFunction, Request, Response } from 'express';
import type { ZodType } from 'zod';
type RequestPart = 'body' | 'params';
export declare const validateRequest: (schema: ZodType, part: RequestPart) => (req: Request, _res: Response, next: NextFunction) => void;
export {};
//# sourceMappingURL=validate-request.d.ts.map