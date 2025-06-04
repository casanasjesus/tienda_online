import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private readonly loginService: LoginService) {}

  login(form: NgForm) {
    const { email, password } = form.value;
    this.loginService.login(email, password);
  }
}
