'use client';
import React, { useState } from 'react';
import { FaBullseye, FaEye, FaHeart, FaBook, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const cardsData = [
  {
    icon: <FaBullseye />,
    title: 'Our Mission',
    text: 'Bringing imaginations to life and planting endless trees.',
  },
  {
    icon: <FaEye />,
    title: 'Our Vision',
    text: 'Innovatively delivering magnificent construction ideas as we operate within available budgets and set timelines, while saving the planet through tree planting.',
  },
  {
    icon: <FaHeart />,
    title: 'Our Core Values',
    list: [
      'Pure integrity',
      'Safety conscious',
      'Lifelong mentorship',
      'Climate change action',
    ],
  },
  {
    icon: <FaBook />,
    title: 'Our Story',
    text: `Our founders noticed a wide gap between creatively meeting clients' construction needs and achieving high levels of quality. Towards the tail end of 2022, Miedema Africa Limited was born with a youthful, resilient, innovative team focused on mentorship and excellence.`,
  },
];

export default function AboutUs() {
  const [current, setCurrent] = useState(0);
  const length = cardsData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section id="about" className="py-12 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-neutral-dark">ABOUT US</h2>
        <p className="mt-4 text-xl text-gray-600">Learn more about our mission, vision, values, and story.</p>
      </div>
      <div className="about-us-slider">
        <button onClick={prevSlide} className="slider-btn prev-btn">
          <FaChevronLeft />
        </button>
        <div className="slider-content">
          {cardsData.map((card, index) => (
            <div key={index} className={`slide ${index === current ? 'active' : ''}`}>
              {index === current && (
                <div className="slide-card">
                  <div className="card-icon">{card.icon}</div>
                  <h3 className="card-title">{card.title}</h3>
                  {card.text && <p className="card-text">{card.text}</p>}
                  {card.list && (
                    <ul className="card-list">
                      {card.list.map((li, j) => (
                        <li key={j}>{li}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        <button onClick={nextSlide} className="slider-btn next-btn">
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}
