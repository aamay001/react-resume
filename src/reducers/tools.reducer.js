import {
  CHANGE_FONT,
  TOGGLE_SHOW_ITEM,
  CHANGE_RESUME_ORDER,
  UPDATE_EDITOR_STATUS,
} from '../actions/app.actions';
// import resumeOrder from '../components/tools/resumeOrder';
import { EDITOR_STATUS } from '../helpers/tools.helper';
import ls from '../helpers/localstorage.helper';

const initialState = {
  font: 'Source Code Pro, monospace',
  showAddress: false,
  showEmail: true,
  showPhone: true,
  showGithub: true,
  // resumeOrder: resumeOrder,
  showTechSkills: true,
  showProjects: true,
  showEducation: true,
  showCertification: true,
  showExperience: true,
  showLinkedIn: false,
  showWebsite: false,
  editorStatus: EDITOR_STATUS.WAITING,
};

const savedState = JSON.parse(ls.getItem('state.tools'));

const getItemToToggle = (state, action) => {
  switch (action.item) {
    case 'showAddress':
      return { showAddress: !state.showAddress };
    case 'showEmail':
      return { showEmail: !state.showEmail };
    case 'showPhone':
      return { showPhone: !state.showPhone };
    case 'showGithub':
      return { showGithub: !state.showGithub };
    case 'showTechSkills':
      return { showTechSkills: !state.showTechSkills };
    case 'showProjects':
      return { showProjects: !state.showProjects };
    case 'showEducation':
      return { showEducation: !state.showEducation };
    case 'showCertification':
      return { showCertification: !state.showCertification };
    case 'showExperience':
      return { showExperience: !state.showExperience };
    case 'showLinkedIn':
      return { showLinkedIn: !state.showLinkedIn };
    case 'showWebsite':
      return { showWebsite: !state.showWebsite };
    default:
      return {};
  }
};

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
  resumeOrder: action.order,
});

const updateResumeEditorStatus = (state, action) => ({
  ...state,
  editorStatus: action.status,
});

export default (state = savedState || initialState, action) => {
  switch (action.type) {
    case CHANGE_FONT:
      return changeFont(state, action);
    case TOGGLE_SHOW_ITEM:
      return toggleShowItem(state, action);
    case CHANGE_RESUME_ORDER:
      return changeResumeOrder(state, action);
    case UPDATE_EDITOR_STATUS:
      return updateResumeEditorStatus(state, action);
    default:
      return state;
  }
};
