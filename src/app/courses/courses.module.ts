import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CourseComponent} from './course/course.component';
import {HighlighCourseDirective} from './-highligh-course.directive';
import {FormatDurationPipe} from './format-duration.pipe';
import {OrderByPipe} from './order-by.pipe';
import {AddCourseComponent} from './add-course/add-course.component';
import {InputDurationComponent} from './input-duration/input-duration.component';
import {AddCoursePageComponent} from './add-course-page/add-course-page.component';
import {CoursesPageComponent} from './courses-page/courses-page.component';
import {CoursesRoutingModule} from './courses-routing.module';
import {CoursesSearchComponent} from './search/courses-search.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    CoursesPageComponent,
    CourseComponent,
    HighlighCourseDirective,
    FormatDurationPipe,
    OrderByPipe,
    AddCourseComponent,
    InputDurationComponent,
    AddCoursePageComponent,
    CoursesSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
