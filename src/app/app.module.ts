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
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
