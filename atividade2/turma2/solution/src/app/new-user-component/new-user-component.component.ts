import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Dog, dogs } from '../dogs';

@Component({
  selector: 'app-new-user-component',
  templateUrl: './new-user-component.component.html',
  styleUrls: ['./new-user-component.component.css']
})
export class NewUserComponentComponent {
  @ViewChild('form') form!: NgForm;
  user_nome: string = '';
  user_senha: string='';
  user_csenha: string='';
  user_dog: string='';
  dogs: Dog[] = dogs;

  onSubmit(form: NgForm) {
  }

  verificaIgualdade():boolean{
    if(this.user_senha===this.user_csenha)
      return true
    else
      return false
  }


}
