import {
  NEW_RESUME,
  UPDATE_RESUME
} from '../actions';
import Resume from '../resume-data';
import {notify} from 'react-notify-toast';

const initialState = {};
const savedState = JSON.parse(localStorage.getItem('state.resume'));

function newResume(state) {
  if (!savedState) {
    return {
      ...state ,
      ...Resume
    };
  }
  return {
    ...state
  }
}

function updateResume(state, action) {
  const newState = {
    ...state,
    ...action.resume
  };
  saveState(newState);
  notify.show( "saved to localStorage... 💾", 'success', 4000)
  return newState;
}

function saveState(state){
  localStorage.setItem('state.resume', JSON.stringify(state));
}

export default (state = savedState || initialState, action) => {
  switch (action.type) {
    case NEW_RESUME:
      return newResume(state)
    case UPDATE_RESUME:
      return updateResume(state, action)
    default:
      return state;
  }
}