import React, { useEffect, useState } from 'react';
import { CLUB_DATA } from './constants';
import { Menu, X, ArrowDown, ExternalLink } from 'lucide-react';
import MenuSection from './components/MenuSection';
import ReservationForm from './components/ReservationForm';
import Footer from './components/Footer';
import Concierge from './components/Concierge';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500 selection:text-white overflow-x-hidden">
      
      {/* --- Navigation --- */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-widest brand-font">{CLUB_DATA.name}</span>
            <span className="text-[0.6rem] tracking-[0.3em] text-purple-400 uppercase">{CLUB_DATA.tagline}</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-bold">
            <a href="#home" className="hover:text-purple-400 transition-colors">Inicio</a>
            <a href="#cafeteria" className="hover:text-purple-400 transition-colors">Carta</a>
            <a href="#reservas" className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-all">
              Reservar
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-zinc-900 border-b border-white/10 p-6 flex flex-col gap-4 md:hidden animate-in slide-in-from-top-5">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold">Inicio</a>
            <a href="#cafeteria" onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold">Carta</a>
            <a href="#reservas" onClick={() => setMobileMenuOpen(false)} className="text-purple-400 text-xl font-bold">Reservar Ahora</a>
          </div>
        )}
      </nav>

      {/* --- Hero Section --- */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image/Video Placeholder */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=2544&auto=format&fit=crop" 
            alt="Club Crowd" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
            <div className="mb-4 inline-block px-4 py-1 border border-purple-500/50 rounded-full bg-purple-900/30 backdrop-blur-sm">
                <span className="text-xs uppercase tracking-[0.2em] text-purple-300 animate-pulse">● Open Now</span>
            </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 brand-font leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">FEEL THE</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-gradient-x">ENERGY</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            La mejor experiencia nocturna de {CLUB_DATA.locationText}. Música, amigos y momentos que no vas a olvidar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#reservas" 
              className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)] w-full sm:w-auto text-center"
            >
              Reservar Mesa
            </a>
            <a 
              href={CLUB_DATA.instagramLink} 
              target="_blank" 
              rel="noreferrer"
              className="px-8 py-4 border border-white/30 bg-white/5 backdrop-blur-sm text-white font-bold uppercase tracking-widest rounded-full hover:bg-white/10 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Ver Instagram <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500">
          <ArrowDown />
        </div>
      </section>

      {/* --- Menu / Cafeteria Section --- */}
      <MenuSection />

      {/* --- Reservation Section --- */}
      <ReservationForm />

      {/* --- Footer --- */}
      <Footer />

      {/* --- Sticky Socials (WhatsApp) --- */}
      <a 
        href={CLUB_DATA.whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 transition-transform duration-300 group"
      >
        <img 
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
            alt="WhatsApp" 
            className="w-8 h-8 filter brightness-0 invert group-hover:rotate-12 transition-transform"
        />
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-white text-black px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            ¡Escríbenos!
        </span>
      </a>

      {/* --- AI Concierge --- */}
      <Concierge />

    </div>
  );
}

export default App;