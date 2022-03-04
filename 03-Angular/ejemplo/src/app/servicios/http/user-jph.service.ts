import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {UserJphInterface} from "./interfaces/user-jph.interface";
import {environment} from "../../../environments/environment";
import {UserJphCreateInterface} from "./interfaces/user-jph-create.interface";

@Injectable({
  providedIn: 'any'
})
export class UserJphService {

  constructor(
    private readonly httpClient: HttpClient
  ) {
  }
  buscartodos(parametrosCosulta?:any):Observable<UserJphInterface[]>{
    const url = environment.urlJPC+'/users';
    Object
      .keys(parametrosCosulta)
      .forEach(k=>{
        if(!parametrosCosulta[k]){
          delete parametrosCosulta[k]
        }
      })
    return this.httpClient
      .get(url
      ,
        {params:parametrosCosulta})
      .pipe(
        map(
          (resultadoendata)=> resultadoendata as UserJphInterface[]
        )
      )
  }

  buscarUno(idUsuario: number):Observable<UserJphInterface>{
    const url = environment.urlJPC + '/users/' + idUsuario;
    return this.httpClient
      .get(url)
      .pipe(
        map(
          (resultadoEnData) => resultadoEnData as UserJphInterface
        )
      );
  }

  actualizarPorId(
    idUsuario:number,
    datosActualizar:UserJphCreateInterface): Observable<UserJphInterface>{
    const url = environment.urlJPC + '/users/' + idUsuario;
    return this.httpClient
      .put(url, datosActualizar)
      .pipe(map(
        (resultadoEnData) => resultadoEnData as UserJphInterface
      ))
  }

}
