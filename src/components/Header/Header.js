import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
    return  (
        <div className="App-header">
            <h1 className="title">Weather App</h1>
            <ul className="Nav-container">
                <li>
                    <NavLink className="Nav-elem" exact to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className="Nav-elem" to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink className="Nav-elem" to="/search">Search</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Header;