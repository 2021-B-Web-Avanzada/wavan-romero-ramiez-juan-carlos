import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../Servicios/http.service";
import {Cancion} from "../../canciones.interface";

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.scss']
})
export class CancionesComponent implements OnInit {
  arreglo: Cancion[] = [];
  buscarcancionesalbun=""
  constructor(
    private httpservice: HttpService
  ) { }

  ngOnInit(): void {
  }

  buscarCanciones(){
    this.httpservice
      .buscartodoscanciones(this.buscarcancionesalbun)
      .subscribe({
          next:(datos)=>{
            this.arreglo=datos
          },
          error:(error)=>{
            console.error({error})
          }

        }
      )

  }

}
