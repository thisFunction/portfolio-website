import React from 'react'
import { render } from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './css-reset.css';
import './index.scss';
import MainPage from './components/main-page/main-page'
import ErrorPage from './components/error-page/error-page'

render(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={MainPage} exact />
            <Route component={ErrorPage} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);