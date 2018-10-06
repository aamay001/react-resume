import {
    TOGGLE_TOOLS,
    CHANGE_FONT,
    TOGGLE_SHOW_ITEM,
    CHANGE_RESUME_ORDER,
    OPEN_RESUME_EDITOR,
    UPDATE_EDITOR_STATUS
} from '../actions';
import resumeOrder from '../components/tools/resumeOrder';
import {WAITING} from '../components/tools/ResumeEditorStatus';

const initialState = {
    showTools : true,
    font: 'Source Code Pro, monospace',
    showAddress: false,
    showEmail: true,
    showPhone: true,
    showGithub: true,
    showSummary: true,
    resumeOrder: resumeOrder,
    showTechSkills: true,
    showProjects: true,
    showEducation: true,
    showExperience: true,
    showResumeEditor: false,
    showLinkedIn: false,
    showWebsite: false,
    editorStatus: WAITING
};
const savedState = JSON.parse(localStorage.getItem('state.tools'));

function toggleTools(state) {
    return {
        ...state,
        showTools: !state.showTools
    };
}

function changeFont(state, action) {
    const newState = {
        ...state,
        font: action.font
    };

    return newState;
}

function toggleShowItem(state, action) {
    const newState = {
        ...state,
        ...getItemToToggle(state, action)
    };

    return newState;
}

function changeResumeOrder(state, action) {
    const newState = {
        ...state,
        resumeOrder: action.order
    };

    return newState;
}

function openResumeEditor(state, action) {
    return {
        ...state,
        showResumeEditor: !state.showResumeEditor
    };
}

function updateResumeEditorStatus(state, action){
    return {
        ...state,
        editorStatus: action.status
    };
}

function getItemToToggle(state, action){
    switch(action.item) {
        case 'showAddress':
            return { showAddress : !state.showAddress }
        case 'showEmail':
            return { showEmail : !state.showEmail }
        case 'showPhone':
            return { showPhone : !state.showPhone }
        case 'showGithub':
            return { showGithub: !state.showGithub }
        case 'showSummary':
            return { showSummary: !state.showSummary}
        case 'showTechSkills':
            return { showTechSkills: !state.showTechSkills }
        case 'showProjects':
            return { showProjects: !state.showProjects }
        case 'showEducation':
            return { showEducation: !state.showEducation }
        case 'showExperience':
            return { showExperience: !state.showExperience }
        case 'showLinkedIn' :
            return { showLinkedIn: !state.showLinkedIn }
        case 'showWebsite' :
            return { showWebsite: !state.showWebsite}
        default:
            return {}
    }
}


export default (state = savedState || initialState, action) => {
    switch (action.type) {
        case TOGGLE_TOOLS:
            return toggleTools(state);
        case CHANGE_FONT:
            return changeFont(state,action);
        case TOGGLE_SHOW_ITEM:
            return toggleShowItem(state, action);
        case CHANGE_RESUME_ORDER:
            return changeResumeOrder(state,action);
        case OPEN_RESUME_EDITOR:
            return openResumeEditor(state);
        case UPDATE_EDITOR_STATUS:
            return updateResumeEditorStatus(state, action);
        default:
            return state;
    }
}