import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CoursesService} from '../courses.service';
import {Course} from '../course';
import {ICourse} from '../i-course';
import {ICourseFetched} from '../ICourseFetched';
import {IAppState} from '../../store/reducers';
import {select, Store} from '@ngrx/store';
import {CreateNewCourse} from '../../store/actions/add-edit-course.actions';
import {selectCourseToSumbit} from '../../store/selectors/add-edit-course.selectors';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss']
})
export class AddCoursePageComponent implements OnInit, OnDestroy {

  public courseToAdd$ = this.store.pipe(select(selectCourseToSumbit));
  private subscription!: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private courses: CoursesService,
              private store: Store<IAppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(new CreateNewCourse(new Course(
      '',
      new Date().toISOString(),
      '',
      0,
      false,
      []
    )));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public save(course: ICourseFetched) {
    this.subscription = this.courses.createCourse(course).subscribe((data) => {
      this.router.navigate(['/']);
    });
  }

  public cancel(isCanceled: boolean) {
    if (isCanceled) {
      this.router.navigate(['/']);
    }
  }

}
