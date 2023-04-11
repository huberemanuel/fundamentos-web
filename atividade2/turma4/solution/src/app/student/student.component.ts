import { Component } from '@angular/core';
import { cadastros } from '../entities/cadatros';
import { Cadastro } from '../entities/cadastro';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  cadastro? : Cadastro;

  constructor( private route: ActivatedRoute){}

  ngOnInit(){
    this.cadastro = this.getStudentById(this.route.snapshot.params['id'] as number)
  }

  getStudentById(id: number): Cadastro|undefined {
    return cadastros.find((cadastro) => cadastro.id == id);
  }
}
