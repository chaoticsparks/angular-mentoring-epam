import {IAppState} from '../reducers';
import {createSelector} from '@ngrx/store';
import {IAddEditCourseState} from '../reducers/add-edit-course.reducer';

export const selectAddEditCourse = (state: IAppState) => state.addEditCourse;

export const selectCourseToSumbit = createSelector(
  selectAddEditCourse,
  (state: IAddEditCourseState) => state.courseToSubmit
);

