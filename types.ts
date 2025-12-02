export interface MenuItem {
  name: string;
  description: string;
  price: string;
  category: 'drinks' | 'bottles' | 'food';
  image?: string;
}

export interface ClubConfig {
  name: string;
  tagline: string;
  phone: string;
  whatsappLink: string;
  instagramLink: string;
  mapsLink: string;
  locationText: string;
  logoUrl?: string; // Optional URL if they have a PNG
  themeColors: {
    primary: string;
    accent: string;
  };
}