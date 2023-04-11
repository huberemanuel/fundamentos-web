import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Curso } from '../entities/curso';
import { cursos } from '../entities/cursos';
import { Cadastro } from '../entities/cadastro';
import { cadastros } from '../entities/cadatros';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent {
  nome: string = 'Nome';
  foto?: string;
  idCurso? : number;
  idade : number = 0;

  lastId : number = 0;
  cursos: Curso[] = cursos
  cadastros?: Cadastro[] = cadastros
  isSubmitted : boolean = false;

  @ViewChild('form') form!: NgForm;

  onSubmit() {
    this.isSubmitted = true;
    console.log(this.form.valid);
    this.lastId++;

    if(this.cadastros == null){
      this.cadastros =  [
        new Cadastro(this.lastId,this.nome, this.foto as string, this.idCurso as number, this.idade)
      ]
    }

    else{
      this.cadastros.push(new Cadastro(this.lastId,this.nome, this.foto as string, this.idCurso as number, this.idade))
    }
    console.log(this.lastId);
  }

  validateFoto() : boolean {
    if(this.foto?.toLowerCase().includes("http") || this.foto?.toLowerCase().includes("https"))
      return true
    
    return false
  }
}

