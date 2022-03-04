import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbunesComponent } from './Componentes/albunes/albunes.component';
import { CancionesComponent } from './Componentes/canciones/canciones.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { BuscarComponent } from './Componentes/buscar/buscar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpService} from "./Servicios/http.service";

@NgModule({
  declarations: [
    AppComponent,
    AlbunesComponent,
    CancionesComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    HttpService,
    AlbunesComponent,
    BuscarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
