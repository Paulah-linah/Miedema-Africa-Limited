'use client';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projects = [
  {
    type: 'image',
    src: '/images/C1.jpeg',
    title: 'Modern Residence',
    description: 'A stunning example of modern architecture and design.',
  },
  {
    type: 'video',
    src: '/images/V1.mp4',
    title: 'Luxury Villa Tour',
    description: 'A virtual walkthrough of a luxury villa project.',
  },
  {
    type: 'image',
    src: '/images/C2.jpeg',
    title: 'Commercial Complex',
    description: 'An innovative commercial space with state-of-the-art facilities.',
  },
  {
    type: 'image',
    src: '/images/C3.jpeg',
    title: 'Urban Development',
    description: 'A large-scale urban development project in the city center.',
  },
  {
    type: 'image',
    src: '/images/C4.jpeg',
    title: 'Residential Tower',
    description: 'A high-rise residential tower with panoramic city views.',
  },
  {
    type: 'image',
    src: '/images/C5.jpeg',
    title: 'Community Center',
    description: 'A community center designed for recreational and social activities.',
  },
];

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef(null);

  const pauseVideo = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  const nextSlide = useCallback(() => {
    pauseVideo();
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  }, [pauseVideo]);

  const prevSlide = useCallback(() => {
    pauseVideo();
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  }, [pauseVideo]);

  useEffect(() => {
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
        <h2>OUR PROJECTS</h2>
        <p>Explore our portfolio of completed projects.</p>
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
                      priority={index === 0} // Prioritize loading the first image
                    />
                  ) : (
                    <video
                      ref={videoRef}
                      className="project-media"
                      controls
                      playsInline
                      key={project.src}
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
