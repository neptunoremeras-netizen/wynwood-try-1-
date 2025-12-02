import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { generateClubResponse } from '../services/geminiService';
import { VIBE_PROMPTS } from '../constants';

const Concierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: '¡Hola! Soy tu asistente de fiesta. ¿En qué te puedo ayudar para tu noche en Wynwood?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (text: string = input) => {
    if (!text.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { role: 'user', text }]);
    setInput('');
    setIsLoading(true);

    // Call Gemini
    const aiResponse = await generateClubResponse(text);
    
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Floating Trigger Button (Left side, distinct from Whatsapp) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 group flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-full shadow-lg shadow-purple-500/30 hover:scale-110 transition-transform duration-300"
      >
        {isOpen ? <X className="text-white" /> : <Sparkles className="text-white animate-pulse" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 z-50 w-80 md:w-96 glass-panel rounded-2xl shadow-2xl flex flex-col overflow-hidden border-t border-l border-purple-500/30 animate-in slide-in-from-bottom-10 fade-in duration-300">
          
          {/* Header */}
          <div className="p-4 bg-purple-900/50 flex justify-between items-center border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-bold text-sm tracking-wider">WYNWOOD AI</span>
            </div>
            <span className="text-xs text-purple-200">En línea</span>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 p-4 h-80 overflow-y-auto space-y-4 bg-black/40">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-purple-600 text-white rounded-br-none' 
                    : 'bg-zinc-800 text-gray-200 rounded-bl-none border border-white/10'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 p-3 rounded-2xl rounded-bl-none border border-white/10 flex gap-1">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Prompts */}
          <div className="px-4 pb-2 flex gap-2 overflow-x-auto no-scrollbar">
            {VIBE_PROMPTS.map((prompt, i) => (
              <button 
                key={i}
                onClick={() => handleSend(prompt)}
                className="whitespace-nowrap px-3 py-1 text-xs bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 bg-zinc-900/80 border-t border-white/10 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Pregunta algo..."
              className="flex-1 bg-black/50 border border-white/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-purple-500 transition-colors"
            />
            <button 
              onClick={() => handleSend()}
              className="p-2 bg-purple-600 rounded-full hover:bg-purple-500 transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Concierge;