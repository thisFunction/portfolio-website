import React from 'react'
import './home-page.scss'
import largeAsideName from './aside'
import introductionSection from './introduction'
import Navigation from '../navigation/navigation'

const MainPage = () => {
    return (
        <div className="app">
            <section className="full-screen-page home-page">
                {largeAsideName}
                {introductionSection}
            </section>
            <Navigation />
        </div>
    )
}

export default MainPage