'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projects = [
  {
    type: 'image',
    src: '/images/C1.jpeg',
    title: 'Residential Building',
    description: 'A look at the exterior and architectural design.'
  },
  {
    type: 'video',
    src: '/images/V1.mp4',
    title: 'Residential Building',
    description: 'A virtual tour showcasing the building and its features.'
  },
  {
    type: 'image',
    src: '/images/C2.jpeg',
    title: 'Residential Building',
    description: 'A look at the exterior and architectural design.'
  },
  {
    type: 'image',
    src: '/images/C3.jpeg',
    title: 'Residential Building',
    description: 'A look at the exterior and architectural design.'
  },
  {
    type: 'image',
    src: '/images/C4.jpeg',
    title: 'Residential Building',
    description: 'A look at the exterior and architectural design.'
  }
];

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const length = projects.length;
  const videoRef = useRef(null);

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const nextSlide = () => {
    pauseVideo();
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    pauseVideo();
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    // Reset and pause video when the active slide is a video
    if (projects[current].type === 'video' && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.pause();
    }
  }, [current]);

  if (!Array.isArray(projects) || projects.length <= 0) {
    return null;
  }

  return (
    <section id="projects" className="projects-section">
      <div className="projects-title">
        <h2 className="text-4xl font-bold text-neutral-dark">OUR PROJECTS</h2>
        <p className="mt-4 text-xl text-gray-600">Explore our portfolio of completed projects.</p>
      </div>
      <div className="projects-slider-container">
        <div className="projects-slider">
          {projects.map((project, index) => (
            <div
              className={index === current ? 'project-slide active' : 'project-slide'}
              key={index}
            >
              {index === current && (
                <div className="project-card">
                  {project.type === 'image' ? (
                    <Image
                      src={project.src}
                      alt={project.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="project-media"
                    />
                  ) : (
                    <video
                      ref={videoRef}
                      className="project-media"
                      controls
                      playsInline
                      key={project.src} // Add key to force re-render
                    >
                      <source src={project.src} type="video/mp4" />
                    </video>
                  )}
                  <div className="project-overlay">
                    <div className="project-info">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <button onClick={prevSlide} className="nav-btn prev">
          <FaChevronLeft />
        </button>
        <button onClick={nextSlide} className="nav-btn next">
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Projects;
