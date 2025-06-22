'use client';

import React from 'react';
import Image from 'next/image';
import { FaCheckCircle, FaUsers, FaAward } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaCheckCircle />,
      title: 'Quality Assurance',
      description: 'We deliver the highest standards of quality in every project, ensuring durability and excellence.',
    },
    {
      icon: <FaUsers />,
      title: 'Experienced Team',
      description: 'Our team consists of certified professionals with years of experience in the construction industry.',
    },
    {
      icon: <FaAward />,
      title: 'Customer Satisfaction',
      description: 'We prioritize client needs and work collaboratively to achieve 100% satisfaction.',
    },
  ];

  return (
    <section className="why-choose-us-section">
      <div className="container-choose">
        <div className="text-content-choose">
          <h2 className="section-title-choose">Why Choose Us?</h2>
          <p className="section-description-choose">
            With a legacy of excellence and a commitment to innovation, Miedema Africa is your trusted partner in construction. We bring your vision to life with precision and passion.
          </p>
          <ul className="features-list-choose">
            {features.map((feature, index) => (
              <li key={index} className="feature-item-choose">
                <div className="feature-icon-choose">{feature.icon}</div>
                <div className="feature-text-choose">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
