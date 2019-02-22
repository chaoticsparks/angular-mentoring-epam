import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from '../auth/auth.guard';
import {CoursesPageComponent} from './courses-page/courses-page.component';
import {AddCoursePageComponent} from './add-course-page/add-course-page.component';
import {EditCoursePageComponent} from './edit-course-page/edit-course-page.component';

const routes: Routes = [
  {
    path: 'courses',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: CoursesPageComponent,
      },
      {
        path: 'new',
        component: AddCoursePageComponent
      },
      {
        path: ':id',
        component: EditCoursePageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule {
}
