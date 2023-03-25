import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carro } from '../carro';
import { listaCarros } from '../lista-carros';

@Component({
  selector: 'app-carro-exibicao',
  templateUrl: './carro-exibicao.component.html',
  styleUrls: ['./carro-exibicao.component.css']
})
export class CarroExibicaoComponent implements OnInit{

  idCarro!: number;
  carroExibir: any;

  constructor(public route: ActivatedRoute) {}
  ngOnInit(): void {
    this.idCarro = +this.route.snapshot.params['id'];
    this.carroExibir = this.getCarById(this.idCarro)
  }

  getCarById(idCarro: number): Carro | undefined {
    return listaCarros.find((carro) => carro.id === idCarro);
  }
}
