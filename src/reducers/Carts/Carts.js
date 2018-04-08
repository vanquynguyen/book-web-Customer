import * as Types from '../../constants/ActionType';

var initialState = [];

const carts = (state = initialState, action) => {
    var { id } = action;
    var index = -1;
    switch (action.type) {
        case Types.FETCH_CARTS:
            return [...action.carts];
            case Types.DELETE_CART:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        default: return [...state];
    }
};

var findIndex = (carts, id) => {
    var result = -1;
    carts.forEach((cart, index) => {
        if (cart.id === id) {
            result = index;
        }
    });
    return result;
}

export default carts;
