import { Component} from '@angular/core';
import {Alumno, DigitoVerificador} from './../../modelos/alumno';
import {Seccion} from './../../modelos/seccion'
@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})
export class FormularioAlumnoComponent{

  public digitosVerif:Array<string> =[
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'k'
  ]


  public alumno:Alumno ={
    rut: 0,
    dv:'0',
    nombre:'',
    apellido:'',
    edad: 0,
  }

  public cambiarRut(evento:Event):void{
    const elemento = evento.target as HTMLInputElement;
    this.alumno.rut = Number.parseInt(elemento.value);
  }

  public cambiarDV(evento:Event): void {
    const elemento = evento.target as HTMLSelectElement;
    this.alumno.dv = elemento.value as DigitoVerificador;
  }
  public cambiarNombre(evento:Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.alumno.nombre = elemento.value;
  }
  public cambiarApellido(evento:Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.alumno.apellido = elemento.value;
  }
  public cambiarEdad(evento:Event):void{
    const elemento = evento.target as HTMLInputElement;
    this.alumno.edad = Number.parseInt(elemento.value);
  }
}
