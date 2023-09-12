import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
import { ProductListComponent } from './products/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CarritoComponent,
    CatalogoComponent,
    DetalleComponent,
    InicioComponent,
    NosotrosComponent,
    CabeceraComponent,
    PiePaginaComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
