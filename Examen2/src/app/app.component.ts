import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Examen2';
  url = 'https://i.blogs.es/d00222/dune-1-scaled/450_1000.jpeg'
  urlMenuHamburguesa = 'https://play.hbomax.com/assets/images/primary_nav/desktop/browse_default_max.svg'
  urlBuscar= 'https://play.hbomax.com/assets/images/primary_nav/desktop/search_default_max.svg'
  urlHbo= 'https://www.hbolatam.com/Content/img/logo-HBO_Max-White.png'
  urlFotoUusario= 'https://es.web.img3.acsta.net/c_310_420/pictures/15/07/20/17/24/353481.jpg'
  urlReprod='https://play.hbomax.com/assets/images/buttons/hbomax/btn_play_filled_gray0_20_3.png'
  urlfondo='https://play.hbomax.com/assets/images/backgrounds/hbomax/default_1920x1080.png'
  arregloPeliculasSoloParaTi = [
    {id: 1,
      nombre: "looper",
      linkimagen: "https://i1.wp.com/www.sopitas.com/wp-content/uploads/2013/04/Posters-1.jpg"

    },
    {id: 2,
      nombre: "shang/chi",
      linkimagen: "https://i.pinimg.com/originals/15/e1/8e/15e18e1aa97f2195e5e715268cce6dfe.jpg"

    },
    {id: 3,
      nombre: "21JumpS",
      linkimagen: "https://i2.wp.com/elpoderdelasideas.com/wp-content/uploads/posters-cine-2012-1.jpg"

    },
    {id: 4,
      nombre: "the story",
      linkimagen: "https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/147906/147906_600x890.jpg"

    },
    {id: 5,
      nombre: "Jurasick W",
      linkimagen: "https://www.carlosvillarin.com/wp-content/uploads/cartel-jurassic-world-1-carlos-villarin-freelance.jpg"

    },
    {id: 6,
      nombre: "oculus",
      linkimagen: "https://www.roc21.com/blog/wp-content/uploads/2014/03/posters-de-peliculas-del-2014-tres.jpg"

    },
    {id: 7,
      nombre: "La forma del a",
      linkimagen: "https://decine21.com/images/noticias/270/la_forma_del_agua_cartel_spoiler.jpg"

    },
    {id: 8,
      nombre: "lady bird",
      linkimagen: "https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/114/posts/35927/image/LadyBird.jpg"

    },
    {id: 9,
      nombre: "Suicide S",
      linkimagen: "https://miro.medium.com/max/1200/1*HiQk4ePON4C28kr4ymns2Q.jpeg"

    },
    {id: 10,
      nombre: "Jurasick W",
      linkimagen: "https://www.carlosvillarin.com/wp-content/uploads/cartel-jurassic-world-1-carlos-villarin-freelance.jpg"

    },
    {id: 11,
      nombre: "oculus",
      linkimagen: "https://www.roc21.com/blog/wp-content/uploads/2014/03/posters-de-peliculas-del-2014-tres.jpg"

    },
    {id: 12,
      nombre: "La forma del a",
      linkimagen: "https://decine21.com/images/noticias/270/la_forma_del_agua_cartel_spoiler.jpg"

    }


  ]


  milista = [
    {id: 1,
      nombre: "looper",
      linkimagen: "https://i1.wp.com/www.sopitas.com/wp-content/uploads/2013/04/Posters-1.jpg"

    },
    {id: 2,
      nombre: "avatar",
      linkimagen: "https://i0.wp.com/hipertextual.com/wp-content/uploads/2016/10/avatar-poster-01.jpg?resize=600%2C886&ssl=1"

    },
    {id: 3,
      nombre: "21JumpS",
      linkimagen: "https://i2.wp.com/elpoderdelasideas.com/wp-content/uploads/posters-cine-2012-1.jpg"

    },
    {id: 4,
      nombre: "reyes del futuro",
      linkimagen: "https://edit.org/photos/img/blog/nld-cartel-pelicula-poster-cine-editable-online-gratis-personalizable.jpg-840.jpg"

    },
    {id: 5,
      nombre: "Jurasick W",
      linkimagen: "https://www.carlosvillarin.com/wp-content/uploads/cartel-jurassic-world-1-carlos-villarin-freelance.jpg"

    },
    {id: 6,
      nombre: "venom",
      linkimagen: "https://www.carlosvillarin.com/wp-content/uploads/cartel-venom-carlos-villarin-freelance.jpg"

    },
    {id: 7,
      nombre: "La forma del a",
      linkimagen: "https://decine21.com/images/noticias/270/la_forma_del_agua_cartel_spoiler.jpg"

    },
    {id: 8,
      nombre: "vertigo",
      linkimagen: "https://m.media-amazon.com/images/I/61jyAOZd8AL._AC_SY741_.jpg"

    },
    {id: 9,
      nombre: "Suicide S",
      linkimagen: "https://miro.medium.com/max/1200/1*HiQk4ePON4C28kr4ymns2Q.jpeg"

    },
    {id: 10,
      nombre: "reyes del futuro",
      linkimagen: "https://edit.org/photos/img/blog/nld-cartel-pelicula-poster-cine-editable-online-gratis-personalizable.jpg-840.jpg"

    },
    {id: 11,
      nombre: "Suicide S",
      linkimagen: "https://miro.medium.com/max/1200/1*HiQk4ePON4C28kr4ymns2Q.jpeg"

    }


  ]

  iconicaseimperdibles = [
    {id: 1,
      nombre: "xmen",
      linkimagen: "https://i0.wp.com/hipertextual.com/wp-content/uploads/2016/10/10346626_260153840835091_3121210337900902159_n1.jpg?resize=600%2C889&ssl=1"

    },
    {id: 2,
      nombre: "shang/chi",
      linkimagen: "https://i.pinimg.com/originals/15/e1/8e/15e18e1aa97f2195e5e715268cce6dfe.jpg"

    },
    {id: 3,
      nombre: "prodigio",
      linkimagen: "https://cdn.cinematerial.com/p/297x/ss896cit/ciudad-de-los-prodigios-la-spanish-movie-poster-md.jpg?v=1456841178"

    },
    {id: 4,
      nombre: "the story",
      linkimagen: "https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/147906/147906_600x890.jpg"

    },
    {id: 5,
      nombre: "metropolis",
      linkimagen: "https://www.allcitycanvas.com/wp-content/uploads/2019/06/metropolis-1.jpg"

    },
    {id: 6,
      nombre: "oculus",
      linkimagen: "https://www.roc21.com/blog/wp-content/uploads/2014/03/posters-de-peliculas-del-2014-tres.jpg"

    },
    {id: 7,
      nombre: " Cisne negro",
      linkimagen: "https://i.blogs.es/af2241/black-swan-3/450_1000.jpg"

    },
    {id: 8,
      nombre: "lady bird",
      linkimagen: "https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/114/posts/35927/image/LadyBird.jpg"

    },
    {id: 9,
      nombre: "A y D",
      linkimagen: "https://www.dobleclic.com/wp-content/uploads/2010/03/archivos_imagenes_carteles_a_Angelesydemonios-AngelsandDemons-tt0808151-es.jpg"

    }


  ]



}


