import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import TeamManagement from './components/TeamManagement';
import EmailShowcase from './components/EmailShowcase';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Hero />
      <Features />
      <TeamManagement />
      <EmailShowcase />
      <Footer />
    </div>
  );
}