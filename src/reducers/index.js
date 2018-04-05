import { combineReducers } from 'redux';
import categories from './Categories/Categories';
import users from './Users/Users';
import account from './Users/Account';
// import usersEditing from './Users/ItemEditing';

const appReducers = combineReducers({
    categories,
    users,
    account
    // usersEditing
});

export default appReducers;
