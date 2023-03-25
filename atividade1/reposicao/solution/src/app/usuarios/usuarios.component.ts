import { Component } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  usuarios = [
    { nome: 'Marcos Vinicius Folena', email: 'mvfolena@hotmail.com' },
    { nome: 'Clebinho hack', email: 'ClebinhoReiDelas@gmail.com' },
    { nome: 'Daniel Orivaldo Da Silva', email: 'DanielBrabo2009@yahoo.com' }
  ];
}
