import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { dogs,Dog } from './dogs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') form!: NgForm;
  nome:string='';
  favoriteDog:string='';
  dogs : Dog[] = dogs; 

  getDog(nome:string){
    let aux
    this.dogs.forEach((dog)=>{
        if(dog.name === nome){
           aux=dog.img_url;
        }
    });

    return aux;
  }

}
