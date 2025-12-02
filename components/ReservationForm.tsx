import React, { useState } from 'react';
import { Calendar, Users, Music, CheckCircle } from 'lucide-react';
import { CLUB_DATA } from '../constants';

const ReservationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    guests: '2',
    area: 'General'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend.
    // For this template, we simulate success and could redirect to WhatsApp pre-filled.
    setSubmitted(true);
    
    // Optional: Auto-open WhatsApp with the details
    const message = `Hola ${CLUB_DATA.name}, quiero reservar:%0A- Nombre: ${formData.name}%0A- Fecha: ${formData.date}%0A- Personas: ${formData.guests}%0A- Zona: ${formData.area}`;
    setTimeout(() => {
        window.open(`${CLUB_DATA.whatsappLink}&text=${message}`, '_blank');
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (submitted) {
    return (
      <div className="h-96 flex flex-col items-center justify-center text-center p-8 glass-panel rounded-3xl mx-4">
        <CheckCircle className="w-20 h-20 text-green-500 mb-4" />
        <h3 className="text-3xl font-bold mb-2">¡Solicitud Enviada!</h3>
        <p className="text-gray-300">Te estamos redirigiendo a WhatsApp para confirmar tu mesa.</p>
      </div>
    );
  }

  return (
    <div id="reservas" className="max-w-4xl mx-auto px-4 py-20">
      <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/20 blur-[60px]"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/20 blur-[60px]"></div>

        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4 brand-font uppercase">Reserva tu <span className="text-purple-500">Noche</span></h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Asegura tu lugar en la fiesta más exclusiva de Asunción. Las reservas de mesas VIP incluyen servicio prioritario y acceso sin fila.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Music size={18} />
                </div>
                <span>Mesas VIP & Boxes</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Calendar size={18} />
                </div>
                <span>Cumpleaños & Eventos</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Tu Nombre</label>
              <input 
                required
                name="name"
                type="text" 
                value={formData.name}
                onChange={handleChange}
                placeholder="Ej. Juan Pérez"
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all text-white"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Fecha</label>
                <input 
                  required
                  name="date"
                  type="date" 
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none transition-all text-white [color-scheme:dark]"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Personas</label>
                <div className="relative">
                    <Users className="absolute left-3 top-3.5 text-gray-500" size={16}/>
                    <select 
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full bg-black/40 border border-white/10 rounded-lg pl-10 pr-4 py-3 focus:border-purple-500 focus:outline-none appearance-none text-white"
                    >
                        <option value="2">2 Personas</option>
                        <option value="4">4 Personas</option>
                        <option value="6">6 Personas</option>
                        <option value="8+">8+ (Grupo Grande)</option>
                    </select>
                </div>
              </div>
            </div>

            <div>
               <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Zona Preferida</label>
               <select 
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none appearance-none text-white"
                >
                    <option value="General">Pista General</option>
                    <option value="VIP">Sector VIP</option>
                    <option value="Terraza">Terraza (Fumadores)</option>
                </select>
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 rounded-lg hover:opacity-90 transition-opacity uppercase tracking-wider mt-4 shadow-lg shadow-purple-900/40">
              Solicitar Reserva
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReservationForm;