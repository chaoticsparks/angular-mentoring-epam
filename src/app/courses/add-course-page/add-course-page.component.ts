import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CoursesService} from '../courses.service';
import {Course} from '../course';
import {ICourse} from '../i-course';
import {ICourseFetched} from '../ICourseFetched';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss']
})
export class AddCoursePageComponent {

  public courseToEdit: ICourse;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private courses: CoursesService) {
    this.courseToEdit = new Course(
      '',
      new Date().toISOString(),
      '',
      0,
      false
    );
  }

  public save(course: ICourseFetched) {
    this.courses.createCourse(course).subscribe((data) => {
      this.router.navigate(['/']);
    });
  }

  public cancel(isCanceled: boolean) {
    if (isCanceled) {
      this.router.navigate(['/']);
    }
  }

}
