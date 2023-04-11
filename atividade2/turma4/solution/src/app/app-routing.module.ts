import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewStudentComponent } from './new-student/new-student.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  { path: 'new_student', component: NewStudentComponent },
  { path: 'student/:id', component: StudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
