import { Seccion } from "./seccion";

export type DigitoVerificador = '0'|'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'k';


export interface Alumno {
  rut: number;
  dv: DigitoVerificador;
  nombre:string;
  apellido:string;
  edad:number;
  seccion?:Seccion;
}
