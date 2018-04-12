import { combineReducers } from 'redux';
import categories from './Categories/Categories';

import users from './Users/Users';
import account from './Users/Account';
import usersEditing from './Users/ItemEditing';

import books from './Books/Books';
import booksEditing from './Books/ItemEditing';
import userBooks from './Books/UserBooks';

import carts from './Carts/Carts';
import reviews from './Reviews/Reviews';

import orders from './Orders/Orders';

import check from './Follows/Follows';

const appReducers = combineReducers({
    categories,
    users,
    account,
    usersEditing,
    books,
    booksEditing,
    userBooks,
    carts,
    reviews,
    orders,
    check

});

export default appReducers;
