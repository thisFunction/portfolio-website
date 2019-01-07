import { render } from 'react-dom'
import './css-reset.css';
import './index.scss';
import mainPage from './components/main-page/main-page'
import {BrowserRouter, Route} from 'react-router-dom';

import React from 'react'
window.React = React;

render(
    <BrowserRouter>
        <Route path="/" component={mainPage} />
    </BrowserRouter>,
    document.getElementById('root')
);