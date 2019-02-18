import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router, UrlSegment} from '@angular/router';
import {CoursesService} from '../courses.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ICourse} from '../icourse';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss']
})
export class AddCoursePageComponent implements OnInit {

  courseToEdit$!: Observable<any>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private courses: CoursesService) { }

  ngOnInit() {
    this.courseToEdit$ = this.route.paramMap.pipe(
      map((params: ParamMap) => {
        const courseId = this.courses.getCourseById(+params.get('id'));
        if (typeof courseId === 'undefined') {
          this.router.navigate(['/']);
        } else {
          return courseId;
        }
      })
    );
  }

  public save(course: ICourse) {
    if (this.courses.updateItem(course.id, course)) {
      this.router.navigate(['/']);
    }
  }

  public cancel(isCanceled: boolean) {
    if (isCanceled) {
      this.router.navigate(['/']);
    }
  }

}
