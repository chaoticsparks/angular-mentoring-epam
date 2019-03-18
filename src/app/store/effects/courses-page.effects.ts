import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {
  CloseDeleteModal, CloseDeleteModalSuccess,
  CoursesPageActionTypes,
  FetchCourses,
  FetchCoursesSuccess,
  FetchMoreCourses,
  FetchMoreCoursesEmpty,
  FetchMoreCoursesSuccess,
  OpenDeleteModal,
  OpenDeleteModalSuccess,
  RemoveCourse, RemoveCourseFailed,
  RemoveCourseSuccess,
  SearchCourses,
  SearchCoursesSuccess,
} from '../actions/courses-page.actions';
import {map, mergeMap, switchMap, tap, withLatestFrom} from 'rxjs/operators';
import {CoursesService} from '../../courses/courses.service';
import {ICourseFetched} from '../../courses/ICourseFetched';
import {IAppState} from '../reducers';
import {select, Store} from '@ngrx/store';
import {selectCoursesStartFrom, selectCourseToDelete, selectModalDeleteWindow} from '../selectors/courses-page.selectors';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {of} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';


@Injectable()
export class CoursesPageEffects {

  @Effect()
  fetchCourses$ = this.actions$.pipe(
    ofType<FetchCourses>(CoursesPageActionTypes.FetchCourses),
    mergeMap(() => {
      return this.coursesService.getList(0);
    }),
    map((courses: ICourseFetched[]) => new FetchCoursesSuccess(courses))
  );

  @Effect()
  fetchMoreCourses$ = this.actions$.pipe(
    ofType<FetchMoreCourses>(CoursesPageActionTypes.FetchMoreCourses),
    withLatestFrom(this.store.pipe(select(selectCoursesStartFrom)), (action, startFrom) => startFrom), // Why it emits several times? could we use another operator?
    mergeMap((startFrom) => {
      return this.coursesService.getList(startFrom);
    }),
    map((courses: ICourseFetched[]) => courses.length === 0 ? new FetchMoreCoursesEmpty() : new FetchMoreCoursesSuccess(courses))
  );


  @Effect()
  searchCourses$ = this.actions$.pipe(
    ofType<SearchCourses>(CoursesPageActionTypes.SearchCourses),
    mergeMap((action) => {
      return this.coursesService.findCourse(action.payload);
    }),
    map((courses: ICourseFetched[]) => new SearchCoursesSuccess(courses))
  );

  @Effect()
  openDeleteModal$ = this.actions$.pipe(
    ofType<OpenDeleteModal>(CoursesPageActionTypes.OpenDeleteModal),
    map((action) => {
      return new OpenDeleteModalSuccess({modal: this.modalService.show(action.payload.template), id: action.payload.id});
    })
  );

  @Effect()
  closeDeleteModal$ = this.actions$.pipe(
    ofType<CloseDeleteModal>(CoursesPageActionTypes.CloseDeleteModal),
    withLatestFrom(this.store.pipe(select(selectModalDeleteWindow)), (action, modal) => modal),
    map((modal) => {
      if (modal) {
        modal.hide();
        return new CloseDeleteModalSuccess();
      }
    })
  );

  @Effect()
  removeCourse$ = this.actions$.pipe(
    ofType<RemoveCourse>(CoursesPageActionTypes.RemoveCourse),
    withLatestFrom(this.store.pipe(select(selectCourseToDelete)), (action, courseToDelete) => courseToDelete),
    mergeMap((courseToDelete) => this.coursesService.removeCourse(courseToDelete as number)),
    map((error: HttpErrorResponse) => error.message ? new RemoveCourseFailed(error) : new RemoveCourseSuccess())
  );

  @Effect()
  removeCourseSuccess$ = this.actions$.pipe(
    ofType<RemoveCourseSuccess>(CoursesPageActionTypes.RemoveCourseSuccess),
    tap(() => {
      this.store.dispatch(new CloseDeleteModal());
    }),
    map(() => new FetchCourses())
  );

  constructor(private actions$: Actions,
              private coursesService: CoursesService,
              private store: Store<IAppState>,
              private modalService: BsModalService) {
  }

}
