import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { CarritoComponent } from './pantallas/carrito/carrito.component';
import { CatalogoComponent } from './pantallas/catalogo/catalogo.component';
import { DetalleComponent } from './pantallas/detalle/detalle.component';
import { InicioComponent } from './pantallas/inicio/inicio.component';
import { NosotrosComponent } from './pantallas/nosotros/nosotros.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from "@angular/material/grid-list";
import {ProductsModule} from "./products/products.module";

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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    MatGridListModule,
    ProductsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
