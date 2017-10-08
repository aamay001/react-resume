import {
  NEW_RESUME,
  UPDATE_RESUME
} from '../actions';
import Resume from '../resume-data';

const initialState = {}

function newResume(state) {
  return {
    ...state,
    ...Resume
  };
}

function updateResume(state, action) {
  return {
    ...state,
    ...action.resume
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_RESUME:
      return newResume(state)
    case UPDATE_RESUME:
      return updateResume(state, action)
    default:
      return state;
  }
}