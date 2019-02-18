import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { HighlighCourseDirective } from './-highligh-course.directive';
import { FormatDurationPipe } from './format-duration.pipe';
import { OrderByPipe } from './order-by.pipe';
import {ModalModule} from 'ngx-bootstrap';
import {AuthModule} from './auth/auth.module';
import { AddCourseComponent } from './add-course/add-course.component';
import { InputDurationComponent } from './input-duration/input-duration.component';
import { AddCoursePageComponent } from './add-course-page/add-course-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    LoginComponent,
    LogoutComponent,
    BreadcrumbsComponent,
    CoursesComponent,
    CourseComponent,
    FooterComponent,
    SearchComponent,
    HighlighCourseDirective,
    FormatDurationPipe,
    OrderByPipe,
    AddCourseComponent,
    InputDurationComponent,
    AddCoursePageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
