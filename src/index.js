import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch} from 'react-router-dom';

import './css-reset.css';
import './index.scss';

import MainPage from './components/home-page/home-page'
import PlaygroundPage from './components/playground-page/playground-page'
import ContactPage from './components/contact-page/contact-page'
import ErrorPage from './components/error-page/error-page'

render(
    <Router>
        <Switch>
            <Route path="/" component={MainPage} exact />
            <Route path="/playground" component={PlaygroundPage} />
            <Route path="/contact" component={ContactPage} />
            <Route component={ErrorPage} />
        </Switch>
    </Router >,
    document.getElementById('root')
);