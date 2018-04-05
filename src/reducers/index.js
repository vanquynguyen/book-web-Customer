import { combineReducers } from 'redux';
import categories from './Categories/Categories';
import categoriesEditing from './Categories/ItemEditing';
import users from './Users/Users';
import account from './Users/Account';
// import usersEditing from './Users/ItemEditing';

const appReducers = combineReducers({
    categories,
    categoriesEditing,
    users,
    account
    // usersEditing
});

export default appReducers;
