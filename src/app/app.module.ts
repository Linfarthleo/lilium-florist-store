import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarritoComponent } from './pantallas/carrito/carrito.component';
import { CatalogoComponent } from './pantallas/catalogo/catalogo.component';
import { DetalleComponent } from './pantallas/detalle/detalle.component';
import { InicioComponent } from './pantallas/inicio/inicio.component';
import { NosotrosComponent } from './pantallas/nosotros/nosotros.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CarritoComponent,
    CatalogoComponent,
    DetalleComponent,
    InicioComponent,
    NosotrosComponent,
    CabeceraComponent,
    PiePaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
