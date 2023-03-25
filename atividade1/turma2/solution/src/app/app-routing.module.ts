import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarLivroComponent } from './components/editar-livro/editar-livro.component';
import { LivrosComponent } from './components/livros/livros.component';

const routes: Routes = [
  {path:'', redirectTo:'livros', pathMatch:'full'},
  {path:'livros', component: LivrosComponent},
  {path:'livro', component: EditarLivroComponent},
  {path:'livro/:id', component: EditarLivroComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
