import React from 'react'
import './playground-page.scss'
import Navigation from '../navigation/navigation'

const PlaygroundPage = () => {
    return (
        <div className="app">
            <section className="full-screen-page contact-page playground-page">
                <aside className="large-aside">Playground</aside>
                <article className="contact-section">
                    <span className="separate-line">Not quite there yet</span>
                    <p>Please come back soon for an updated version.</p>
            </article>
            </section>
            <Navigation />
        </div>
    )
}

export default PlaygroundPage