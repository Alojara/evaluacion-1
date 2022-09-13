import { Component, Output,EventEmitter } from '@angular/core';
import {Seccion} from './../../modelos/seccion';
@Component({
  selector: 'app-formulario-seccion',
  templateUrl: './formulario-seccion.component.html',
  styleUrls: ['./formulario-seccion.component.scss']
})
export class FormularioSeccionComponent {

  public seccion:Seccion ={
    idSeccion: 0,
    nombreSeccion:''
  }

  public cambiarIdSecc(evento:Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.seccion.idSeccion = Number.parseInt (elemento.value);
  }
  public cambiarNombreSecc(evento:Event):void{
    const elemento = evento.target as HTMLInputElement;
    this.seccion.nombreSeccion = elemento.value;
  }


}
