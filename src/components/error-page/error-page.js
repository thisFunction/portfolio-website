import React from 'react'
import Navigation from '../navigation/navigation'

const ErrorPage = () => {
    return (
        <div className="app">
            <section className="full-screen-page contact-page">
                <aside className="large-aside">Oops!</aside>
                <article className="contact-section">
                    <p>Looks like something is not right with the URL. Please use navigation below to find you way back.</p>     
                </article>
            </section>
            <Navigation />
        </div>
    )
}

export default ErrorPage