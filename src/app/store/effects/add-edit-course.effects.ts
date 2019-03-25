import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {
  AddEditCourseActionTypes,
  FetchCourseToEdit, FetchCourseToEditFailed,
  FetchCourseToEditSuccess
} from '../actions/add-edit-course.actions';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {CoursesService} from '../../courses/courses.service';
import {ICourseFetched} from '../../courses/ICourseFetched';



@Injectable()
export class AddEditCourseEffects {

  @Effect()
  fetchCourseToEdit$ = this.actions$.pipe(
    ofType<FetchCourseToEdit>(AddEditCourseActionTypes.FetchCourseToEdit),
    switchMap((action) => {
      if (!action.payload) {
        throw new Error('Wrong course id parameter');
      }
      return this.courses.getCourseById(action.payload);
    }),
    map((course: ICourseFetched) => new FetchCourseToEditSuccess(course)),
    catchError(((err, stream) => {
      console.log('Course not fetched. Redirecting..', err);
      this.router.navigate(['/']);
      return stream;
    }))
  );

  constructor(private actions$: Actions,
              private courses: CoursesService,
              private router: Router) {}

}
