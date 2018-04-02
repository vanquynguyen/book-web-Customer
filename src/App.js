import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes from './routes';
import Header from './components/Sections/Header';
import Footer from './components/Sections/Footer';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    {/* <div id="toTop" style={{display: 'block', visibility: 'visible'}}></div> */}
                    <Header />
                    <div className="columns-footer-inner">
                        <div className="columns-container">
                            {this.showContentMenus(routes)}
                        </div>
                        <Footer />
                    </div>
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
