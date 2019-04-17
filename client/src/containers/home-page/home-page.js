import React from 'react';
import myPhoto from '../../images/adam-skoczylas.jpg';
import FullPage from '../../components/full-page/full-page';
import './home-page.scss';


const homePageArticle = () => {
    return (
        <div className="introduction-content">
                <span className="separate-line">hello</span>
                <p>I'm a front-end developer who has recently relocated to Toronto, ON.</p>
                <p>I have 4 years’ experience working in front-end development including technologies such as HTML5, CSS3, JavaScript, Ember.js, Bootstrap, and node.js. I work on both Lunux/Unix and PC environments and I’m proficient with CLI and git.</p>
                <p>Most of my experience is with Ember.js framework, but recently I began my journey with React.js library. So far, I love it! <span role="img" aria-label="rock and roll hand">🤟</span> I'm very enthusiastic about JavaScript, MongoDB, node.js, and I'm looking forward to continuing my career as a front-end developer.</p>
                <p>I hope you enjoy my website. Please feel free to contact me.</p>
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