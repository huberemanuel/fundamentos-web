import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(private router: Router) {

  }

  user : string = ""
  senha : string = ""
  mensagem : boolean = false

  login(){
    if(this.user == "admin" && this.senha == "123"){
      this.router.navigate(['/home']);
    }else{
      this.mensagem = true
      this.user = ""
      this.senha = ""
    }
  }
}
