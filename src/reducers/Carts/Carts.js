import * as Types from '../../constants/ActionType';

var initialState = [];

const carts = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_ALL_CARTS:
            return [...action.carts];

        default: return [...state];
    }
};

export default carts;
