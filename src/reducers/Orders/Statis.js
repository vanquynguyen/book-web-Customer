import * as Types from '../../constants/ActionType';

var initialState = [];

const statisPayments = (state = initialState, action) => {
    switch (action.type) {
        case Types.STATIS_PAYMENTS:
            return action.statis;
        default: return [...state];
    }
};

export default statisPayments;
