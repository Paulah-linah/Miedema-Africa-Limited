'use client';
import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa6';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo */}
        <div className="footer-logo">
          <Image src="/images/logo.jpeg" alt="MIEDEMA Construction" width={200} height={80} />
        </div>

        {/* Navigation links */}
        <div className="footer-nav">
          <Link href="#home">Home</Link>
          <Link href="#about">About Us</Link>
          <Link href="#services">Services</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </div>

        {/* Contact and Social Info */}
        <div className="footer-contact">
          <p>Find us:</p>

          <div className="social-icons">
            <div>
              <a href="https://ke.linkedin.com/in/cosmas-odipo-b65625200" target="_blank">
                <FaLinkedin />
              </a>
              <span>Miedema Africa Limited</span>
            </div>
            <div>
              <a href="mailto:miedemaafricaltd@gmail.com">
                <FaEnvelope />
              </a>
              <span>miedemaafricaltd@gmail.com</span>
            </div>
          </div>

          <div className="contact-info">
            <div className="contact-item">
              <FaPhone />
              <p>Phone:<br />+254-704-060-687</p>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt />
              <p>Kahawa Sukari,<br />Kericho Road 1st avenue,<br />House 439</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
