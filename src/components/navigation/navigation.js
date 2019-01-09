import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.scss';

const Navigation = () => { 
    return (
    <nav className="navigation">
        <Link to="/" >
            Home 
        </Link>
        <Link to="/dojo">
            Dojo 
        </Link> 
        <Link to="/contact">
            Contact 
        </Link>
    </nav>
    )
};

export default Navigation;