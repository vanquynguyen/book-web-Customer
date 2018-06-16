import * as Types from '../../constants/ActionType';

var initialState = [];

const statisBooks = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_STATIS_BOOKS:
            return action.statis;
        default: return [...state];
    }
};

export default statisBooks;
