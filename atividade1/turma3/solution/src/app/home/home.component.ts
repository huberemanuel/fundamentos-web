import { Router } from '@angular/router';
import { Alunos } from './../interfaces/aluno';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  alunos = Alunos;

  constructor(private route: Router) { }

  // navigateToRa(RA: number): void {
  //   this.route.navigate(['/aluno', RA])

  // }

}
