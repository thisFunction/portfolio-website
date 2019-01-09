import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.scss';

const Navigation = () => { 
    return (
    <nav className="navigation">
        <NavLink exact activeClassName="activeLink" to="/" >
            Home 
        </NavLink>
        <NavLink exact activeClassName="activeLink" to="/dojo">
            Dojo 
        </NavLink> 
        <NavLink exact activeClassName="activeLink" to="/contact">
            Contact 
        </NavLink>
    </nav>
    )
};

export default Navigation;