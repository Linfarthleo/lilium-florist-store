import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< Updated upstream

const routes: Routes = [];
=======
import { InicioComponent } from './pantallas/inicio/inicio.component';
import { CatalogoComponent } from './pantallas/catalogo/catalogo.component';
import { NosotrosComponent } from './pantallas/nosotros/nosotros.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'login', component: LoginComponent,
  },
];
>>>>>>> Stashed changes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
