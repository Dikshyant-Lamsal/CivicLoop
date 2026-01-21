import React from 'react';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <main className="page-container contact-container">
      <h1>Contact Us</h1>
      
      <div className="contact-content">
        <div className="contact-intro">
          <p>Have questions or feedback? We'd love to hear from you. Fill out the form below or reach out using our contact information.</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              placeholder="What is this regarding?"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Enter your message here..."
            />
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>

        <div className="contact-info">
          <div className="info-item">
            <h3>Email</h3>
            <p>contact@civicloop.com</p>
            <p>support@civicloop.com</p>
          </div>

          <div className="info-item">
            <h3>Phone</h3>
            <p>+1 (123) 456-7890</p>
            <p>+1 (987) 654-3210</p>
          </div>

          <div className="info-item">
            <h3>Address</h3>
            <p>123 Main Street</p>
            <p>City, State 12345</p>
            <p>United States</p>
          </div>
        </div>
      </div>
    </main>
  );
}