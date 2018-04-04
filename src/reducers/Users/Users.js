import * as Types from '../../constants/ActionType';

var initialState = [];

const users = (state = initialState, action) => {
    var { user, id } = action;
    var index = -1;
    switch (action.type) {
        case Types.FETCH_USER:
            return [...action.user];
        case Types.ADD_USER:
            state.push(user);
            return [...state];
        case Types.LOGIN:
            state.push(user);
            return [...state];
        case Types.UPDATE_USER:
            index = findIndex(state, user.id);
            state[index] = user;
            return [...state];
        default: return [...state];
    }
};

var findIndex = (users, id) => {
    var result = -1;
    users.forEach((user, index) => {
        if (user.id === id) {
            result = index;
        }
    });
    return result;
}

export default users;