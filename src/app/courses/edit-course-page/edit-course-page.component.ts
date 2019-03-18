import {Component, OnDestroy, OnInit} from '@angular/core';
import {ICourseFetched} from '../ICourseFetched';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CoursesService} from '../courses.service';
import {Observable, of, Subscription} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {selectCourseToSumbit} from '../../store/selectors/add-edit-course.selectors';
import {IAppState} from '../../store/reducers';
import {FetchCourseToEdit} from '../../store/actions/add-edit-course.actions';

@Component({
  selector: 'app-edit-course-page',
  templateUrl: './edit-course-page.component.html',
  styleUrls: ['./edit-course-page.component.scss']
})
export class EditCoursePageComponent implements OnInit {

  public courseToEdit$ = this.store.pipe(select(selectCourseToSumbit));

  constructor(private router: Router,
              private courses: CoursesService,
              private route: ActivatedRoute,
              private store: Store<IAppState>) {
  }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map((params: ParamMap) => Number(params.get('id')))
      ).subscribe((id) => {
      this.store.dispatch(new FetchCourseToEdit(id));
    });
  }

  public save(course: ICourseFetched) {
    this.courses.updateItem(course.id, course).subscribe((data) => { // TODO: Is that ok to not move it to effects?
      this.router.navigate(['/']);
    });
  }

  public cancel(isCanceled: boolean) { // TODO: Is that ok to not move it to effects?
    if (isCanceled) {
      this.router.navigate(['/']);
    }
  }
}
