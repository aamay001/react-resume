const SETTINGS = {
  API: {
    URL: process.env.REACT_APP_API_URL,
    SAVE: (key) => `save?code=${key}`,
    FILE: (id, js, key) => `file?code=${key}&id=${id}&js=${js}`,
    SAVE_KEY: process.env.REACT_APP_SAVE_KEY,
    FILE_KEY: process.env.REACT_APP_FILE_KEY,
  },
};

export const APP = {
  URL: process.env.PUBLIC_URL || '/',
  WORKING_DIR: process.env.REACT_APP_WORKING_DIR || '',
};

export default SETTINGS;
