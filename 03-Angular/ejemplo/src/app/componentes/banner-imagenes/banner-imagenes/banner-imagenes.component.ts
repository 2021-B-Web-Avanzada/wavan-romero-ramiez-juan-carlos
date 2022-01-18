import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-banner-imagenes',
  templateUrl: './banner-imagenes.component.html',
  styleUrls: ['./banner-imagenes.component.scss']
})
export class BannerImagenesComponent implements OnInit {
  nombre = "juan";
  apellido = "romero";
  fecha = new Date();
  sueldo = 1000;
  mascotas = {
    cachetes: {
      edad: 23
    }
  }

  @Input()
  url = 'https://www.google.com.ec/'

  @Input()
  urlImagen = 'https://static.wikia.nocookie.net/lossimpson/images/b/bd/Homer_Simpson.png/revision/latest/scale-to-width-down/597?cb=20100522180809&path-prefix=es'

  @Input()
  color= "yellow"

  constructor() { }

  ngOnInit(): void {
  }
  ejecutarEventoClick(){
    console.log({mensaje:'click'})

  }
  ejecutarEventoBlur(){
    console.log({mensaje:'blur'})
  }

}
