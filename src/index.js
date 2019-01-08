import React from 'react'
import { render } from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './css-reset.css';
import './index.scss';
import MainPage from './components/home-page/home-page'
import PlaygroundPage from './components/playground-page/playground-page'
import ContactPage from './components/contact-page/contact-page'

import ErrorPage from './components/error-page/error-page'
import createHashHistory from 'history/createHashHistory';

const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });

render(
    <BrowserRouter history={hashHistory}>
        <Switch>
            <Route path="/" component={MainPage} exact />
            <Route path="/playground" component={PlaygroundPage} />

            <Route path="/contact" component={ContactPage} />
            <Route component={ErrorPage} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);