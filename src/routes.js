import React from 'react';
import Home from './components/Home';
import DetailProduct from './components/Products/DetailProduct/index';
import Books from './components/Products/Books/index';
import Checkout from './components/Carts/Checkout/index';
import Payment from './components/Carts/Payment/index';
import AddBook from './components/Products/AddBook/index';
import MyProfile from './components/Profile/index';
import UserProfile from './components/Profile/User';
import Users from './components/Users/index';
// import NotFound from './components/NotFound';
// const auth = localStorage.getItem('userId');
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    // {
    //     path: '/product',
    //     exact: false,
    //     main: () => <DetailProduct />
    // },
    {
        path: '/books',
        exact: false,
        main: () => <Books />
    },
    {
        path: '/checkout',
        exact: false,
        main: () => <Checkout />
    },
    {
        path: '/payment',
        exact: false,
        main: () => <Payment />
    },
    {
        path: '/users',
        exact: false,
        main: () => <Users />
    },
    {
        path: '/user/profile',
        exact: false,
        main: () => <MyProfile />
    },
    {
        path: '/user/add-book',
        exact: false,
        main: () => <AddBook />
    },
    {
        path: '/user/:id',
        exact: false,
        main: ({ match, history }) => <UserProfile match={match} history={history} />
    },
    {
        path: '/book/:id/detail',
        exact: false,
        main: ({ match, history }) => <DetailProduct match={match} history={history} />
    },
    {
        path: '/order/:id/payment',
        exact: false,
        main: ({ match, history }) => <Payment match={match} history={history} />
    }
    // {
    //     path: '',
    //     exact: false,
    //     main: () => <NotFound />
    // }
];

export default routes;