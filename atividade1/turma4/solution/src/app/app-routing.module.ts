import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarroExibicaoComponent } from './carro-exibicao/carro-exibicao.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'carro/:id', component: CarroExibicaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
