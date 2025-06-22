'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaHome, FaInfoCircle, FaConciergeBell, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const navLinks = [
  { href: '/', label: 'Home', icon: <FaHome /> },
  { href: '#about', label: 'About', icon: <FaInfoCircle /> },
  { href: '#services', label: 'Services', icon: <FaConciergeBell /> },
  { href: '#projects', label: 'Projects', icon: <FaProjectDiagram /> },
  { href: '#contact', label: 'Contact', icon: <FaEnvelope /> },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close the mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-neutral-dark/90 backdrop-blur-sm shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <img src="/images/logo.jpeg" alt="Miedema Africa Logo" className="h-10" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-gray-300 hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center">
                  <span className="mr-2">{link.icon}</span>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-neutral-dark inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-neutral-700 focus:outline-none">
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu with smooth transition */}
      <div
        className={`transition-all duration-300 ease-in-out md:hidden ${ 
          isOpen ? 'max-h-96' : 'max-h-0'
        } overflow-hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleLinkClick} // Close menu on click
              className="text-gray-300 hover:text-accent block px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center"
            >
              <span className="mr-2">{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}


