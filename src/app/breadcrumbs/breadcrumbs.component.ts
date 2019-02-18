import {Component, OnInit} from '@angular/core';
import {ICourse} from '../icourse';
import {CoursesService} from '../courses.service';
import {NavigationEnd, Router, UrlSegment} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  public courseObject?: ICourse;
  public isCoursePage = false;

  constructor(private courses: CoursesService,
              private router: Router) {
  }

  ngOnInit() {
    this.router.events.pipe(
      filter((e: any) => e instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const urlParts = event.url.split('/');
      const courseId = +urlParts[urlParts.length - 1];

      if (courseId) {
        console.log(courseId);
        this.isCoursePage = true;
        this.courseObject = this.courses.getCourseById(courseId);
      } else {
        this.isCoursePage = false;
      }
    });
  }

}
