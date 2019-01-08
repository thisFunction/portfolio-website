import React from 'react'
import { Link } from 'react-router-dom'
import './navigation.scss'

const Navigation = () => { 
    return (
    <nav className="navigation">
        <Link to="/" >
            About 
        </Link>
        <Link to="/add-day">
            Playground 
        </Link> 
        <Link to="/list-days">
            Contact 
        </Link>
    </nav>
)}


export default Navigation