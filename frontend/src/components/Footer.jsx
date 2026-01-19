import React from 'react';

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
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#privacy">Privacy Policy</a></li>
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
                    <p>&copy; {currentYear} My Website. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;