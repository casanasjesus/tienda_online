import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  titulo = 'Tienda Online';

  constructor(private readonly loginService: LoginService) {}

  isAutenticado(): boolean {
    return this.loginService.isAutenticado();
  }

  logout(): void {
    this.loginService.logout();
  }
}
