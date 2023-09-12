import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userLogged: boolean = false;

  constructor(public authFire: AngularFireAuth) {
    authFire.authState.subscribe((user) => {
      this.userLogged = !!user; // Verifica si el usuario está autenticado
    });
  }

  loginWithEmail(email: string, password: string) {
    return this.authFire
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(JSON.stringify(user));
      })
      .catch((error) => {
        // Ocurrió un error al iniciar sesión
        console.error('Error al iniciar sesión:', error);
      });
  }

  logout(): Promise<void> {
    return this.authFire.signOut(); // Cierra la sesión del usuario
  }

  isLogin():boolean{
    return this.userLogged;
  }
}
