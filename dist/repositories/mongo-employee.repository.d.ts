import type { EmployeeRepositoryInterface } from './employee.repository.interface.js';
export declare class MongoEmployeeRepository implements EmployeeRepositoryInterface {
    getEmployeeById(employeeId: string): Promise<any>;
    updateEmployee(employeeId: string, employeeData: any): Promise<any>;
    deleteEmployee(employeeId: string): Promise<void>;
    getAllEmployees(): Promise<any[]>;
    createEmployee(employeeData: any): Promise<any>;
}
//# sourceMappingURL=mongo-employee.repository.d.ts.map