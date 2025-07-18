
import React from 'react';
import Navigation from '../components/Navigation';
import Hero3D from '../components/Hero3D';
import Services from '../components/Services';
import ProjectsGallery from '../components/ProjectsGallery';
import VideoGallery from '../components/VideoGallery';
import CEOSection from '../components/CEOSection';
import Team from '../components/Team';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section id="home">
        <Hero3D />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="projects">
        <ProjectsGallery />
      </section>
      <section id="videos">
        <VideoGallery />
      </section>
      <section id="ceo">
        <CEOSection />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="about">
        <About />
      </section>
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
