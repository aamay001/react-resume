/* eslint default-param-last: 0 */
import {
  CHANGE_FONT,
  TOGGLE_SHOW_ITEM,
  CHANGE_RESUME_ORDER,
  UPDATE_EDITOR_STATUS,
  TOGGLE_EDITOR,
  TOGGLE_AUTO_SAVE,
  CHANGE_PAPER_SIZE,
} from '../actions/app.actions';
import { EDITOR_STATUS, saveTools, loadTools } from '../helpers/tools.helper';
import { defaultResumeOrder } from '../helpers/resume.helper';

const storedTools = loadTools();
const initialState = {
  font: 'Source Code Pro, monospace',
  showAddress: true,
  showEmail: true,
  showPhone: true,
  showGithub: false,
  order: defaultResumeOrder,
  showTechSkills: true,
  showSkillLevel: false,
  showProjects: true,
  showEducation: true,
  showCertification: true,
  showExperience: true,
  showLinkedIn: false,
  showWebsite: true,
  showProfessionalSummary: true,
  editorStatus: EDITOR_STATUS.WAITING,
  autoSave: false,
  paperSize: 'letter',
  showIcon: true,
  darkMode: false,
};

const getItemToToggle = (state, action) => ({
  [action.item]: !state[action.item],
});

const changeFont = (state, action) => ({
  ...state,
  font: action.font,
});

const toggleShowItem = (state, action) => ({
  ...state,
  ...getItemToToggle(state, action),
});

const changeResumeOrder = (state, action) => ({
  ...state,
  order: action.order,
});

const updateResumeEditorStatus = (state, action) => ({
  ...state,
  editorStatus: action.status,
});

const toggleEditor = (state) => ({
  ...state,
  editorStatus: EDITOR_STATUS.WAITING,
});

const toggleAutoSave = (state) => ({
  ...state,
  autoSave: !state.autoSave,
});

const choosePaperSize = (state, paperSize) => ({
  ...state,
  paperSize,
});

export default (state = storedTools || initialState, action) => {
  switch (action.type) {
    case CHANGE_FONT:
      return (state.autoSave
        ? saveTools(changeFont(state, action))
        : changeFont(state, action));
    case TOGGLE_SHOW_ITEM:
      return (state.autoSave
        ? saveTools(toggleShowItem(state, action))
        : toggleShowItem(state, action));
    case CHANGE_RESUME_ORDER:
      return (state.autoSave
        ? saveTools(changeResumeOrder(state, action))
        : changeResumeOrder(state, action));
    case UPDATE_EDITOR_STATUS:
      return updateResumeEditorStatus(state, action);
    case TOGGLE_EDITOR:
      return toggleEditor(state);
    case TOGGLE_AUTO_SAVE:
      return saveTools(toggleAutoSave(state));
    case CHANGE_PAPER_SIZE:
      return (state.autoSave
        ? saveTools(choosePaperSize(state, action.paperSize))
        : choosePaperSize(state, action.paperSize));
    default:
      return state;
  }
};
