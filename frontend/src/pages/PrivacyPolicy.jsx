import React from 'react';

export default function PrivacyPolicy() {
  return (
    <main className="page-container privacy-container">
      <h1>Privacy Policy</h1>
      <p className="last-updated">Last Updated: {new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })}</p>

      <div className="privacy-content">
        <section className="privacy-section">
          <h2>1. Introduction</h2>
          <p>Welcome to CivicLoop ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy policy, or our practices with regards to your personal information, please contact us at privacy@civicloop.com.</p>
          <p>This Privacy Policy applies to all information collected through our website, and/or any related services, sales, marketing or events (we refer to them collectively in this Privacy Policy as the "Services").</p>
        </section>

        <section className="privacy-section">
          <h2>2. Information We Collect</h2>
          <h3>2.1 Personal Information</h3>
          <p>We collect personal information that you voluntarily provide to us when you:</p>
          <ul>
            <li>Register on our website</li>
            <li>Express an interest in obtaining information about us or our products and Services</li>
            <li>Participate in activities on the Services</li>
            <li>Otherwise contact us</li>
          </ul>
          
          <h3>2.2 Automatically Collected Information</h3>
          <p>When you visit our website, we automatically collect certain information about your device, including:</p>
          <ul>
            <li>IP address</li>
            <li>Browser and device characteristics</li>
            <li>Operating system</li>
            <li>Referring URLs</li>
            <li>Information about how and when you use our Services</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect or receive:</p>
          <ul>
            <li>To facilitate account creation and logon process</li>
            <li>To send administrative information to you</li>
            <li>To fulfill and manage your orders</li>
            <li>To post testimonials</li>
            <li>To request feedback</li>
            <li>To protect our Services</li>
            <li>To enforce our terms, conditions and policies</li>
            <li>To respond to legal requests and prevent harm</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>4. Sharing Your Information</h2>
          <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>
          <p>We may share your data with third-party vendors, service providers, contractors or agents who perform services for us or on our behalf.</p>
        </section>

        <section className="privacy-section">
          <h2>5. Data Security</h2>
          <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.</p>
        </section>

        <section className="privacy-section">
          <h2>6. Your Privacy Rights</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
          <ul>
            <li>The right to request access to your personal information</li>
            <li>The right to request correction of your personal information</li>
            <li>The right to request deletion of your personal information</li>
            <li>The right to object to processing of your personal information</li>
            <li>The right to request restriction of processing your personal information</li>
            <li>The right to request transfer of your personal information</li>
            <li>The right to withdraw consent</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>7. Cookies and Tracking Technologies</h2>
          <p>We may use cookies and similar tracking technologies to access or store information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
        </section>

        <section className="privacy-section">
          <h2>8. Children's Privacy</h2>
          <p>Our Services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under age 13, we will delete that information as quickly as possible.</p>
        </section>

        <section className="privacy-section">
          <h2>9. Changes to This Privacy Policy</h2>
          <p>We may update this privacy policy from time to time. The updated version will be indicated by an updated "Last Updated" date and the updated version will be effective as soon as it is accessible.</p>
        </section>

        <section className="privacy-section">
          <h2>10. Contact Us</h2>
          <p>If you have questions or comments about this policy, you may contact our Data Protection Officer (DPO) by email at privacy@civicloop.com or by post to:</p>
          <address>
            CivicLoop Privacy Office<br />
            123 Main Street<br />
            City, State 12345<br />
            United States
          </address>
        </section>
      </div>
    </main>
  );
}