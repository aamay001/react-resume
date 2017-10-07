import {
    TOGGLE_TOOLS,
    CHANGE_FONT,
    TOGGLE_SHOW_ITEM,
    CHANGE_RESUME_ORDER
} from '../actions';
import resumeOrder from '../components/tools/resumeOrder';

const initialState = {
    showTools : true,
    font: 'Source Code Pro, monospace',
    showAddress: false,
    showEmail: true,
    showPhone: true,
    showGithub: true,
    resumeOrder: resumeOrder
};

function toggleTools(state) {
    return {
        ...state,
        showTools: !state.showTools
    };
}

function changeFont(state, action) {
    return {
        ...state,
        font: action.font
    };
}

function toggleShowItem(state, action) {
    return {
        ...state,
        ...getItemToToggle(state, action)
    };
}

function changeResumeOrder(state, action) {
    return {
        ...state,
        resumeOrder: action.order
    }
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
        default:
            return {}
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_TOOLS:
            return toggleTools(state)
        case CHANGE_FONT:
            return changeFont(state,action)
        case TOGGLE_SHOW_ITEM:
            return toggleShowItem(state, action);
        case CHANGE_RESUME_ORDER:
            return changeResumeOrder(state,action);
        default:
            return state;
    }
}