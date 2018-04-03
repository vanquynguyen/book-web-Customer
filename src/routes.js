import React from 'react';
import Home from './components/Home';
import CategoriesListPage from './components/Categories/CategoriesListPage';
import CategoriesActionPage from './components/Categories/CategoriesActionPage';
import DetailProduct from './components/Products/DetailProduct/index';
import Books from './components/Products/Books/index';
import Checkout from './components/Carts/Checkout/index';
import Payment from './components/Carts/Payment/index';
import NotFound from './components/NotFound';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/category-list',
        exact: false,
        main: () => <CategoriesListPage />
    },
    {
        path: '/category/add',
        exact: false,
        main: ({ location, history }) => <CategoriesActionPage location={location} history={history} />
    },
    {
        path: '/category/:id/edit',
        exact: false,
        main: ({ match, history }) => <CategoriesActionPage match={match} history={history} />
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
    // {
    //     path: '',
    //     exact: false,
    //     main: () => <NotFound />
    // }
];

export default routes;