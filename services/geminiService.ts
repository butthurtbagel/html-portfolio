
import { GoogleGenAI } from "@google/genai";

// Fix: Export generatePoemForAbby as it's required by LoveLetterGenerator.tsx
// Using gemini-3-flash-preview for creative text generation tasks
export const generatePoemForAbby = async (memories: string, tone: 'romantic' | 'funny' | 'poetic') => {
  // Always initialize with named parameter and direct access to process.env.API_KEY
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Write a ${tone} poem for Abby based on these memories: ${memories}.`,
    config: {
      systemInstruction: "You are a professional romantic poet. Create a heartfelt, beautiful poem for Abby. Focus on making it personal based on the provided memories.",
    }
  });

  return response.text;
};

// Fix: Update planDateWithMaps to use gemini-2.5-flash which supports Google Maps grounding
export const planDateWithMaps = async (city: string, lat?: number, lng?: number) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const locationContext = (lat !== undefined && lng !== undefined) ? `at coordinates ${lat}, ${lng}` : `in ${city}`;
  
  const prompt = `Suggest 3 highly-rated romantic date spots ${locationContext}. 
  Provide a short description of why each is special for a Valentine's date. 
  Include specific places and use Google Maps to find the latest information.`;

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
    config: {
      tools: [{ googleMaps: {} }],
      toolConfig: {
        retrievalConfig: {
          latLng: (lat !== undefined && lng !== undefined) ? { latitude: lat, longitude: lng } : undefined
        }
      }
    }
  });

  const text = response.text || "";
  const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
  
  // Extracting Maps URLs from grounding chunks as required for grounding tools
  return {
    text,
    links: chunks.filter(c => c.maps).map(c => ({
      title: c.maps?.title || 'Map Link',
      url: c.maps?.uri || '#'
    }))
  };
};
