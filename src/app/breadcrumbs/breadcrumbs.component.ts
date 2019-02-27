import {Component, OnInit} from '@angular/core';
import {ICourseFetched} from '../courses/ICourseFetched';
import {CoursesService} from '../courses/courses.service';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  public courseName!: string;
  public isCoursePage = false;

  constructor(private courses: CoursesService,
              private router: Router) {
  }

  ngOnInit() {
    this.router.events.pipe(
      filter((e: any) => e instanceof NavigationEnd),
    ).subscribe((event: NavigationEnd) => {
      const urlParts = event.url.split('/');
      const courseId = +urlParts[urlParts.length - 1];

      if (courseId) {
        this.isCoursePage = true;
        this.courses.getCourseById(courseId)
          .subscribe((course: ICourseFetched) => {
            this.courseName = course.name;
          });
      } else {
        this.isCoursePage = false;
      }
    });
  }

}
