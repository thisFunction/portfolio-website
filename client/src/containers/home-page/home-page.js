import React from 'react';
import myPhoto from '../../images/adam-skoczylas.jpg';
import FullPage from '../../components/full-page/full-page';
import './home-page.scss';


const homePageArticle = () => {
    return (
        <div className="introduction-content">
                <h1 className="separate-line">hello</h1>
                <p>Make yourself at home. The coffee is in the pot and there’s milk in the fridge.</p>
                <p>My name is Adam and I am a front-end developer. I write web applications in Ember.js and React. I have over four years of experience working on client facing apps. The projects I have worked on include conference registration forms, e-commerce websites, a robo-advisor app, and a SaaS tool for managers. I speak HTML, CSS, JS, RWD, and currently improving my WCAG.</p>
                <p>When I am not coding, I enjoy making pour-over coffee, listening to vinyl records, and reading American postmodern fiction. I am also an avid biker.</p>
                <img className="adam-skoczylas-img" alt="My photograph" src={myPhoto}/>
        </div>
    )
};

const homePage = () => {
    return (
        <FullPage asideTitle="adam skoczylas" mainArticle={homePageArticle()}/>
    )
};

export default homePage;