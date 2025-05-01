// src/pages/Contact.jsx
import React from 'react';
import '../style.css';

const contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-info">
        <h2>Contact</h2>
        <p>We are curious to hear your next project</p>
        <a href="mailto:Info@paikarstudio.com">Info@paikarstudio.com</a>
      </div>

      <div className="contact-image-container">
        <img src="/photo/Space01_update.jpg" alt="Contact Visual" className="contact-image" />
      </div>
    </div>
  );
};

export default contact;
