import { Component, Input,Output,EventEmitter } from '@angular/core';
import {Alumno,DigitoVerificador} from './../../modelos/alumno';
import {Seccion} from './../../modelos/seccion';
import {RegHistoria} from './../../modelos/reg-historia';
@Component({
  selector: 'app-listar-alumnos',
  templateUrl: './listar-alumnos.component.html',
  styleUrls: ['./listar-alumnos.component.scss']
})
export class ListarAlumnosComponent  {
@Input() public alumnos: Array<Alumno> =[];
@Output() public index = new EventEmitter<number>();

public escucharId(id:number):void{
  const posi = this.alumnos.findIndex((elemento)=>{
    return id === elemento.rut;
  })
  this.index.emit(posi);
}

}
