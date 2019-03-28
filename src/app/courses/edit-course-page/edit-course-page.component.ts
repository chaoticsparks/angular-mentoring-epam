import {Component, OnDestroy, OnInit} from '@angular/core';
import {ICourseFetched} from '../ICourseFetched';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CoursesService} from '../courses.service';
import {Observable, of, Subject, Subscription} from 'rxjs';
import {catchError, map, switchMap, takeUntil} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {selectCourseToSumbit} from '../../store/selectors/add-edit-course.selectors';
import {IAppState} from '../../store/reducers';
import {FetchCourseToEdit} from '../../store/actions/add-edit-course.actions';

@Component({
  selector: 'app-edit-course-page',
  templateUrl: './edit-course-page.component.html',
  styleUrls: ['./edit-course-page.component.scss']
})
export class EditCoursePageComponent implements OnInit, OnDestroy {

  public courseToEdit$ = this.store.pipe(select(selectCourseToSumbit));
  private unsubscribe: Subject<void> = new Subject();

  constructor(private router: Router,
              private courses: CoursesService,
              private route: ActivatedRoute,
              private store: Store<IAppState>) {
  }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        takeUntil(this.unsubscribe),
        map((params: ParamMap) => Number(params.get('id')))
      ).subscribe((id) => {
      this.store.dispatch(new FetchCourseToEdit(id));
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
  }

  public save(course: ICourseFetched) {
    this.courses.updateItem(course.id, course)
      .pipe(
        takeUntil(this.unsubscribe),
      )
      .subscribe((data) => {
      this.router.navigate(['/']);
    });
  }

  public cancel(isCanceled: boolean) {
    if (isCanceled) {
      this.router.navigate(['/']);
    }
  }
}
