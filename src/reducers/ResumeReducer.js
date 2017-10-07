import { NEW_RESUME } from '../actions';
import Resume from '../resume-data';

const initialState = {}

function newResume(state) {
  return {
    ...state,
    ...Resume
  };
}

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_RESUME:
      return newResume(state)
    default:
      return state;
  }
}