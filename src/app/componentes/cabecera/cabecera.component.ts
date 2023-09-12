import { Component} from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss'],
})
export class CabeceraComponent {
  carrito = faCartShopping;

  constructor(private router:Router, private authService: AuthService){}

  isUserLogged(): boolean {
    return this.authService.isLogin();
  }

  logout(): void {
    this.authService
      .logout()
      .then(() => {
        console.log('Cierre de sesión exitoso');
      })
      .catch((error) => {
        console.log('Error al cerrar sesión', error);
      });
  }

}
