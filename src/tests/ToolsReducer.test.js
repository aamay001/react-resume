import ToolsReducer from '../reducers/ToolsReducer';
import {
  toggleTools,
  changeFont,
  toggleShowItem,
  changeResumeOrder,
  openResumeEditor,
  updateResumeEditorStatus
} from '../actions';

describe('ToolsReducer', () => {

  describe('TOGGLE_TOOLS', () => {
    it('Should toggle the visibility of the tools side bar', () => {
      let state = {
        showTools : true
      };
      const action = toggleTools();
      state = ToolsReducer(state, action);
      expect(state.showTools).toEqual(false);
      state = ToolsReducer(state, action);
      expect(state.showTools).toEqual(true);
    });
  });

  describe('CHANGE_FONT', () => {
    it('Should change the font used on the resume', () => {
      let state = {
        font: 'Test Sans'
      };

      const newFont = 'New Font';
      const action = changeFont(newFont);
      state = ToolsReducer(state, action);
      expect(state.font).toEqual(newFont);

      const newFont2 = 'New Font 2';
      const action2 = changeFont(newFont2);
      state = ToolsReducer(state, action2);
      expect(state.font).toEqual(newFont2);
    });
  });

  describe('TOGGLE_SHOW_ITEM', () => {

    it('Should toggle the visibility of the address resume elements', () => {
      let state = {
        showAddress: false
      };
      let action = toggleShowItem('showAddress');
      state = ToolsReducer(state, action);
      expect(state.showAddress).toEqual(true);
      state = ToolsReducer(state, action);
      expect(state.showAddress).toEqual(false);
    });

    it('Should toggle the visibility of the email resume elements', () => {
      let state = {
        showEmail: false
      };
      let action = toggleShowItem('showEmail');
      state = ToolsReducer(state, action);
      expect(state.showEmail).toEqual(true);
      state = ToolsReducer(state, action);
      expect(state.showEmail).toEqual(false);
    });

    it('Should toggle the visibility of the phone resume elements', () => {
      let state = {
        showPhone: false
      };
      let action = toggleShowItem('showPhone');
      state = ToolsReducer(state, action);
      expect(state.showPhone).toEqual(true);
      state = ToolsReducer(state, action);
      expect(state.showPhone).toEqual(false);
    });

    it('Should toggle the visibility of the github resume elements', () => {
      let state = {
        showGithub: false
      };
      let action = toggleShowItem('showGithub');
      state = ToolsReducer(state, action);
      expect(state.showGithub).toEqual(true);
      state = ToolsReducer(state, action);
      expect(state.showGithub).toEqual(false);
    });

    it('Should toggle the visibility of the summary resume element', () => {
      let state = {
        showSummary: false
      };
      let action = toggleShowItem('showSummary');
      state = ToolsReducer(state, action);
      expect(state.showSummary).toEqual(true);
      state = ToolsReducer(state, action);
      expect(state.showSummary).toEqual(false);
    });

    it('Should toggle the visibility of the technical skills resume elements', () => {
      let state = {
        showTechSkills: false
      };
      let action = toggleShowItem('showTechSkills');
      state = ToolsReducer(state, action);
      expect(state.showTechSkills).toEqual(true);
      state = ToolsReducer(state, action);
      expect(state.showTechSkills).toEqual(false);
    });

    it('Should toggle the visibility of the projects skills resume elements', () => {
      let state = {
        showProjects: false
      };
      let action = toggleShowItem('showProjects');
      state = ToolsReducer(state, action);
      expect(state.showProjects).toEqual(true);
      state = ToolsReducer(state, action);
      expect(state.showProjects).toEqual(false);
    });

    it('Should toggle the visibility of the education resume elements', () => {
      let state = {
        showEducation: false
      };
      let action = toggleShowItem('showEducation');
      state = ToolsReducer(state, action);
      expect(state.showEducation).toEqual(true);
      state = ToolsReducer(state, action);
      expect(state.showEducation).toEqual(false);
    });

    it('Should toggle the visibility of the experience resume elements', () => {
      let state = {
        showExperience: false
      };
      let action = toggleShowItem('showExperience');
      state = ToolsReducer(state, action);
      expect(state.showExperience).toEqual(true);
      state = ToolsReducer(state, action);
      expect(state.showExperience).toEqual(false);
    });
  });

  describe('CHANGE_RESUME_ORDER', () => {
    it('Should change the order of the main resume sections', () => {
      let state = {
        resumeOrder: [3, 2, 0, 1]
      }
      const newOrder = [2, 1, 3, 0];
      const action = changeResumeOrder(newOrder);
      state = ToolsReducer(state, action);
      expect(state.resumeOrder).toEqual(newOrder);

      const newOrder2 = [1, 2, 0, 2];
      const action2 = changeResumeOrder(newOrder2);
      state = ToolsReducer(state, action2);
      expect(state.resumeOrder).toEqual(newOrder2);
    });
  });

  describe('OPEN_RESUME_EDITOR', () => {
    it('Should open and close the resume json editor', () => {
      let state = {
        showResumeEditor : false
      };
      const action = openResumeEditor();
      state = ToolsReducer(state, action);
      expect(state.showResumeEditor).toEqual(true);
      state = ToolsReducer(state, action);
      expect(state.showResumeEditor).toEqual(false);
    });
  });

  describe('UPDATE_EDITOR_STATUS', () => {
    it('Should change the resume editor status to specified status', () => {
      let state = {
        editorStatus: 'initial status'
      };
      let action = updateResumeEditorStatus('new status');
      state = ToolsReducer(state, action);
      expect(state.editorStatus).toEqual('new status');
      action = updateResumeEditorStatus('next status');
      state = ToolsReducer(state, action);
      expect(state.editorStatus).toEqual('next status');
    });
  });
});