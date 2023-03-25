import { Component } from '@angular/core';
import { Livro } from 'src/app/entities/Livro';
import { livros } from 'src/app/entities/Livros';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent {
  livros: Livro[] = livros;
}
