import * as Types from '../../constants/ActionType';

var initialState = {};

const books = (state = initialState, action) => {
    switch(action.type){
        case Types.FETCH_HOME_BOOKS:
 
            return action.books;
        default :
            return state;
    }
}

export default books;
