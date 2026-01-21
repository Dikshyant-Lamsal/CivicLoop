import React from 'react';
import { Link } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';

const Header = () => (
    <header>
        <div className="navbar-container">
            <Link to="/">
                <img src="/logo.png" alt="Logo" className="navbar-logo" />
                <p className="navbar-title">CivicLoop</p>
            </Link>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </div>
    </header>
);

export default Header;