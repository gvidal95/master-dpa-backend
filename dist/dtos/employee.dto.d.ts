import { z } from 'zod';
export declare const createEmployeeDto: z.ZodObject<{
    nombre: z.ZodString;
    cargo: z.ZodString;
    departamento: z.ZodString;
    sueldo: z.ZodCoercedNumber<unknown>;
}, z.core.$strict>;
export declare const updateEmployeeDto: z.ZodObject<{
    nombre: z.ZodOptional<z.ZodString>;
    cargo: z.ZodOptional<z.ZodString>;
    departamento: z.ZodOptional<z.ZodString>;
    sueldo: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
}, z.core.$strict>;
export declare const employeeParamsDto: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strict>;
export type CreateEmployeeDto = z.infer<typeof createEmployeeDto>;
export type UpdateEmployeeDto = z.infer<typeof updateEmployeeDto>;
//# sourceMappingURL=employee.dto.d.ts.map