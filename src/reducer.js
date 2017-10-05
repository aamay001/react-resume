import {
  NEW_RESUME,
  TOGGLE_TOOLS
}
from './actions';
import Resume from './resume-data';

const initialState = {
  showTools: false,
  font: '\'Source Code Pro\', monospace'
}

function newResume(state) {
  return {
    ...state,
    ...Resume
  };
}

function toggleTools(state) {
  return {
    ...state,
    ...{showTools: !state.showTools}
  };
}

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_RESUME:
      return newResume(state)
    case TOGGLE_TOOLS:
      return toggleTools(state)
    default:
      return state;
  }
}