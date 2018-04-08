import { combineReducers } from 'redux';
import categories from './Categories/Categories';

import users from './Users/Users';
import account from './Users/Account';
import usersEditing from './Users/ItemEditing';

import books from './Books/Books';
import booksEditing from './Books/ItemEditing';

import carts from './Carts/Carts'

const appReducers = combineReducers({
    categories,
    users,
    account,
    usersEditing,
    books,
    booksEditing,
    carts

});

export default appReducers;
