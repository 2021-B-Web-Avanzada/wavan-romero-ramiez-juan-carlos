import { Component, OnInit } from '@angular/core';
import {Albun} from "../../albunes.interface";
import {HttpService} from "../../Servicios/http.service";
import {AlbunesComponent} from "../albunes/albunes.component";
import {AppComponent} from "../../app.component";



@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {
  albun: Albun | undefined={};
  buscarAlbun = "";
  listaalbunes: Albun[]=[];
  constructor(
    private  readonly albunesCom: AlbunesComponent,
    private appc:AppComponent
  ) { }
  ngOnInit(): void {
    this.albunesCom.buscarAlbunes()
    this.listaalbunes=this.albunesCom.arreglo
  }

  buscar(){
    const auxalbun=this.buscarAlbun
    const requestFind = this.albunesCom.arreglo
      .find(
        function (valorActual){
          return valorActual.nombre ===auxalbun

        }
      );
    this.albun=requestFind;
    this.albunesCom.albun=this.albun
    console.log(this.albun)
    console.log(auxalbun)
    console.log(this.albunesCom.arreglo)
    this.appc.bandera=true
  }


}
