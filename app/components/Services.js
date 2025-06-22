'use client';
import React from 'react';
import { FaHardHat, FaDraftingCompass, FaBuilding, FaClipboardList } from 'react-icons/fa';

const services = [
  {
    icon: <FaHardHat />,
    title: 'General Contracts',
    description: 'We offer a wide range of general construction services.',
  },
  {
    icon: <FaDraftingCompass />,
    title: 'Design',
    description: 'We provide innovative and sustainable design solutions.',
  },
  {
    icon: <FaClipboardList />,
    title: 'Project Management',
    description: 'We provide comprehensive project management services.',
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-title">
        <h2>OUR SERVICES</h2>
        <p>What We Offer</p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
