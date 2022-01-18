import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.scss'],


})



export class ListaPeliculasComponent implements OnInit {


  url10 = 'https://st.depositphotos.com/1020341/4233/i/600/depositphotos_42333899-stock-photo-portrait-of-huge-beautiful-male.jpg'
  urlflechaIz = 'https://play.hbomax.com/assets/images/buttons/desktop/btn_arrow_left_medium_hover.png'
  urlflechaDe = 'https://play.hbomax.com/assets/images/buttons/desktop/btn_arrow_right_medium_hover.png'
  urlAgregar = 'https://play.hbomax.com/assets/images/buttons/hbomax/btn_overlay_add.png'
  urlReproducir = 'https://play.hbomax.com/assets/images/buttons/hbomax/btn_play_filled_gray0_20_3.png'

  @Input()
  idcarrusel= "cero"

  @Input()
  tamanioImagen="20%"

  @Input()
  arregloPeliculas = [
    {
      id: 1,
      nombre: "xmen",
      linkimagen: "https://i0.wp.com/hipertextual.com/wp-content/uploads/2016/10/10346626_260153840835091_3121210337900902159_n1.jpg?resize=600%2C889&ssl=1"

    },
    {
      id: 2,
      nombre: "avatar",
      linkimagen: "https://i0.wp.com/hipertextual.com/wp-content/uploads/2016/10/avatar-poster-01.jpg?resize=600%2C886&ssl=1"

    },
    {
      id: 3,
      nombre: "prodigio",
      linkimagen: "https://cdn.cinematerial.com/p/297x/ss896cit/ciudad-de-los-prodigios-la-spanish-movie-poster-md.jpg?v=1456841178"

    },
    {
      id: 4,
      nombre: "reyes del futuro",
      linkimagen: "https://edit.org/photos/img/blog/nld-cartel-pelicula-poster-cine-editable-online-gratis-personalizable.jpg-840.jpg"

    },
    {
      id: 5,
      nombre: "metropolis",
      linkimagen: "https://www.allcitycanvas.com/wp-content/uploads/2019/06/metropolis-1.jpg"

    },
    {
      id: 6,
      nombre: "venom",
      linkimagen: "https://www.carlosvillarin.com/wp-content/uploads/cartel-venom-carlos-villarin-freelance.jpg"

    },
    {
      id: 7,
      nombre: " Cisne negro",
      linkimagen: "https://i.blogs.es/af2241/black-swan-3/450_1000.jpg"

    },
    {
      id: 8,
      nombre: "vertigo",
      linkimagen: "https://m.media-amazon.com/images/I/61jyAOZd8AL._AC_SY741_.jpg"

    },
    {
      id: 9,
      nombre: "A y D",
      linkimagen: "https://www.dobleclic.com/wp-content/uploads/2010/03/archivos_imagenes_carteles_a_Angelesydemonios-AngelsandDemons-tt0808151-es.jpg"

    }


  ]

  constructor() {
  }

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

