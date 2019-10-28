import { APP } from './settings';

const CONSTANTS = {
  APP: {
    NAME: 'JSON Resume',
    COMPANY: 'Andy Amaya',
  },
  ENVIRONMENT: {
    TEST: 'TEST',
    DEVELOPMENT: 'DEVELOPMENT',
    PRODUCTION: 'PRODUCTION',
    CURRENT: process.env.REACT_APP_ENV,
  },
  ROUTES: {
    HOME: {
      PATH: `${APP.WORKING_DIR}/`,
      NAME: 'Home',
      ENABLED: true,
      SHOW_IN_MENU: false,
      SHOW_IN_NAV: true,
      ICON: 'home',
    },
  },
};

export default CONSTANTS;

export const SAVE_RESUME_ERROR_TOAST_ID = 'rrterrorsaveresume';

export const SAVE_RESUME_SUCCESS_TOAST_ID = 'rrtresumesaved';

export const LOCAL_STORAGE_ON_TOAST_ID = 'rrtrlson';

export const LOCAL_STORAGE_OFF_TOAST_ID = 'rrtrlsoff';
