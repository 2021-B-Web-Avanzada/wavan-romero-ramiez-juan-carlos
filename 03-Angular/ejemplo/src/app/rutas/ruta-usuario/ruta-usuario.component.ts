import { Component, OnInit } from '@angular/core';
import {UserJphService} from "../../servicios/http/user-jph.service";
import {UserJphInterface} from "../../servicios/http/interfaces/user-jph.interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-usuario',
  templateUrl: './ruta-usuario.component.html',
  styleUrls: ['./ruta-usuario.component.scss']
})
export class RutaUsuarioComponent implements OnInit {
  arreglo: UserJphInterface[] = [];
  buscarUsuario = "";

  constructor(
    private readonly userJphService: UserJphService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const parametroConsulta$ = this.activatedRoute.queryParams;
    parametroConsulta$
      .subscribe(
        (queryParams) => {
          this.buscarUsuario = queryParams['name']
          this.buscarUsuarios();
        },
        () => {
        },
        () => {
        }
      )
  };
  actualizarParametrosConsulta() {
    this.router.navigate(['/app', 'usuario'],
      {
        queryParams: {
          name: this.buscarUsuario
        }
      });
  }


  buscarUsuarios(){
    this.userJphService
      .buscartodos({
        name: this.buscarUsuario
      })
      .subscribe({
          next:(datos)=>{
            this.arreglo=datos
            this.buscarUsuario="";
          },
          error:(error)=>{
            console.error({error})
          }

        }
      )
  }
gestionarusuario(idUsuario: number){
    const ruta = ['/app', 'usuario',idUsuario];
    this.router.navigate(ruta);
}
}
