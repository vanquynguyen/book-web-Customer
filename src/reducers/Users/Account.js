import * as Types from '../../constants/ActionType';

var initialState = {};

const account = (state = initialState, action) => {
    // var { user } = action;
    switch(action.type){
        case Types.FETCH_USER:
            // state.push(user);
            return action.user;
        default :
            return state;
    }
}

export default account;
