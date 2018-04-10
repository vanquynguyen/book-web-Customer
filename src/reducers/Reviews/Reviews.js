import * as Types from '../../constants/ActionType';

var initialState = [];

const reviews = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_REVIEWS:
            return [...action.reviews];
        default: return [...state];
    }
};

export default reviews;