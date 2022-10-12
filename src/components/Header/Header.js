import React from 'react';
import './Header.scss'

import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <nav className='HeaderNav'>
            <NavLink
                to="/">
                <h1>Le journal d'Idris</h1>
            </NavLink>
        </nav>
    );
};

export default Header;