import { Schema, model } from 'mongoose';

interface EmpleadoDocument {
  nombre: string;
  cargo: string;
  departamento: string;
  sueldo: number;
}

const empleadoSchema = new Schema<EmpleadoDocument>(
  {
    nombre: { type: String, required: true },
    cargo: { type: String, required: true },
    departamento: { type: String, required: true },
    sueldo: { type: Number, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model<EmpleadoDocument>('Empleado', empleadoSchema);