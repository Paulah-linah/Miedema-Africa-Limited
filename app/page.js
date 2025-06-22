import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Slider from './components/Slider';

export default function Home() {
  return (
    <div className="bg-neutral-light">
      <Navbar />
      <main>
        <Slider />
        <AboutUs />
        <Services />
        <Projects />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
