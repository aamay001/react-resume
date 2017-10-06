import { TOGGLE_TOOLS } from '../actions';

const initialState = {
    showTools : false,
    font: '\'Source Code Pro\', monospace'
};

function toggleTools(state) {
    return {
    ...state,
    ...{showTools: !state.showTools}
    };
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_TOOLS:
            return toggleTools(state)
        default:
        return state;
    }
}