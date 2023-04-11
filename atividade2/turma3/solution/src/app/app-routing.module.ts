import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewStudentComponentComponent } from './new-student-component/new-student-component.component';

const routes: Routes = [
  {path:'', redirectTo:'/new_student', pathMatch:'full'},
  {path:'new_student', component: NewStudentComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
