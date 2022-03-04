import React from 'react';
import image from '../../images/adam-head.jpg';
import Navigation from '../Navigation/Navigation';
import './Home.scss';

const home = () => (
    <div className="home">
        <aside>
            <h1>AS</h1>
            <p>{`{Frontend Developer}`}</p>
        </aside>
        <main>
            <h1 className="separate-line">hello</h1>
            <p>Make yourself at home. The coffee is in the pot and there’s milk in the fridge.</p>
            <p>My name is Adam Skoczylas and I am a front-end developer. I write web applications in Ember.js and React. I have over eight years of experience working on client facing apps. The projects I have worked on include conference registration forms, e-commerce websites, robo-advisor app, and meeting app for managers. I speak HTML, CSS, JS, RWD, and currently improving my TS.</p>
            <p>When I am not coding, I enjoy making pour-over coffee, listening to vinyl records, and reading American postmodern fiction. I am also an avid biker.</p>
            <img className="img" alt="Adam's head in a baseball hat" src={image}/>
        </main>
        <Navigation />
    </div>
)

export default home;
