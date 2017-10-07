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
  font
});

export const TOGGLE_SHOW_ITEM = 'TOGGLE_SHOW_ITEM';
export const toggleShowItem = item => ({
  type: TOGGLE_SHOW_ITEM,
  item: item
});



