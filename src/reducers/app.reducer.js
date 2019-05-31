import {
  TOGGLE_TOOLBAR,
  TOGGLE_EDITOR,
} from '../actions/app.actions';

const initialState = {
  toolbarOpen: true,
  editorOpen: false,
};

const toggleToolbar = state => ({
  ...state,
  toolbarOpen: !state.toolbarOpen,
});

const toggleEditor = state => ({
  ...state,
  editorOpen: !state.editorOpen,
  toolbarOpen: state.editorOpen,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TOOLBAR:
      return toggleToolbar(state);
    case TOGGLE_EDITOR:
      return toggleEditor(state);
    default:
      return state;
  }
};
