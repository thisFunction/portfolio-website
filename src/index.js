import ReactDOM from 'react-dom';
import './index.scss';
import mainPage from './components/main-page/main-page'

import React from 'react'
window.React = React;
ReactDOM.render(
    mainPage,
    document.getElementById('root'));