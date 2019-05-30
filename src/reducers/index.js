import { combineReducers } from 'redux';
import app from './app.reducer';
import resume from './resume.reducer';
import tools from './tools.reducer';

export default combineReducers({
  app,
  resume,
  tools,
});
