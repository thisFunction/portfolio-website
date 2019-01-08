import React from 'react'
import './contact-page.scss'
import Navigation from '../navigation/navigation'

const ContactPage = () => {
    return (
        <div className="app">
            <section className="full-screen-page contact-page">
                <aside className="large-aside">Contact</aside>
                <article className="contact-section">
                    <p>You can contact me through:</p>
                    <span className="separate-line">email:</span>
                    <a href="mailto:skocadam@gmail.com?subject=Hello Adam">skocadam@gmail.com</a>
                    <span className="separate-line">linkedIn:</span>
                    <a href="https://www.linkedin.com/in/adam-skoczylas/">adam-skoczylas</a>                    
                    <span className="separate-line">gitHub:</span>
                    <a href="https://github.com/thisFunction">thisFunction</a>        
            </article>
            </section>
            <Navigation />
        </div>
    )
}

export default ContactPage