import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from './firebase.service';
import { signInWithEmailAndPassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  token: string = '';

  constructor(
    private readonly router: Router,
    private readonly firebaseService: FirebaseService
  ) {}

  login(email: string, password: string) {
    const auth = this.firebaseService.auth;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        auth.currentUser
          ?.getIdToken()
          .then((token) => {
            this.token = token;
            this.router.navigate(['/']);
          })
          .catch((error) => {
            console.warn(`Error al obtener token y navegar a home: ${error}`);
          });
      })
      .catch((error) => {
        console.warn(`Error al iniciar sesión: ${error}`);
      });
  }

  getIdToken() {
    return this.token;
  }
}
