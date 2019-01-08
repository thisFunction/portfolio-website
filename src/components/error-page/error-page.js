import React from 'react'
import Navigation from '../navigation/navigation'

const ErrorPage = () => {
    return (
        <div className="app">
            <section className="full-screen-page contact-page">
                <aside className="large-aside">Oops!</aside>
                <article className="contact-section">
                    <p>It looks like something is not quite right with the URL. Please use the navigation below to find your way back.</p>     
                </article>
            </section>
            <Navigation />
        </div>
    )
}

export default ErrorPage