import React from 'react'
import './main-page.scss'
import nameAside from './aside'
import introductionSection from './introduction'
import Navigation from '../navigation/navigation'

const MainPage = () => {
    return (
        <div className="App">
            <section className="main-page">
                {nameAside}
                {introductionSection}
            </section>
            <Navigation />
        </div>

    )
}


export default MainPage