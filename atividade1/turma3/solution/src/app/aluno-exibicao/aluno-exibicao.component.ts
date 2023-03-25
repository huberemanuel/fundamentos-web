import { ActivatedRoute } from '@angular/router';
import { Aluno, Alunos } from './../interfaces/aluno';
import { Component } from '@angular/core';

@Component({
  selector: 'app-aluno-exibicao',
  templateUrl: './aluno-exibicao.component.html',
  styleUrls: ['./aluno-exibicao.component.css']
})
export class AlunoExibicaoComponent {

    aluno?: Aluno;

    constructor (private thisRoute: ActivatedRoute){}

    ngOnInit(): void {
      let ra = +this.thisRoute.snapshot.params['id'];
      this.aluno = this.getAlunoByRA(ra);

    }

    getAlunoByRA(RA:number) {
      return Alunos.find(
        (aluno) => aluno.ra === RA
      );
    }

}
