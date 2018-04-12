import * as Types from '../../constants/ActionType';

var initialState = {};

const following = (state = initialState, action) => {
    switch(action.type){
        case Types.FETCH_ALL_FOLLOWING:

            return action.followings;
        default :
            return state;
    }
}

export default following;
