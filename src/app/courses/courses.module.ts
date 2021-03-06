import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CourseComponent} from './course/course.component';
import {HighlighCourseDirective} from './-highligh-course.directive';
import {FormatDurationPipe} from './format-duration.pipe';
import {OrderByPipe} from './order-by.pipe';
import {CourseFormComponent} from './course-form/course-form.component';
import {InputDurationComponent} from './input-duration/input-duration.component';
import {AddCoursePageComponent} from './add-course-page/add-course-page.component';
import {CoursesPageComponent} from './courses-page/courses-page.component';
import {CoursesRoutingModule} from './courses-routing.module';
import {CoursesSearchComponent} from './search/courses-search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { EditCoursePageComponent } from './edit-course-page/edit-course-page.component';
import { InputDateComponent } from './input-date/input-date.component';
import { InputAuthorsComponent } from './input-authors/input-authors.component';

@NgModule({
  declarations: [
    CoursesPageComponent,
    CourseComponent,
    HighlighCourseDirective,
    FormatDurationPipe,
    OrderByPipe,
    CourseFormComponent,
    InputDurationComponent,
    AddCoursePageComponent,
    CoursesSearchComponent,
    EditCoursePageComponent,
    InputDateComponent,
    InputAuthorsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
