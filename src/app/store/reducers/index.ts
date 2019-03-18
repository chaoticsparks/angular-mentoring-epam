import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import {authReducer, IAuthState} from './auth-reducer.reducer';
import {coursesPageReducer, ICoursesPageState} from './courses-page.reducer';
import {addEditCourseReducer, IAddEditCourseState} from './add-edit-course.reducer';

export interface IAppState {
  auth: IAuthState;
  coursesPage: ICoursesPageState;
  addEditCourse: IAddEditCourseState;
}

export const reducers: ActionReducerMap<IAppState, any> = {
  auth: authReducer,
  coursesPage: coursesPageReducer,
  addEditCourse: addEditCourseReducer
};
