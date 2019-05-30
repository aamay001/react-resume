import {
  NEW_RESUME,
  UPDATE_RESUME,
} from '../actions/app.actions';
import Resume from '../resume-data';
// import {notify} from 'react-notify-toast';

const initialState = {
  ...Resume,
};

const newResume = () => initialState;

const updateResume = (state, action) => {
  // notify.show( "saved to localStorage... 💾", 'success', 4000)
  return {
    ...state,
    ...action.resume,
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_RESUME:
      return newResume(state);
    case UPDATE_RESUME:
      return updateResume(state, action);
    default:
      return state;
  }
};
