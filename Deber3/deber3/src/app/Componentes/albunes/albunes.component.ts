import { Component, OnInit } from '@angular/core';
import {Albun} from "../../albunes.interface";
import {HttpService} from "../../Servicios/http.service";
import {Cancion} from "../../canciones.interface";





@Component({
  selector: 'app-albunes',
  templateUrl: './albunes.component.html',
  styleUrls: ['./albunes.component.scss'],
  providers: [HttpService]
})
export class AlbunesComponent implements OnInit {
  nombrealbun=""
  nombrealbunactualactualizar=""
  nombrecancioactualizar=""
  arreglo: Albun[] = [];
  arreglocanciones: Cancion[]=[]
  buscarAlbun = "";
  albuncanciones = "";
  albun: Albun | undefined={};
  mostrarcanciones: boolean=false;
  mostrarformcrear: boolean=false;
  mostrarformcrearcancion: boolean=false;
  mostraractualizar: boolean=false;
  mosactualizarcancion: boolean=false;
  cAnombre="";
  cAanio:number=0;
  cAautor="";
  cAprecio:number=0;
  cAdisponible_en_linea:boolean= true;

  nombrecan="";
  aniocan:number=0;
  compositorcan="";
  duracioncan:number=0;
  genero=""

  crearalbu: Albun={
  }
  crearcan: Cancion={}

  constructor(
    private httpservice: HttpService,
  ) { }

  ngOnInit(): void {
    this.buscarAlbunes()
    this.buscarCanciones(this.nombrealbun)
  }

  buscarAlbunes(){
    this.httpservice
      .buscartodos()
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

  buscarCanciones(nombre: any){
    this.httpservice
      .buscartodoscanciones(nombre)
      .subscribe({
          next:(datos)=>{
            this.arreglocanciones=datos;
            this.mostrarcanciones=true;

          },
          error:(error)=>{
            console.error({error})
          }

        }
      )

  }
  EliminarAlbun(nombre: any){
    this.httpservice.eliminarAlbun(nombre)
      .subscribe({
          next:(datos)=>{
            this.arreglo=datos;
          },
          error:(error)=>{
            console.error({error})
          }

        }
      )
  }

  regresar(){
    this.mostrarcanciones=false
  }

  crearAlbun(){
    this.crearalbu.nombre=this.cAnombre
    this.crearalbu.anio=this.cAanio
    this.crearalbu.autor=this.cAautor
    this.crearalbu.precio=this.cAprecio
    this.crearalbu.disponible_en_linea=this.cAdisponible_en_linea
    this.httpservice.crearAlbun(this.crearalbu)
      .subscribe({
          next:(datos)=>{
            this.arreglo=datos;
            this.mostrarformcrear=false
          },
          error:(error)=>{
            console.error({error})
          }

        }
      )

  }

  mostrarcrear(){
    this.mostrarformcrear=true
  }
  ocultarcrear(){
    this.mostrarformcrear=false
  }

  actualizarAlbun(){
    this.crearalbu.nombre=this.cAnombre
    this.crearalbu.anio=this.cAanio
    this.crearalbu.autor=this.cAautor
    this.crearalbu.precio=this.cAprecio
    this.crearalbu.disponible_en_linea=this.cAdisponible_en_linea
    this.httpservice.actualizarAlbun(this.nombrealbunactualactualizar,this.crearalbu)
      .subscribe({
          next:(datos)=>{
            this.arreglo=datos;
            this.mostraractualizar=false
          },
          error:(error)=>{
            console.error({error})
          }

        }
      )
  }

  nombrealbunactual(nombre:string){
    this.nombrealbunactualactualizar=nombre
  }

  ocultaractualiza(){
    this.mostraractualizar=false
  }
  mostraractualiza(){
    this.mostraractualizar=true
  }



 ejecutardosfunciones(nombre:any){
    this.nombrealbunactual(nombre)
   this.mostraractualiza()
 }


 getnombrealbun(nombre:string){
    this.nombrealbun=nombre

 }
 ejecutardosfunciones2(nombre:any){
    this.getnombrealbun(nombre)
   this.buscarCanciones(nombre)
 }

 crearcancion(){
   this.crearcan.nombre=this.nombrecan
   this.crearcan.genero=this.genero
   this.crearcan.compositor=this.compositorcan
   this.crearcan.anio=this.aniocan
   this.crearcan.duracion=this.duracioncan
   console.log(this.crearcan,this.nombrealbun)
   this.httpservice.crearCancion(this.crearcan,this.nombrealbun)
     .subscribe({
         next:(datos)=>{
           this.arreglo=datos;
           this.mostrarformcrearcancion=false
           this.mostrarcanciones=false
         },
         error:(error)=>{
           console.error({error})
         }

       }
     )
 }

  ocultarmostrarcan(){
    this.mostrarformcrearcancion=false
  }
  mostrarmostrarcan(){
    this.mostrarformcrearcancion=true
  }

  eliminarCancion(nombrecancion:any){
              this.httpservice.eliminarCancion(this.nombrealbun,nombrecancion)
                .subscribe({
                            next:(datos)=>{
                              // @ts-ignore
                              console.log(datos)

                            },
                            error:(error)=>{
                              console.error({error})
                            }

                }
                )

    this.mostrarcanciones=false
}

  actualizarCancion(){
    this.crearcan.nombre=this.nombrecan
    this.crearcan.genero=this.genero
    this.crearcan.compositor=this.compositorcan
    this.crearcan.anio=this.aniocan
    this.crearcan.duracion=this.duracioncan

    this.httpservice.actualizarCancion(this.crearcan, this.nombrealbun,this.nombrecancioactualizar)
      .subscribe({
          next:(datos)=>{
            this.mosactualizarcancion=false
            this.mostrarcanciones=false
            console.log(datos)
            console.log(datos)
            console.log(this.crearcan)
            console.log(this.nombrealbun)
            console.log(this.nombrecancioactualizar)
          },
          error:(error)=>{
            console.error({error})
          }

        }
      )

  }


  mostraractualizarcancion(){
    this.mosactualizarcancion=true;
  }

  ocultarmostraractualizarcancion(){
    this.mosactualizarcancion=false;
  }
  nombrecancionact(nombre:string){
    this.nombrecancioactualizar=nombre
  }

  ejecutardosfuncionestres(nombre:any){
    this.mostraractualizarcancion()
    this.nombrecancionact(nombre)
  }


}

