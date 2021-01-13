import './styles/Nav.css'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    state = {  }

    render() { 
        return (
            <nav className="abril-fatface navbar">
                <ul className="mx-auto nav-links">
                    <li className=""><Link to="/">reign</Link></li>
                    <span>/</span>
                    <li className=""><Link to="/us">us</Link></li>
                    <span>/</span>
                    <li className=""><Link to="/demand">demand</Link></li>
                    <span>/</span>
                    <li className=""><Link to="/lyrics">lyrics</Link></li>
                </ul>
            </nav>
        );
    }
}
 
export default Nav;