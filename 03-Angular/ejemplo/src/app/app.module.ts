import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaNotFoundComponent } from './rutas/ruta-not-found/ruta-not-found.component';
import { RutaForbiddenComponent } from './rutas/ruta-forbidden/ruta-forbidden.component';
import { RutaUsuarioComponent } from './rutas/ruta-usuario/ruta-usuario.component';
import { RutaPostComponent } from './rutas/ruta-post/ruta-post.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaAppComponent } from './rutas/ruta-app/ruta-app.component';
import {AuthService} from "./servicios/auth/auth.service";
import {estaLogueadoGuard} from "./servicios/auth/esta-logueado.guard";
import {es_administradorGuard} from "./servicios/auth/es_administrador.guard";
import {BannerImagenesModule} from "./componentes/banner-imagenes/banner-imagenes.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RutaUsuarioPerfilComponent } from './rutas/ruta-usuario-perfil/ruta-usuario-perfil.component';
import {InputSwitchModule} from "primeng/inputswitch";
import {KnobModule} from "primeng/knob";
import {SplitButtonModule} from "primeng/splitbutton";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButton, MatButtonModule} from "@angular/material/button";

@NgModule({
  //componentes
  declarations: [
    AppComponent,
    RutaLoginComponent,
    RutaNotFoundComponent,
    RutaForbiddenComponent,
    RutaUsuarioComponent,
    RutaPostComponent,
    RutaInicioComponent,
    RutaAppComponent,
    RutaUsuarioPerfilComponent
  ],
  //modulos
  imports: [
    BrowserModule,
    AppRoutingModule,
    BannerImagenesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InputSwitchModule,
    KnobModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  //servicios
  providers: [
    AuthService,
    estaLogueadoGuard,
    es_administradorGuard
  ],
  //componente principal Aqui es donde empieza todo
  bootstrap: [AppComponent]
})
export class AppModule { }
