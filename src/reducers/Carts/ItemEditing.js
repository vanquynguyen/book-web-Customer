import * as Types from '../../constants/ActionType';

var initialState = {};

const itemEditing = (state = initialState, action) => {
    switch(action.type){
        case Types.GET_USER:
            return action.user;
        default :
            return state;
    }
}

export default itemEditing;
