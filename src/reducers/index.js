import {combineReducers} from 'redux';
import resumeReducer from './ResumeReducer';
import toolsReducer from './ToolsReducer';
export default combineReducers({
    resume: resumeReducer,
    tools: toolsReducer
});