import * as Types from '../../constants/ActionType';

var initialState = [];

const check = (state = initialState, action) => {
    switch (action.type) {
        case Types.CHECK_FOLLOW:
            return action.check;
        
        default: return [...state];
    }
};

export default check;