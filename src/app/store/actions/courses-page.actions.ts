import {Action} from '@ngrx/store';
import {ICourseFetched} from '../../courses/ICourseFetched';
import {TemplateRef} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';

export enum CoursesPageActionTypes {
  FetchCourses = '[CoursesPage] Fetch courses',
  FetchCoursesSuccess = '[CoursesPage] Courses successfully fetched',
  IncrementStartFrom = '[CoursesPage] Increment starting page to fetch more courses',
  FetchMoreCourses = '[CoursesPage] Fetch next page of courses',
  FetchMoreCoursesSuccess = '[CoursesPage] Next page of courses has been successfully fetched',
  FetchMoreCoursesEmpty = '[CoursesPage] No more courses',
  SearchCourses = '[CoursesPage] Search courses',
  SearchCoursesSuccess = '[CoursesPage] Search courses success',
  OpenDeleteModal = '[CoursesPage] Open modal window that confirms deletion of the course',
  OpenDeleteModalSuccess = '[CoursesPage] Open modal window success',
  CloseDeleteModal = '[CoursesPage] Close modal window that confirms deletion of the course',
  CloseDeleteModalSuccess = '[CoursesPage] Close modal window success',
  RemoveCourse = '[CoursesPage] Remove the course',
  RemoveCourseSuccess = '[CoursesPage] Remove the course success',
  RemoveCourseFailed = '[CoursesPage] Remove the course failed',
}

export class FetchCourses implements Action {
  readonly type = CoursesPageActionTypes.FetchCourses;
}

export class FetchCoursesSuccess implements Action {
  readonly type = CoursesPageActionTypes.FetchCoursesSuccess;

  constructor(public payload: ICourseFetched[]) {
  }
}

export class IncrementStartFrom implements Action {
  readonly type = CoursesPageActionTypes.IncrementStartFrom;
}

export class FetchMoreCourses implements Action {
  readonly type = CoursesPageActionTypes.FetchMoreCourses;
}

export class FetchMoreCoursesSuccess implements Action {
  readonly type = CoursesPageActionTypes.FetchMoreCoursesSuccess;

  constructor(public payload: ICourseFetched[]) {
  }
}

export class FetchMoreCoursesEmpty implements Action {
  readonly type = CoursesPageActionTypes.FetchMoreCoursesEmpty;
}


export class SearchCourses implements Action {
  readonly type = CoursesPageActionTypes.SearchCourses;

  constructor(public payload: string) {
  }
}

export class SearchCoursesSuccess implements Action {
  readonly type = CoursesPageActionTypes.SearchCoursesSuccess;

  constructor(public payload: ICourseFetched[]) {
  }
}

export class OpenDeleteModal implements Action {
  readonly type = CoursesPageActionTypes.OpenDeleteModal;

  constructor(public payload: {
    template: TemplateRef<any>;
    id: number
  }) {
  }
}

export class OpenDeleteModalSuccess implements Action {
  readonly type = CoursesPageActionTypes.OpenDeleteModalSuccess;

  constructor(public payload: {
    modal: BsModalRef,
    id: number
  }) {
  }
}

export class CloseDeleteModal implements Action {
  readonly type = CoursesPageActionTypes.CloseDeleteModal;
}

export class CloseDeleteModalSuccess implements Action {
  readonly type = CoursesPageActionTypes.CloseDeleteModalSuccess;
}

export class RemoveCourse implements Action {
  readonly type = CoursesPageActionTypes.RemoveCourse;
}

export class RemoveCourseSuccess implements Action {
  readonly type = CoursesPageActionTypes.RemoveCourseSuccess;
}

export class RemoveCourseFailed implements Action {
  readonly type = CoursesPageActionTypes.RemoveCourseFailed;

  constructor(public payload: any) {
  }
}

export type CoursesPageActions =
  FetchCourses
  | FetchCoursesSuccess
  | IncrementStartFrom
  | FetchMoreCoursesEmpty
  | SearchCourses
  | SearchCoursesSuccess
  | OpenDeleteModal
  | OpenDeleteModalSuccess
  | CloseDeleteModal
  | CloseDeleteModalSuccess
  | RemoveCourseSuccess
  | RemoveCourseFailed
  | FetchMoreCourses
  | FetchMoreCoursesSuccess;

