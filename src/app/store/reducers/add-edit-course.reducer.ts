import {AddEditCourseActions, AddEditCourseActionTypes} from '../actions/add-edit-course.actions';
import {ICourse} from '../../courses/i-course';


export interface IAddEditCourseState {
  courseToSubmit: ICourse | null;
}

export const initialAddEditCourseState: IAddEditCourseState = {
  courseToSubmit: null
};

export function addEditCourseReducer(state = initialAddEditCourseState, action: AddEditCourseActions): IAddEditCourseState {
  switch (action.type) {

    case AddEditCourseActionTypes.CreateNewCourse: {
      return {
        ...state,
        courseToSubmit: action.payload
      };
    }

    case AddEditCourseActionTypes.FetchCourseToEditSuccess: {
      return {
        ...state,
        courseToSubmit: action.payload
      };
    }

    default:
      return state;
  }
}
