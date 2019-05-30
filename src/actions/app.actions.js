export const TOGGLE_TOOLBAR = 'TOGGLE_TOOLBAR';
export const toggleToolbar = () => ({
  type: TOGGLE_TOOLBAR,
});

export const TOGGLE_EDITOR = 'TOGGLE_EDITOR';
export const toggleEditor = () => ({
  type: TOGGLE_EDITOR,
});

export const NEW_RESUME = 'NEW_RESUME';
export const newResume = () => ({
  type: NEW_RESUME,
});

export const CHANGE_FONT = 'CHANGE_FONT';
export const changeFont = font => ({
  type: CHANGE_FONT,
  font,
});

export const TOGGLE_SHOW_ITEM = 'TOGGLE_SHOW_ITEM';
export const toggleShowItem = item => ({
  type: TOGGLE_SHOW_ITEM,
  item,
});

export const CHANGE_RESUME_ORDER = 'CHANGE_RESUME_ORDER';
export const changeResumeOrder = order => ({
  type: CHANGE_RESUME_ORDER,
  order,
});

export const UPDATE_RESUME = 'UPDATE_RESIME';
export const updateResume = resume => ({
  type: UPDATE_RESUME,
  resume,
});

export const UPDATE_EDITOR_STATUS = 'UPDATE_RESUME_STAUS';
export const updateResumeEditorStatus = status => ({
  type: UPDATE_EDITOR_STATUS,
  status,
});
