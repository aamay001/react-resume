import { toast } from 'react-toastify';
import { debounce } from './app.helper';
import ls from './localstorage.helper';
import {
  SAVE_RESUME_ERROR_TOAST_ID, SAVE_RESUME_SUCCESS_TOAST_ID,
  LOCAL_STORAGE_ON_TOAST_ID, LOCAL_STORAGE_OFF_TOAST_ID,
}
  from '../config/constants';

const STORED_TOOLS_KEY = 'rr-ls-tools-key';
const savedTools = ls.getItem(STORED_TOOLS_KEY);
let prevLocalStorageState = savedTools ? savedTools.autoSave : false;

if (!prevLocalStorageState) {
  debounce(
    () => toast(' ⚠️ Auto save to local storage is turned off!', { toastId: 'rrtrlsoffinit', position: 'top-right', autoClose: false }),
    1000,
    false,
    'rrtrlsoffinit',
  );
} else {
  debounce(
    () => toast(' 💾 Auto save to local storage is turned on!', { toastId: 'rrtrlsoninit', position: 'top-right', autoClose: 10000 }),
    1000,
    false,
    'rrtrlsoninit',
  );
}

export const EDITOR_STATUS = {
  UPDATED: 'code updated',
  WAITING: 'waiting for changes',
  ERROR: 'invalid json',
  VALIDATING: 'validating',
};

export const getStatusColor = (status) => {
  switch (status) {
    case EDITOR_STATUS.WAITING:
      return 'blue';
    case EDITOR_STATUS.ERROR:
      return 'red';
    case EDITOR_STATUS.VALIDATING:
      return 'yellow';
    case EDITOR_STATUS.UPDATED:
      return 'green';
    default:
      return undefined;
  }
};

export const getDarkStatusColor = (status) => {
  switch (status) {
    case EDITOR_STATUS.WAITING:
      return 'teal';
    case EDITOR_STATUS.ERROR:
      return 'pink';
    case EDITOR_STATUS.VALIDATING:
      return 'yellow';
    case EDITOR_STATUS.UPDATED:
      return 'green';
    default:
      return undefined;
  }
};

export const saveTools = (tools) => {
  if (!tools.autoSave && prevLocalStorageState) {
    toast(' ⚠️ Auto save to local storage is now off!', { toastId: LOCAL_STORAGE_OFF_TOAST_ID, position: 'top-right', autoClose: false });
  } else if (tools.autoSave && !prevLocalStorageState) {
    toast.dismiss('rrtrlsoffinit');
    toast.dismiss(LOCAL_STORAGE_OFF_TOAST_ID);
    toast(' 💾 Auto save to local storage is now on!', { toastId: LOCAL_STORAGE_ON_TOAST_ID, position: 'top-right', autoClose: 10000 });
  }
  prevLocalStorageState = tools.autoSave;
  if (ls.setItem(STORED_TOOLS_KEY, tools)) {
    toast.dismiss(SAVE_RESUME_ERROR_TOAST_ID);
    debounce(
      () => toast(' 💾 saved to local storage...', { toastId: SAVE_RESUME_SUCCESS_TOAST_ID, position: 'top-right' }),
      100,
      false,
      SAVE_RESUME_SUCCESS_TOAST_ID,
    );
  } else {
    debounce(
      () => toast(' ⚠️ error saving to local storage...', { toastId: SAVE_RESUME_ERROR_TOAST_ID, position: 'top-right' }),
      100,
      false,
      SAVE_RESUME_ERROR_TOAST_ID,
    );
  }
  return tools;
};

export const loadTools = () => ls.getItem(STORED_TOOLS_KEY);
