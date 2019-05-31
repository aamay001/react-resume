const SETTINGS = {
  API: {
    URL: process.env.REACT_APP_API_URL,
  },
  ROUTES: {
    ANIMATION: 'fade right',
    ANIMATION_SPEED: 500,
  },
};

export const APP = {
  URL: process.env.PUBLIC_URL || '/',
  WORKING_DIR: process.env.REACT_APP_WORKING_DIR || '',
};

export default SETTINGS;
