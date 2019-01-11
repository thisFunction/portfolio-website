import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.scss';
import MainPage from './containers/home-page/home-page';
import DojoPage from './containers/dojo-page/dojo-page';
import ContactPage from './containers/contact-page/contact-page';
import ErrorPage from './containers/error-page/error-page';
import store from './store';
import {Provider} from 'react-redux';

render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/" component={MainPage} exact />
                <Route path="/dojo" component={DojoPage} />
                <Route path="/contact" component={ContactPage} />
                <Route component={ErrorPage} />
            </Switch>
        </Router >
    </Provider>,
    document.getElementById('root')
);