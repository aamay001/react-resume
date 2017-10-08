import ResumeReducer from '../reducers/ResumeReducer';
import {newResume} from '../actions';
import Resume from '../resume-data';

describe('ResumeReducer', () => {
  describe('ResumeReducer', () => {
    it('Should return a state with a new resume', () => {
      let state = {};
      const action = newResume();
      state = ResumeReducer(state, action);
      expect(state).toEqual(Resume);
    });
  });
});