import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './pantallas/inicio/inicio.component';
import { CatalogoComponent } from './pantallas/catalogo/catalogo.component';
import { NosotrosComponent } from './pantallas/nosotros/nosotros.component';
import { LoginComponent } from './componentes/login/login.component';
import { DetalleComponent } from './pantallas/detalle/detalle.component';
import {CarritoComponent} from "./pantallas/carrito/carrito.component";


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'login', component: LoginComponent},
  { path: 'detalle', component: DetalleComponent },
  { path: 'carrito', component: CarritoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
