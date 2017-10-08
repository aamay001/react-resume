import * as actions from '../actions';

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