import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import $ from 'jquery';

import routes from './routes';
import Header from './components/Sections/Header';
import Footer from './components/Sections/Footer';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <div style={{ marginTop: '75px' }}>
                        {this.showContentMenus(routes)}
                    </div>
                    <Footer />
                </div>
            </Router>
        );
    }

    showContentMenus = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            });
        }
        return <Switch>{result}</Switch>;
    }

}

export default App;
