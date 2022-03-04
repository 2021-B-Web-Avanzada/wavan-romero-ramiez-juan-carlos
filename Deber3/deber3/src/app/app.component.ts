import { Component } from '@angular/core';
import {HttpService} from "./Servicios/http.service";
import {AlbunesComponent} from "./Componentes/albunes/albunes.component";
import {Albun} from "./albunes.interface";
import {BuscarComponent} from "./Componentes/buscar/buscar.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'deber3';
  bandera: boolean =false






}
