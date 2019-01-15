import React from 'react';
import FullPage from '../../components/full-page/full-page';
import './contact-page.scss';

const contactArticle = () => {
    return (
        <div className="contact-page">
            <p>You can contact me through:</p>
            <span className="separate-line">email</span>
            <a href="mailto:skocadam@gmail.com?subject=Hello Adam">skocadam@gmail.com</a>
            <span className="separate-line">linkedIn</span>
            <a href="https://www.linkedin.com/in/adam-skoczylas/">adam-skoczylas</a>                    
            <span className="separate-line">gitHub</span>
            <a href="https://github.com/thisFunction">thisFunction</a>        
        </div>
    )
};

const ContactPage = () => {
    return (
        <FullPage asideTitle="contact" mainArticle={contactArticle()}/>
    )
};

export default ContactPage;


