import * as Types from '../../constants/ActionType';

var initialState = [];

const orders = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_ORDERS:
            return [...action.orders];
        case Types.FETCH_SELLS:
            return [...action.sells];
        default: return [...state];
    }
};

export default orders;
