import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <h1>🕹️ API Hub</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
        </nav>
    );
}

export default Navbar;
