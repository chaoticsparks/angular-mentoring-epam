import {IAppState} from '../reducers';
import {createSelector} from '@ngrx/store';
import {ICoursesPageState} from '../reducers/courses-page.reducer';

export const selectCoursesPage = (state: IAppState) => state.coursesPage;

export const selectCoursesList = createSelector(
  selectCoursesPage,
  (state: ICoursesPageState) => state.courses
);

export const selectCoursesStartFrom = createSelector(
  selectCoursesPage,
  (state: ICoursesPageState) => state.startFrom
);

export const selectNoCurses = createSelector(
  selectCoursesPage,
  (state: ICoursesPageState) => state.noCourses
);

export const selectCourseToDelete = createSelector(
  selectCoursesPage,
  (state: ICoursesPageState) => state.courseToDelete
);

export const selectModalDeleteWindow = createSelector(
  selectCoursesPage,
  (state: ICoursesPageState) => state.modalDeleteWindow
);


