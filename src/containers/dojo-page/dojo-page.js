import React from 'react';
import FullPage from '../../components/full-page/full-page';
import './dojo-page.scss';

const dojoArticle = () => {
    return (
        <div className="dojo-page">
            <p>Not quite there yet.</p>
            <span className="separate-line">sneak peek</span>

            <a href="https://github.com/thisFunction/portfolio-website/tree/dojo">gitHub</a>
        </div>
    )
};

const DojoPage = () => {
    return (
        <FullPage asideTitle="dojo" mainArticle={dojoArticle()}/>
    )
};

export default DojoPage;