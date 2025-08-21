'use client';

import React from 'react';
import { FaCogs, FaDraftingCompass, FaHardHat } from 'react-icons/fa';

const services = [
  {
    icon: <FaCogs />,
    title: 'General Supplies',
    description: 'We provide a wide range of general supplies to meet the needs of various industries, ensuring quality and timely delivery.',
  },
  {
    icon: <FaDraftingCompass />,
    title: 'General Construction',
    description: 'Our construction services cover everything from planning and design to execution and finishing, delivering high-quality results.',
  },
  {
    icon: <FaHardHat />,
    title: 'Civil Works',
    description: 'We specialize in civil works, including infrastructure projects, ensuring durability and compliance with all standards.',
  },
];

const OurServices = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-title">
        <h2>Our Services</h2>
        <p>Providing the best services to meet your needs.</p>
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

export default OurServices;
