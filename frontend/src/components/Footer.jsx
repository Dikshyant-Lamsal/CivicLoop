import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>My Website</h3>
                        <p>A simple and clean website built with React.</p>
                    </div>
                    
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    
                    <div className="footer-section">
                        <h3>Contact Info</h3>
                        <ul className="footer-links">
                            <li>Email: contact@mywebsite.com</li>
                            <li>Phone: (123) 456-7890</li>
                            <li>Address: 123 Main St, City</li>
                        </ul>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <p>&copy; {currentYear} CivicLoop. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;