import Empleado from '../models/empleado.js';
export class MongoEmployeeRepository {
    // Empleado por ID
    async getEmployeeById(employeeId) {
        const empleado = await Empleado.findById(employeeId);
        return empleado;
    }
    // Actualizar empleado
    async updateEmployee(employeeId, employeeData) {
        const empleado = await Empleado.findByIdAndUpdate(employeeId, employeeData);
        return empleado;
    }
    // Eliminar empleado
    async deleteEmployee(employeeId) {
        await Empleado.findByIdAndDelete(employeeId);
    }
    // Obtener todos los empleados
    async getAllEmployees() {
        const empleados = await Empleado.find();
        return empleados;
    }
    // Crear un empleado    
    async createEmployee(employeeData) {
        const empleado = new Empleado(employeeData);
        await empleado.save();
        return empleado;
    }
}
//# sourceMappingURL=mongo-employee.repository.js.map