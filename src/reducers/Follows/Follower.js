import * as Types from '../../constants/ActionType';

var initialState = {};

const followers = (state = initialState, action) => {
    switch(action.type){
        case Types.FETCH_ALL_FOLLOWER:

            return action.followers;
        default :
            return state;
    }
}

export default followers;
