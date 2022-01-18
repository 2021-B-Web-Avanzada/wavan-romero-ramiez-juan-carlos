import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.scss']
})
export class RutaLoginComponent implements OnInit {
  mostrarSegundoBanner= true;

  arregloUsuarios = [
    {id: 1,
    nombre: "Juan",
    color: "00BCFF",
      link: "https://getbootstrap.com/docs/5.1/getting-started/introduction/",
      linkimagen: "https://www.eluniversal.com.mx/sites/default/files/2020/03/19/como_extraer_un_texto_de_una_imagen.jpg"

    },
    {id: 1,
      nombre: "Juan",
      color: "white",
      link: "https://getbootstrap.com/docs/5.1/getting-started/introduction/",
      linkimagen: ""
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }
  cambiarOcultarBanner(){
    this.mostrarSegundoBanner = !this.mostrarSegundoBanner;
  }


}
