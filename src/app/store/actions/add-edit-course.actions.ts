import { Action } from '@ngrx/store';
import {ICourse} from '../../courses/i-course';

export enum AddEditCourseActionTypes {
  CreateNewCourse = '[AddEditCourse] Create empty course object to edit',
  FetchCourseToEdit = '[AddEditCourse] Fetch existed Course',
  FetchCourseToEditSuccess = '[AddEditCourse] Fetch existed Course success',
}

export class CreateNewCourse implements Action {
  readonly type = AddEditCourseActionTypes.CreateNewCourse;
  constructor(public payload: ICourse) {}
}

export class FetchCourseToEdit implements Action {
  readonly type = AddEditCourseActionTypes.FetchCourseToEdit;
  constructor(public payload: number) {}
}

export class FetchCourseToEditSuccess implements Action {
  readonly type = AddEditCourseActionTypes.FetchCourseToEditSuccess;
  constructor(public payload: ICourse) {}
}

export type AddEditCourseActions = CreateNewCourse | FetchCourseToEdit | FetchCourseToEditSuccess;
