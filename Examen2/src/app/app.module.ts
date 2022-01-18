import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';
import { ListaImagenesComponent } from './lista-imagenes/lista-imagenes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPeliculasComponent,
    ListaImagenesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
