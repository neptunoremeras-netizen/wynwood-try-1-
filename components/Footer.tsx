import React from 'react';
import { Instagram, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { CLUB_DATA } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-24 relative overflow-hidden">
        {/* Background Text Texture */}
        <div className="absolute top-0 left-0 w-full overflow-hidden opacity-5 pointer-events-none select-none">
            <h1 className="text-[150px] font-black text-white whitespace-nowrap animate-pulse">WYNWOOD WYNWOOD</h1>
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-3xl font-black tracking-tighter brand-font text-white">
              {CLUB_DATA.name} <span className="text-purple-500 text-lg align-top">{CLUB_DATA.tagline}</span>
            </h2>
            <p className="text-gray-500 text-sm max-w-xs">
              La experiencia nocturna definitiva. Música, ambiente y momentos inolvidables en el corazón de Asunción.
            </p>
            <div className="flex gap-4 pt-2">
                <a href={CLUB_DATA.instagramLink} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                    <Instagram size={20} />
                </a>
                <a href={CLUB_DATA.whatsappLink} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all">
                    <Phone size={20} />
                </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm uppercase tracking-widest text-gray-500 font-bold">Contacto & Ubicación</h3>
            <ul className="space-y-3">
                <li>
                    <a href={CLUB_DATA.mapsLink} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors group">
                        <MapPin size={18} className="text-purple-500 group-hover:scale-110 transition-transform"/>
                        <span>{CLUB_DATA.locationText}</span>
                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                </li>
                <li>
                    <a href={`tel:${CLUB_DATA.phone}`} className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors">
                        <Phone size={18} className="text-purple-500"/>
                        <span>{CLUB_DATA.phone}</span>
                    </a>
                </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm uppercase tracking-widest text-gray-500 font-bold">Explorar</h3>
            <ul className="space-y-2 text-gray-300">
                <li><a href="#home" className="hover:text-white transition-colors">Inicio</a></li>
                <li><a href="#cafeteria" className="hover:text-white transition-colors">Carta / Menú</a></li>
                <li><a href="#reservas" className="hover:text-white transition-colors">Reservas VIP</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
            <p>© {new Date().getFullYear()} {CLUB_DATA.name}. Todos los derechos reservados.</p>
            <p>Diseñado con pasión y mucha fiesta.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;