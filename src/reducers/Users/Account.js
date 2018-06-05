import * as Types from '../../constants/ActionType';

var initialState = {};

const account = (state = initialState, action) => {
    switch(action.type){
        case Types.FETCH_USER:
            return action.user;
        default :
            return state;
    }
}

export default account;
