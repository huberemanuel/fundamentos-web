import { Component } from '@angular/core';
import { Carro } from '../carro';
import { listaCarros } from '../lista-carros';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  carros: Carro[] = listaCarros;

}
