import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserComponentComponent } from './new-user-component/new-user-component.component';

const routes: Routes = [
  {path:'new_user',component:NewUserComponentComponent},
  {path:'',redirectTo:'new_user',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
