'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const images = [
  { src: '/images/Trial.jpeg', caption: 'Quality Comes First' },
  { src: '/images/Trial 2.jpeg', caption: 'Building the Future' },
  { src: '/images/Trial 3.jpeg', caption: 'Reliable & Trusted' }
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds per image
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="slider">
      <div className="slides">
        {images.map((item, index) => (
          <div className={`slide ${index === current ? 'active' : ''}`} key={index}>
            <Image
              src={item.src}
              alt={`Slide ${index + 1}`}
              fill
              priority={index === 0} // Prioritize loading the first image
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100} // Ensure high-quality images
              style={{ objectFit: 'cover' }}
            />
            <div className="caption">{item.caption}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
