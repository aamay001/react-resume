import {
  NEW_RESUME,
  UPDATE_RESUME
} from '../actions';
import Resume from '../resume-data';
import {notify} from 'react-notify-toast';

const initialState = {
  ...Resume
};

function newResume(state) {
  return {
    ...initialState
  }
}

function updateResume(state, action) {
  const newState = {
    ...state,
    ...action.resume
  };
  notify.show( "saved to localStorage... 💾", 'success', 4000)
  return newState;
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