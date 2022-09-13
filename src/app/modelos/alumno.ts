import { Seccion } from "./seccion";

export interface Alumno {
  rut: number;
  dv: string;
  nombre:string;
  apellido:string;
  edad:number;
  seccion:Seccion;
}
