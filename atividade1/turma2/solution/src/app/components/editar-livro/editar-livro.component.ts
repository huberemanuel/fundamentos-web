import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from 'src/app/entities/Livro';
import { livros } from 'src/app/entities/Livros';

@Component({
  selector: 'app-editar-livro',
  templateUrl: './editar-livro.component.html',
  styleUrls: ['./editar-livro.component.css']
})
export class EditarLivroComponent implements OnInit {
  id!: number;
  livros: Livro[] = livros;
  livro?: Livro;
  i = 0;
  constructor(private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.buscaLivro(this.id);
  }

  nome!: String;

  buscaLivro(id: number) {
    this.livro = livros.find((livro) => livro.id === this.id);
    // também funciona
    // for (this.i = 0; this.i < livros.length; this.i++) {
    //   if (id == livros[this.i].id)
    //     this.livro = livros[this.i];
    // }
  }

  salvarLivro() {
    console.log(this.nome);

    this.router.navigate(["/"]);
  }
}
