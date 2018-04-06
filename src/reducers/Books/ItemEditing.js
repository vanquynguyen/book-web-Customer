import * as Types from '../../constants/ActionType';

var initialState = {};

const itemEditing = (state = initialState, action) => {
    switch(action.type){
        case Types.GET_BOOK:
            return action.book;
        default :
            return state;
    }
}

export default itemEditing;
