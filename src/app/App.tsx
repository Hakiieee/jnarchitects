import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Home, Building, Leaf, Sofa, Compass, Instagram, Facebook, Linkedin, Landmark, HardHat } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import GrainTexture from './components/GrainTexture';
import ScrollProgress from './components/ScrollProgress';
import DecorativeCorner from './components/DecorativeCorner';
import AboutSection from './components/AboutSection';
import MissionVisionSection from './components/MissionVisionSection';
import CoreValuesSection from './components/CoreValuesSection';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServicesSection';
import DesignProcessSection from './components/DesignProcessSection';
import ConsultationSection from './components/ConsultationSection';
import ContactSection from './components/ContactSection';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const logoSrc = '/brand/jna-logo-transparent.png';

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.hash) {
        const href = target.getAttribute('href');
        if (href?.startsWith('#')) {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const projects = [
    {
      title: 'Villasis General Hospital',
      location: 'Villasis, Pangasinan',
      description: 'A healthcare facility concept focused on clear arrival, efficient public access, landscaped frontage, and a welcoming civic presence.',
      image: '/projects/villasis-general-hospital-blue-hour.png'
    },
    {
      title: 'Villasis 911 Central Command Center',
      location: 'Villasis, Pangasinan',
      description: 'An emergency response center study designed around visibility, organized circulation, public safety identity, and reliable command operations.',
      image: '/projects/villasis-911-command-center-realistic.png'
    },
    {
      title: 'Modern Chapel',
      location: 'Concept Study / Pangasinan',
      description: 'A contemporary chapel study balancing a strong spiritual focal point with warm materials, transparent frontage, and a calm landscaped approach.',
      image: '/projects/modern-chapel-centered-realistic.png'
    },
    {
      title: 'Sacred Hall Front Pavilion',
      location: 'Concept Study / Pangasinan',
      description: 'A tropical pavilion concept shaped by deep roof overhangs, woven facade details, accessible entry paths, and shaded outdoor gathering spaces.',
      image: '/projects/sacred-hall-front-realistic.png'
    },
    {
      title: 'Sacred Hall Elevation',
      location: 'Concept Study / Pangasinan',
      description: 'A sacred hall elevation study exploring timber texture, layered roof form, tropical planting, and a grounded community worship setting.',
      image: '/projects/sacred-hall-elevation-realistic.png'
    }
  ];

  const services = [
    { icon: Landmark, title: 'Architectural Design', description: 'Contemporary design concepts, space planning, drawings, and complete architectural direction for residential, commercial, and civic projects.' },
    { icon: Sofa, title: 'Interior Design', description: 'Interior layouts, finishes, lighting, material palettes, and spatial arrangements that improve comfort, function, and identity.' },
    { icon: Compass, title: 'Site Planning', description: 'Site studies, circulation, zoning ideas, outdoor relationships, and planning strategies that respond to context and client needs.' },
    { icon: HardHat, title: 'Construction Management', description: 'Project coordination from conception to completion, helping align design intent, quality, schedule, and on-site execution.' },
    { icon: Leaf, title: 'Sustainable Design', description: 'Environmentally responsible solutions focused on daylight, ventilation, efficient layouts, durable materials, and long-term stewardship.' },
    { icon: Building, title: 'Commercial & Civic Projects', description: 'Design services for offices, studios, community facilities, and client-facing spaces that balance professionalism and usability.' }
  ];

  return (
    <div className="min-h-screen bg-[#091124]">
      <GrainTexture />
      <ScrollProgress />

      {/* Fixed Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#D4AF37]/20 bg-[#091124]/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Main navigation">
          <a href="#home" className="flex items-center">
            <img src={logoSrc} alt="JNArchitects Design Studio logo" className="h-12 w-auto min-w-[170px] object-contain sm:h-14 sm:min-w-[210px]" />
          </a>

          <div className="hidden items-center gap-9 md:flex">
            <a href="#about" className="text-xs font-medium uppercase tracking-[0.28em] text-[#E5E0D8] transition hover:text-[#D4AF37]">About</a>
            <a href="#mission" className="text-xs font-medium uppercase tracking-[0.28em] text-[#E5E0D8] transition hover:text-[#D4AF37]">Mission</a>
            <a href="#projects" className="text-xs font-medium uppercase tracking-[0.28em] text-[#E5E0D8] transition hover:text-[#D4AF37]">Projects</a>
            <a href="#services" className="text-xs font-medium uppercase tracking-[0.28em] text-[#E5E0D8] transition hover:text-[#D4AF37]">Services</a>
            <a href="#contact" className="text-xs font-medium uppercase tracking-[0.28em] text-[#E5E0D8] transition hover:text-[#D4AF37]">Contact</a>
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <a href="#consultation" className="border border-[#D4AF37] bg-[#D4AF37] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#091124] transition hover:bg-[#091124] hover:text-[#D4AF37]">
              Book Consultation
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex h-11 w-11 items-center justify-center border border-[#D4AF37]/40 text-[#D4AF37] transition hover:border-[#D4AF37] md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="border-t border-[#D4AF37]/20 bg-[#091124] md:hidden">
            <div className="mx-auto grid max-w-7xl gap-1 px-5 py-5">
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-3 text-sm uppercase tracking-[0.24em] text-[#E5E0D8] transition hover:text-[#D4AF37]">About</a>
              <a href="#mission" onClick={() => setMobileMenuOpen(false)} className="py-3 text-sm uppercase tracking-[0.24em] text-[#E5E0D8] transition hover:text-[#D4AF37]">Mission</a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="py-3 text-sm uppercase tracking-[0.24em] text-[#E5E0D8] transition hover:text-[#D4AF37]">Projects</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="py-3 text-sm uppercase tracking-[0.24em] text-[#E5E0D8] transition hover:text-[#D4AF37]">Services</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-3 text-sm uppercase tracking-[0.24em] text-[#E5E0D8] transition hover:text-[#D4AF37]">Contact</a>
              <a href="#consultation" onClick={() => setMobileMenuOpen(false)} className="mt-3 border border-[#D4AF37] bg-[#D4AF37] px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[#091124] transition hover:bg-[#091124] hover:text-[#D4AF37]">
                Book Consultation
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section
          id="home"
          className="relative flex min-h-screen items-center overflow-hidden bg-cover bg-center"
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(9, 17, 36, 0.72), rgba(9, 17, 36, 0.84)), url('/home-background.jpg')`,
              y: heroY
            }}
          />

          <motion.img
            src={logoSrc}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-[72%] top-[52%] hidden w-[min(58vw,840px)] -translate-x-1/2 -translate-y-1/2 opacity-[0.055] mix-blend-screen grayscale brightness-150 contrast-125 md:block"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 0.055, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-28 lg:px-8">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative inline-block">
                  <DecorativeCorner position="top-left" className="-left-4 -top-4" />
                  <p className="mb-6 text-xs font-medium uppercase tracking-[0.34em] text-[#D4AF37]">San Carlos City, Pangasinan Architecture Studio</p>
                </div>
              </motion.div>

              <motion.h1
                className="font-['Cormorant_Garamond'] text-5xl font-light leading-[1.02] text-[#F5F0E8] sm:text-6xl lg:text-8xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Designing Timeless Spaces That Endure
              </motion.h1>

              <motion.p
                className="mt-8 max-w-2xl text-base font-light leading-8 text-[#E5E0D8] sm:text-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Thoughtful architecture and interior-exterior design services for homes, commercial spaces, and meaningful places built for generations.
              </motion.p>

              <motion.div
                className="mt-11 flex flex-col gap-4 sm:flex-row"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <a href="#consultation" className="border border-[#D4AF37] bg-[#D4AF37] px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#091124] transition hover:bg-[#091124] hover:text-[#D4AF37]">
                  Start Your Project
                </a>
                <a href="#projects" className="border border-[#C9B39A]/60 px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#F5F0E8] transition hover:border-[#D4AF37] hover:text-[#D4AF37]">
                  View Our Work
                </a>
              </motion.div>
            </div>
          </div>

          <a href="#about" className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center text-[#D4AF37] md:flex" aria-label="Scroll to about">
            <span className="block text-[0.65rem] uppercase tracking-[0.32em]">Scroll</span>
            <ChevronDown className="mt-3 animate-bounce" size={16} />
          </a>
        </section>

        {/* About Us Section */}
        <AboutSection />

        {/* Mission & Vision Section */}
        <MissionVisionSection />

        {/* Core Values Section */}
        <CoreValuesSection />

        {/* Selected Projects Section */}
        <ProjectsSection projects={projects} />


        {/* Services Section */}
        <ServicesSection services={services} />

        {/* Design Process Section */}
        <DesignProcessSection />

        {/* Consultation Section */}
        <ConsultationSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="border-t border-[#D4AF37]/20 bg-[#0A162E] px-5 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <a href="#home" className="flex items-center">
            <img src={logoSrc} alt="JNArchitects Design Studio logo" className="h-16 w-auto object-contain" />
          </a>
          <p className="text-sm font-light text-[#B8A88A]">Copyright 2026 JNArchitects. All rights reserved.</p>
          <div className="flex gap-4 text-[#D4AF37]">
            <a href="#" aria-label="Instagram" className="transition hover:text-[#F5F0E8]">
              <Instagram size={18} />
            </a>
            <a href="https://www.facebook.com/jellanicole.andal/" target="_blank" rel="noreferrer" aria-label="Facebook" className="transition hover:text-[#F5F0E8]">
              <Facebook size={18} />
            </a>
            <a href="#" aria-label="LinkedIn" className="transition hover:text-[#F5F0E8]">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
