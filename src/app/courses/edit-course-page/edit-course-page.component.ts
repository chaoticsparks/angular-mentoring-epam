import { Component, OnInit } from '@angular/core';
import {ICourseFetched} from '../ICourseFetched';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CoursesService} from '../courses.service';
import {Observable, of} from 'rxjs';
import {catchError, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-edit-course-page',
  templateUrl: './edit-course-page.component.html',
  styleUrls: ['./edit-course-page.component.scss']
})
export class EditCoursePageComponent implements OnInit {

  public courseToEdit$!: Observable<ICourseFetched>;

  constructor(private router: Router,
              private courses: CoursesService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.courseToEdit$ = this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          const courseId = Number(params.get('id'));
          if (courseId) {
            return this.courses.getCourseById(courseId);
          } else {
            throw new Error('Wrong course id parameter');
          }
        }),
        catchError((err => {
          this.router.navigate(['/']);
          throw Error ('Course not fetched. Redirecting..');
        }))
      );
  }

  public save(course: ICourseFetched) {
    this.courses.updateItem(course.id, course).subscribe((data) => {
      this.router.navigate(['/']);
    });
  }

  public cancel(isCanceled: boolean) {
    if (isCanceled) {
      this.router.navigate(['/']);
    }
  }
}
