import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuardianService implements CanActivate {
  constructor(
    private readonly loginService: LoginService,
    private readonly router: Router
  ) {}

  canActivate(): boolean {
    if (this.loginService.isAutenticado()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
