import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { Footer } from './components/Footer';
import { StickyCall } from './components/StickyCall';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-brand-dark selection:bg-brand-lime selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
      </main>
      <Footer />
      <StickyCall />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;