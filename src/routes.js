import React from 'react';
import Home from './components/Home';
import CategoriesListPage from './components/Categories/CategoriesListPage';
import CategoriesActionPage from './components/Categories/CategoriesActionPage';
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
        path: '',
        exact: false,
        main: () => <NotFound />
    }
];

export default routes;