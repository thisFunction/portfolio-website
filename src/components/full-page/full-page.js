import React from 'react';
import Navigation from '../../components/navigation/navigation';
import Aside from '../aside/aside';
import './full-page.scss';

const FullPage = ({asideTitle, mainArticle}) => {
    return (
        <div className="app">
            <section className="full-screen-page">
                <Aside title={asideTitle} />
                <article className="main-article">
                    {mainArticle}
                </article>
            </section>
            <Navigation />
        </div>
    )
};

export default FullPage;