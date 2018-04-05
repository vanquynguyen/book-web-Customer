import React from 'react';
import Home from './components/Home';
import DetailProduct from './components/Products/DetailProduct/index';
import Books from './components/Products/Books/index';
import Checkout from './components/Carts/Checkout/index';
import Payment from './components/Carts/Payment/index';
import AddBook from './components/Products/AddBook/index';
// import NotFound from './components/NotFound';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/product',
        exact: false,
        main: () => <DetailProduct />
    },
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
        path: '/user/add-book',
        exact: false,
        main: () => <AddBook />
    },
    // {
    //     path: '',
    //     exact: false,
    //     main: () => <NotFound />
    // }
];

export default routes;