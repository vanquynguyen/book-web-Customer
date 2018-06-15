import * as Types from '../../constants/ActionType';

var initialState = [];

const sells = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_SELLS:
            return [...action.sells];
        default: return [...state];
    }
};

export default sells;
