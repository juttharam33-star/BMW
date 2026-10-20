import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PerformanceMetrics from '../components/PerformanceMetrics';
import Showroom from '../components/Showroom';
import Services from '../components/Services';
import ConsultationCTA from '../components/ConsultationCTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
      <Navbar />
      <Hero />
      <PerformanceMetrics />
      <Showroom />
      <Services />
      <ConsultationCTA />
      <Footer />
    </div>
  );
}