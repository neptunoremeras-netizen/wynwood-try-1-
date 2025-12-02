import { GoogleGenAI } from "@google/genai";
import { CLUB_DATA } from "../constants";

let ai: GoogleGenAI | null = null;

if (process.env.API_KEY) {
  ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
}

export const generateClubResponse = async (userMessage: string): Promise<string> => {
  if (!ai) {
    return "Lo siento, nuestro sistema de concierge está durmiendo (Falta API Key). Pero escríbenos al WhatsApp!";
  }

  try {
    const model = "gemini-2.5-flash";
    const systemInstruction = `
      Eres el "Concierge Digital" y promotor de ${CLUB_DATA.name} en ${CLUB_DATA.locationText}.
      Tu trabajo es vender la experiencia de la fiesta.
      
      Reglas:
      1. Respuestas cortas, con "hype" y emojis de fiesta.
      2. Habla siempre en Español (estilo paraguayo/latino cool).
      3. Si preguntan por reservas, diles que usen el formulario de abajo o el botón de WhatsApp.
      4. Si preguntan por música, di que hoy tenemos los mejores DJs con Reggaeton, Cachengue y Electronica.
      5. Si preguntan por Dress Code: "Elegante Sport, vení fachero/a".
      
      Contexto actual: El usuario está en la landing page.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: userMessage,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.8, // Creative and fun
        maxOutputTokens: 100,
      }
    });

    return response.text || "¡Hoy se rompe la noche! Escríbenos al WhatsApp para más info.";
  } catch (error) {
    console.error("Error generating response:", error);
    return "La música está muy alta, no te escuché bien. ¡Prueba de nuevo!";
  }
};