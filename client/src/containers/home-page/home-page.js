import React from 'react';
import myPhoto from '../../images/adam-skoczylas.jpg';
import FullPage from '../../components/full-page/full-page';
import './home-page.scss';


const homePageArticle = () => {
    return (
        <div className="introduction-content">
                <span className="separate-line">hello</span>
                <p>                I'm a front-end developer with over 4 years' experience building client-facing applications using HTML, CSS, and JavaScript. I have mostly worked with the Ember.js framework but have some experience with React. Other technology stacks include: Bootstrap, QUnit testing framework, highcharts.js, and node.js. When I'm not coding, I enjoy reading and writing articles about front-end development and biking.</p>
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