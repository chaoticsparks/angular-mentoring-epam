import {Component, OnDestroy, OnInit} from '@angular/core';
import {ICourseFetched} from '../courses/ICourseFetched';
import {CoursesService} from '../courses/courses.service';
import {NavigationEnd, Router} from '@angular/router';
import {filter, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

  public courseName!: string;
  public isCoursePage = false;
  private unsubscribe: Subject<void> = new Subject();

  constructor(private courses: CoursesService,
              private router: Router) {
  }

  ngOnInit() {
    this.router.events.pipe(
      takeUntil(this.unsubscribe),
      filter((e: any) => e instanceof NavigationEnd),
    ).subscribe((event: NavigationEnd) => {
      const urlParts = event.url.split('/');
      const courseId = +urlParts[urlParts.length - 1];

      if (courseId) {
        this.isCoursePage = true;
        this.courses.getCourseById(courseId)
          .pipe(
            takeUntil(this.unsubscribe),
          )
          .subscribe((course: ICourseFetched) => {
            this.courseName = course.name;
          });
      } else {
        this.isCoursePage = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
  }

}
