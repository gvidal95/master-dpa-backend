import type { Request, Response } from 'express';
import type { CreateEmployeeDto, UpdateEmployeeDto } from '../dtos/employee.dto.js';
import { MongoEmployeeRepository } from '../repositories/mongo-employee.repository.js';
export declare class EmpleadoController {
    private readonly employeeRepository;
    constructor(employeeRepository: MongoEmployeeRepository);
    getEmpleado: (_req: Request, res: Response) => Promise<void>;
    addEmpleado: (req: Request<object, object, CreateEmployeeDto>, res: Response) => Promise<void>;
    updateEmpleado: (req: Request<{
        id: string;
    }, object, UpdateEmployeeDto>, res: Response) => Promise<void>;
    deleteEmpleado: (req: Request<{
        id: string;
    }>, res: Response) => Promise<void>;
}
//# sourceMappingURL=empleados.controllers.d.ts.map