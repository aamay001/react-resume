export const NEW_RESUME = 'NEW_RESUME';
export const newResume = () => ({
  type: NEW_RESUME,
});

export const TOGGLE_TOOLS = 'TOGGLE_TOOLS';
export const toggleTools = () => ({
  type: TOGGLE_TOOLS
});

export const CHANGE_FONT = 'CHANGE_FONT';
export const changeFont = font => ({
  type: CHANGE_FONT,
  font: font
});

export const TOGGLE_SHOW_ITEM = 'TOGGLE_SHOW_ITEM';
export const toggleShowItem = item => ({
  type: TOGGLE_SHOW_ITEM,
  item: item
});

export const CHANGE_RESUME_ORDER = 'CHANGE_RESUME_ORDER';
export const changeResumeOrder = order => ({
  type: CHANGE_RESUME_ORDER,
  order: order
});

export const OPEN_RESUME_EDITOR = 'OPEN_RESUME_EDITOR';
export const openResumeEditor = () => ({
  type: OPEN_RESUME_EDITOR
});

export const UPDATE_RESUME = 'UPDATE_RESIME';
export const updateResume = resume => ({
  type: UPDATE_RESUME,
  resume
});


