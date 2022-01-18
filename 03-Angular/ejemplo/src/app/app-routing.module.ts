import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import {RutaForbiddenComponent} from "./rutas/ruta-forbidden/ruta-forbidden.component";
import {RutaNotFoundComponent} from "./rutas/ruta-not-found/ruta-not-found.component";
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaUsuarioComponent} from "./rutas/ruta-usuario/ruta-usuario.component";
import {RutaPostComponent} from "./rutas/ruta-post/ruta-post.component";
import {RutaAppComponent} from "./rutas/ruta-app/ruta-app.component";
import {estaLogueadoGuard} from "./servicios/auth/esta-logueado.guard";
import {es_administradorGuard} from "./servicios/auth/es_administrador.guard";

const routes: Routes = [
  {
    path:"lazy-inventario",
    loadChildren: () => import("./modulos/modulo-inventario/modulo-inventario.module")
      .then(m => m.ModuloInventarioModule)
  },
  {
    path: "login",
    component: RutaLoginComponent
  },
  {
    path: "forbidden",
    component: RutaForbiddenComponent
  },
  {
    path: "not-found",
    component: RutaNotFoundComponent
  },
  {
    path:"",
    component: RutaLoginComponent,
    pathMatch: "full"
  },
  {
    path: "inicio",
    canActivate:[estaLogueadoGuard],
    component: RutaInicioComponent

  },
  {
    path: "app",
    component: RutaAppComponent,
    children:[
      {
        path: "usuario",
        component: RutaUsuarioComponent
      },
      {
        path: "post",
        canActivate: [es_administradorGuard],
        component: RutaPostComponent
      }
    ]
  },
  {
    path: "**",
    component: RutaNotFoundComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
