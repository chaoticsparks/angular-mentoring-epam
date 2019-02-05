import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import {LoginPageComponent} from './auth/login-page/login-page.component';
import {AddCourseComponent} from './add-course/add-course.component';

const routes: Routes = [
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'add-course',
    component: AddCourseComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  { path: '',
    redirectTo: '/courses',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
