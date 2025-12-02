import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { MenuItem } from '../types';

const MenuSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'drinks' | 'bottles' | 'food'>('all');

  const filteredItems = filter === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === filter);

  return (
    <section id="cafeteria" className="py-20 relative bg-zinc-950">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-900/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 brand-font text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            LA CARTA
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Disfruta de nuestros tragos de autor, servicio de botellas premium y opciones para picar.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {(['all', 'drinks', 'bottles', 'food'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full uppercase text-sm tracking-widest border transition-all duration-300 ${
                filter === cat 
                  ? 'bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]' 
                  : 'bg-transparent text-gray-400 border-gray-700 hover:border-gray-500'
              }`}
            >
              {cat === 'all' ? 'Todo' : cat === 'drinks' ? 'Tragos' : cat === 'bottles' ? 'Botellas' : 'Comida'}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={index} 
              className="glass-panel p-4 rounded-2xl group hover:bg-white/10 transition-colors duration-300 flex flex-col"
            >
              <div className="relative h-48 mb-4 overflow-hidden rounded-xl">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold border border-white/10">
                  {item.price}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">{item.name}</h3>
              <p className="text-sm text-gray-400 mb-4 flex-grow">{item.description}</p>
              <button className="w-full py-2 border border-purple-500/50 text-purple-400 rounded-lg hover:bg-purple-600 hover:text-white transition-all text-sm uppercase tracking-wide">
                Pedir en Barra
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;