import React from 'react';
import FullPage from '../../components/full-page/full-page';
import './contact-page.scss';

const contactArticle = () => {
    return (
        <div className="contact-page">
            <p>You can contact me through:</p>
            <div className="contact-container">
            <span className="separate-line">Email</span>
                <a href="mailto:skocadam@gmail.com?subject=Hello Adam">skocadam@gmail.com</a>
                </div>
            <div className="contact-container">
                <span className="separate-line">LinkedIn</span>
                <a href="https://www.linkedin.com/in/adam-skoczylas/">adam-skoczylas</a>
            </div>
            <div className="contact-container">
                <span className="separate-line">GitHub</span>
                <a href="https://github.com/thisFunction">thisFunction</a> 
            </div>       
        </div>
    )
};

const ContactPage = () => {
    return (
        <FullPage asideTitle="contact" mainArticle={contactArticle()}/>
    )
};

export default ContactPage;


