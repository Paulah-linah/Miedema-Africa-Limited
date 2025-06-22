'use client';

import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-description">
            We are here to help you with any questions you may have. Reach out to us and we will get back to you as soon as possible.
          </p>
          <ul className="contact-details">
            <li>
              <FaMapMarkerAlt className="contact-icon" />
              <span>Kahawa Sukari,Kericho Road 1st avenue,House 4390</span>
            </li>
            <li>
              <FaEnvelope className="contact-icon" />
              <span>miedemaafricaltd@gmail.com</span>
            </li>
            <li>
              <FaPhone className="contact-icon" />
              <span>+254-704-060-687</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
