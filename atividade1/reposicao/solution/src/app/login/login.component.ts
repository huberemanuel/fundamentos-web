import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario?: string;
  senha?: string;
  mensagemErro?: string;

  constructor(private router: Router) {}

  validarLogin(): void {
    if (this.usuario === 'admin' && this.senha === '123') {
      this.router.navigate(['/home']);
    } else {
      this.mensagemErro = `Usuário ${this.usuario} ou senha inválido`;
    }
  }
}
