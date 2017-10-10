import * as actions from '../actions';
import resume from '../resume-data';

describe('NEW_RESUME', () => {
  it('Should return the new resume action', () => {
    const action = actions.newResume();
    expect(action.type).toEqual(actions.NEW_RESUME);
  });
});

describe('TOGGLE_TOOLS', () => {
  it('Should return the toggle tools action', () => {
    const action = actions.toggleTools();
    expect(action.type).toEqual(actions.TOGGLE_TOOLS);
  });
});

describe('CHANGE_FONT', () => {
  it('Should return the change font action', () => {
    const testFont = 'Test Font';
    const action = actions.changeFont(testFont);
    expect(action.type).toEqual(actions.CHANGE_FONT);
    expect(action.font).toEqual(testFont);
  });
});

describe('TOGGLE_SHOW_ITEM', () => {
  it('Should return the toggle show item action', () => {
    const testItem = 'testItem';
    const action = actions.toggleShowItem(testItem);
    expect(action.type).toEqual(actions.TOGGLE_SHOW_ITEM);
    expect(action.item).toEqual(testItem);
  });
});

describe('CHANGE_RESUME_ORDER', () => {
  it('Should return the change resume order action', () => {
    const testOrder = [5,1,3,2];
    const action = actions.changeResumeOrder(testOrder);
    expect(action.type).toEqual(actions.CHANGE_RESUME_ORDER);
    expect(action.order).toEqual(testOrder);
  });
});

describe('OPEN_RESUME_EDITOR', () => {
  it('Should return the open resume editor action', () => {
    const action = actions.openResumeEditor();
    expect(action.type).toEqual(actions.OPEN_RESUME_EDITOR);
  })
})

describe('UPDATE_RESUME', () => {
  it('Should return update resume action', () => {
    const action = actions.updateResume(resume);
    expect(action.type).toEqual(actions.UPDATE_RESUME);
    expect(action.resume).toEqual(resume);
  });
});

describe('UPDATE_EDITOR_STATUS', () => {
  it('Should return the update editor status action', () => {
    const action = actions.updateResumeEditorStatus('status update');
    expect(action.type).toEqual(actions.UPDATE_EDITOR_STATUS);
    expect(action.status).toEqual('status update');
  });
})