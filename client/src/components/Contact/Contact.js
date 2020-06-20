import React from 'react';
import Navigation from "../Navigation/Navigation";
import image from '../../images/adam-bike.jpg'
import './Contact.scss';

const contact = () => {
    return (
        <div className="contact">
            <aside>
                <img alt="adam waving on a bike" src={image}/>
            </aside>
            <main>
                <p>You can contact me through:</p>
                <div className="contact-container">
                    <h2>Email</h2>
                    <a href="mailto:skocadam@gmail.com?subject=Hello Adam">skocadam@gmail.com</a>
                </div>
                <div className="contact-container">
                    <h2>LinkedIn</h2>
                    <a href="https://www.linkedin.com/in/adam-skoczylas/">adam-skoczylas</a>
                </div>
                <div className="contact-container">
                    <h2>GitHub</h2>
                    <a href="https://github.com/thisFunction">thisFunction</a> 
                </div> 
            </main>
            <Navigation />      
        </div>
    )
};

export default contact;