import React, { useState, useEffect, useCallback } from 'react';
import Navigation from '@/components/portfolio/Navigation';
import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import PortfolioSection from '@/components/portfolio/PortfolioSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import ExperienceSection from '@/components/portfolio/ExperienceSection';
import ContactSection from '@/components/portfolio/ContactSection';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');

  const handleNavigate = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = ['hero', 'about', 'portfolio', 'skills', 'experience', 'contact'];
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Left Navigation */}
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content */}
      <main className="ml-20 lg:ml-64">
        <HeroSection onNavigate={handleNavigate} />
        <AboutSection />
        <PortfolioSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />

        {/* Footer */}
        <footer className="py-8 px-6 lg:px-12 border-t border-slate-100 bg-slate-50">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © 2025 Molly Hickey. Built with curiosity and coffee.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/in/mollyhhickey/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://medium.com/@molly.hickey"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
              >
                Medium
              </a>
              <a
                href="mailto:molly@mollyhickey.com"
                className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
