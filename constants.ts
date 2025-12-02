import { ClubConfig, MenuItem } from './types';
import { Instagram, MapPin, Phone } from 'lucide-react';

// ==========================================
// CONFIGURACIÓN DEL CLUB (FÁCIL DE EDITAR)
// ==========================================

export const CLUB_DATA: ClubConfig = {
  name: "WYNWOOD",
  tagline: "ASUNCIÓN",
  phone: "0974 973994",
  whatsappLink: "https://wa.me/595974973994",
  instagramLink: "https://www.instagram.com/wynwood.asuncion/?hl=es",
  // Using the Google Share link provided, but formatted for a button
  mapsLink: "https://maps.app.goo.gl/yK6TqKauzmVe0OBns", 
  locationText: "Asunción, Paraguay",
  themeColors: {
    primary: "purple", // Tailwind color name basis
    accent: "pink",
  }
};

export const MENU_ITEMS: MenuItem[] = [
  {
    name: "Wynwood Signature",
    description: "Gin, Frutos Rojos, Infusión de Hibiscus, Tónica.",
    price: "Gs. 45.000",
    category: "drinks",
    image: "https://picsum.photos/400/400?random=1"
  },
  {
    name: "Blue Electric",
    description: "Vodka, Blue Curaçao, Limón, Sprite.",
    price: "Gs. 40.000",
    category: "drinks",
    image: "https://picsum.photos/400/400?random=2"
  },
  {
    name: "Black Label 12 Años",
    description: "Servicio de botella con 4 energizantes o gaseosas.",
    price: "Gs. 650.000",
    category: "bottles",
    image: "https://picsum.photos/400/400?random=3"
  },
  {
    name: "Champagne Show",
    description: "Moët & Chandon con bengalas para tu mesa.",
    price: "Gs. 900.000",
    category: "bottles",
    image: "https://picsum.photos/400/400?random=4"
  },
  {
    name: "Picada Wynwood",
    description: "Bastones de muzzarella, papas rústicas, salsas de la casa.",
    price: "Gs. 80.000",
    category: "food",
    image: "https://picsum.photos/400/400?random=5"
  }
];

export const VIBE_PROMPTS = [
  "¿Cuál es el dress code hoy?",
  "Recomiéndame un trago fuerte",
  "¿Hay mesas disponibles?",
  "¿Qué música están tocando?"
];