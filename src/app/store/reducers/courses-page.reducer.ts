import {ICourseFetched} from '../../courses/ICourseFetched';
import {CoursesPageActions, CoursesPageActionTypes} from '../actions/courses-page.actions';
import {backendConfig} from '../../../config.enum';
import {BsModalRef} from 'ngx-bootstrap';


export interface ICoursesPageState {
  courses: ICourseFetched[];
  startFrom: number;
  noCourses: boolean;
  courseToDelete: number | null;
  modalDeleteWindow: BsModalRef | null;
}

export const initialState: ICoursesPageState = {
  courses: [],
  startFrom: 0,
  noCourses: false,
  courseToDelete: null,
  modalDeleteWindow: null
};

export function coursesPageReducer(state = initialState, action: CoursesPageActions): ICoursesPageState {
  switch (action.type) {

    case CoursesPageActionTypes.FetchCoursesSuccess: {
      return {
        ...state,
        courses: action.payload,
        noCourses: false
      };
    }

    case CoursesPageActionTypes.IncrementStartFrom: {
      return {
        ...state,
        startFrom: state.startFrom + backendConfig.CoursesOnPage
      };
    }

    case CoursesPageActionTypes.FetchMoreCoursesSuccess: {
      return {
        ...state,
        noCourses: false,
        courses: [...state.courses, ...action.payload]
      };
    }

    case CoursesPageActionTypes.FetchMoreCoursesEmpty: {
      return {
        ...state,
        noCourses: true,
      };
    }

    case CoursesPageActionTypes.SearchCoursesSuccess: {
      return {
        ...state,
        courses: action.payload,
        noCourses: false,
      };
    }

    case CoursesPageActionTypes.OpenDeleteModalSuccess: {
      return {
        ...state,
        modalDeleteWindow: action.payload.modal,
        courseToDelete: action.payload.id
      };
    }

    case CoursesPageActionTypes.CloseDeleteModalSuccess: {
      return {
        ...state,
        modalDeleteWindow: null,
        courseToDelete: null
      };
    }

    default:
      return state;
  }
}
