'use client';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projects = [
  {
    type: 'image',
    src: '/images/C1.jpeg',
    title: 'Modern Residence',
    description: 'A modern residence with different phases of construction.',
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

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

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
    <section id="projects" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-neutral-dark">OUR PROJECTS</h2>
        <p className="mt-4 text-xl text-gray-600">Explore our portfolio of completed projects.</p>
      </div>
      <div className="about-us-slider">
        <button onClick={prevSlide} className="slider-btn prev-btn">
          <FaChevronLeft />
        </button>
        <div className="slider-content">
          {projects.map((project, index) => (
            <div key={index} className={`slide ${index === current ? 'active' : ''}`}>
              {index === current && (
                <div className="slide-card">
                  <div className="project-media-container">
                    {project.type === 'image' ? (
                      <Image
                        src={project.src}
                        alt={project.title}
                        fill
                        className="project-media"
                        priority={index === 0}
                      />
                    ) : (
                      <video
                        ref={videoRef}
                        className="project-media"
                        playsInline
                        onClick={handleVideoClick}
                        key={project.src}
                      >
                        <source src={project.src} type="video/mp4" />
                      </video>
                    )}
                  </div>
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-text">{project.description}</p>
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
};

export default Projects;
