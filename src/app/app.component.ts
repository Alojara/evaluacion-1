import { Component } from '@angular/core';
import {Seccion} from './modelos/seccion';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'evaluacion1';
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
