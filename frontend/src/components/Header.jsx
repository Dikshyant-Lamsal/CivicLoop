import React from 'react';

const Header = () => (
    <header>
        <div className="navbar-container">
            <a className="navbar-brand" href="#home">My Website</a>
            <nav>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
);

export default Header;