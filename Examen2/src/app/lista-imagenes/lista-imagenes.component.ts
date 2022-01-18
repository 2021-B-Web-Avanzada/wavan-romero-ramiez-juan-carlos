import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lista-imagenes',
  templateUrl: './lista-imagenes.component.html',
  styleUrls: ['./lista-imagenes.component.scss']
})
export class ListaImagenesComponent implements OnInit {
  url10 = 'https://st.depositphotos.com/1020341/4233/i/600/depositphotos_42333899-stock-photo-portrait-of-huge-beautiful-male.jpg'
  urlflechaIz = 'https://play.hbomax.com/assets/images/buttons/desktop/btn_arrow_left_medium_hover.png'
  urlflechaDe = 'https://play.hbomax.com/assets/images/buttons/desktop/btn_arrow_right_medium_hover.png'
  urlAgregar = 'https://play.hbomax.com/assets/images/buttons/hbomax/btn_overlay_add.png'
  urlReproducir = 'https://play.hbomax.com/assets/images/buttons/hbomax/btn_play_filled_gray0_20_3.png'

  arregloImagenes = [
    {
      linkimagen: "https://coo3.tuvotacion.com/imagenes_unicas/que-ropa-o-vestidos-de-zendaya-te-gustan-mas-281212.jpg"

    },
    {
      linkimagen: "https://es.web.img3.acsta.net/pictures/18/01/23/15/36/0550263.jpg"

    },
    {
      linkimagen: "https://i.pinimg.com/736x/3f/bb/b0/3fbbb01666d7c285bb6a2db85b8d6967.jpg"

    },
    {
      linkimagen: "https://cdn-3.expansion.mx/dims4/default/296fa44/2147483647/strip/true/crop/680x1024+0+0/resize/1800x2711!/format/webp/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F1e%2F58%2Fc9da00f4440992af435065a9ba7c%2Fgettyimages-665462094.jpg"

    },
    {
      linkimagen: "https://cdnnmundo1.img.sputniknews.com/img/07e5/0a/0b/1116956935_361:0:2361:2000_1920x0_80_0_0_d9964750d1ed390a8f05acfa07d07c60.jpg"

    },
    {
      linkimagen: "https://www.eltiempo.com/files/image_640_428/files/crop/uploads/2021/07/24/60fc56ba8e4b7.r_1627185324931.0-97-2432-1314.jpeg"

    }


  ]

  @Input()
  idcarrusel= "idcero"

  @Input()
  tamanioImagen="25%"
  constructor() { }

  ngOnInit(): void {
  }

  clickBotonDerecho(){
    const x = document.getElementById(this.idcarrusel);

    // @ts-ignore
    x.scrollLeft=x.scrollLeft+500
    console.log(x)


  }

  clickBotonIzquierdo(){
    const x = document.getElementById(this.idcarrusel);
    // @ts-ignore
    x.scrollLeft=x.scrollLeft-500
    console.log(x)


  }

}
