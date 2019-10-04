import {
  TOGGLE_TOOLBAR,
  TOGGLE_EDITOR,
  TOGGLE_MORE_VISIBILITY,
} from '../actions/app.actions';

const initialState = {
  toolbarOpen: true,
  editorOpen: false,
  moreVisibilityOpen: false,
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

const toggleMoreVisivility = state => ({
  ...state,
  moreVisibilityOpen: !state.moreVisibilityOpen,
  toolbarOpen: state.moreVisibilityOpen,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TOOLBAR:
      return toggleToolbar(state);
    case TOGGLE_EDITOR:
      return toggleEditor(state);
    case TOGGLE_MORE_VISIBILITY:
      return toggleMoreVisivility(state);
    default:
      return state;
  }
};
