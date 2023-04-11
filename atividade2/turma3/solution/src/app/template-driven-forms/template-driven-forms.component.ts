import { NgForm } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { CURSOS } from '../interfaces/curso';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss']
})
export class TemplateDrivenFormsComponent {

  cursos = CURSOS;
  @ViewChild('form') myForm!: NgForm;

  nome: string = 'Nome';
  curso?: number;
  idade?: number;

  submitted: boolean = false;

  onSubmit(): void {
    if (this.myForm.valid) {
      this.submitted = true
    }
    else {
      this.submitted = false
    }

  }
}
