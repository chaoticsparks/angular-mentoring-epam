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
import {of} from 'rxjs';
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
    /*
      TODO: If open course edit page with wrong ID (e.g. "http://localhost:4200/courses/3946xxx") error is caught and redirecting works
      but if after that open another course edit page with proper id - page is broken and action dispatched with proper id but this effect
       does not work
     */
    map((course: ICourseFetched) => new FetchCourseToEditSuccess(course)),
    catchError((err => {
      console.log('Course not fetched. Redirecting..', err);
      this.router.navigate(['/']);
      return of(new FetchCourseToEditFailed());
    }))
  );

  constructor(private actions$: Actions,
              private courses: CoursesService,
              private router: Router) {}

}
