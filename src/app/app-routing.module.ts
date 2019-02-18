import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import {LoginPageComponent} from './auth/login-page/login-page.component';
import {AddCoursePageComponent} from './add-course-page/add-course-page.component';
import {AuthGuard} from './auth/auth.guard';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'courses',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: CoursesComponent,
      },
      {
        path: 'new',
        component: AddCoursePageComponent
      },
      {
        path: ':id',
        component: AddCoursePageComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  { path: '',
    redirectTo: '/courses',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
