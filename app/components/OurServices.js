'use client';

import React from 'react';
import { FaAddressCard, FaClipboardList, FaCogs, FaDraftingCompass, FaHandPaper, FaHardHat, FaPaperPlane } from 'react-icons/fa';
import { FaClapperboard } from 'react-icons/fa6';

const services = [
  {
    icon: <FaClipboardList />,
    title: 'Project Management',
    description: 'We provide comprehensive project management services to ensure successful project delivery.',
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
