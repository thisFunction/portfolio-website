import React from 'react';
import FullPage from '../../components/full-page/full-page';

const errorArticle = () => {
    return (
        <p>It looks like something is not quite right with the URL. Please use the navigation below to find your way back.</p>
    )
};

const DojoPage = () => {
    return (
        <FullPage asideTitle="oops" mainArticle={errorArticle()}/>
    )
};

export default DojoPage;