interface EmpleadoDocument {
    nombre: string;
    cargo: string;
    departamento: string;
    sueldo: number;
}
declare const _default: import("mongoose").Model<EmpleadoDocument, {}, {}, {}, import("mongoose").Document<unknown, {}, EmpleadoDocument, {}, import("mongoose").DefaultSchemaOptions> & EmpleadoDocument & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, EmpleadoDocument>;
export default _default;
//# sourceMappingURL=empleado.d.ts.map