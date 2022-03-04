import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Albun} from "../albunes.interface";
import {Cancion} from "../canciones.interface";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private readonly httpClient: HttpClient) { }



  buscartodos():Observable<Albun[]>{

    return this.httpClient
      .get('/api/albunes/')
      .pipe(
        map(
          (resultadoendata)=> resultadoendata as Albun[]
        )
      )
  }

  buscartodoscanciones(albun:string):Observable<Cancion[]>{
    return this.httpClient
      .get('/api/canciones/'+albun)
      .pipe(
        map(
          (resultadoendata)=> resultadoendata as Cancion[]
        )
      )
  }
  eliminarAlbun(albun:string):Observable<Albun[]>{
    return this.httpClient.delete('/api/albunes/'+albun)
      .pipe(
        map(
          (resultadoendata)=> resultadoendata as Albun[]
        )
      )
  }

  crearAlbun(albun:Albun):Observable<Albun[]>{
    console.log(albun)
  return this.httpClient.post('/api/albunes/',albun).pipe(
    map(
      (resultadoendata)=> resultadoendata as Albun[]
    )
  )
  }

  actualizarAlbun(nombrealbun: string,albun:Albun):Observable<Albun[]>{
    return this.httpClient.put('/api/albunes/'+nombrealbun,albun).pipe(
      map(
        (resultadoendata)=> resultadoendata as Albun[]
      )
    )
  }

  crearCancion(cancion: Cancion, nombrealbun:string):Observable<Albun[]>{
    return this.httpClient.post('/api/canciones/'+nombrealbun,cancion).pipe(
      map(
        (resultadoendata)=> resultadoendata as Albun[]
      )
    )
  }

  eliminarCancion(nombrealbun:string,nombrecancion:string):Observable<any>{
    return this.httpClient.delete('/api/canciones/'+nombrealbun+'&'+nombrecancion).pipe(
      map(
        (resultadoendata)=> resultadoendata as any
      )

    )
  }

  actualizarCancion(cancion: Cancion, nombrealbun:string, nombrecancion:string):Observable<any[]>{
    return this.httpClient.put('/api/canciones/'+nombrealbun+'&'+nombrecancion,cancion).pipe(
      map(
        (resultadoendata)=> resultadoendata as any[]
      )
    )
  }





}
