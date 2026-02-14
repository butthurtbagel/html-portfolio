
import React, { useState } from 'react';
import { generatePoemForAbby } from '../services/geminiService';

const LoveLetterGenerator: React.FC = () => {
  const [memories, setMemories] = useState('');
  const [tone, setTone] = useState<'romantic' | 'funny' | 'poetic'>('romantic');
  const [poem, setPoem] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!memories.trim()) return;
    setLoading(true);
    try {
      const result = await generatePoemForAbby(memories, tone);
      setPoem(result || "Failed to find the right words, but you know I love you!");
    } catch (err) {
      console.error(err);
      setPoem("My heart is full of words, but my AI is shy right now. You're amazing, Abby!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="poem-section" className="py-20 bg-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl text-[#ff4c68] mb-6">Create Our Love Story</h2>
        <p className="text-gray-600 mb-12 text-lg">
          Abby, type in some of our favorite memories below and I'll write you a custom poem using magic.
        </p>
        
        <div className="bg-gray-50 p-8 rounded-3xl border-2 border-dashed border-[#ef8172]">
          <div className="mb-6">
            <label className="block text-left font-bold mb-2 text-gray-700">What memories should I include?</label>
            <textarea
              value={memories}
              onChange={(e) => setMemories(e.target.value)}
              placeholder="e.g., Our first date at our spot, the car trip, the way you laugh at my bad jokes..."
              className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#ff4c68] focus:border-transparent outline-none h-32 resize-none"
            />
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            {(['romantic', 'funny', 'poetic'] as const).map(t => (
              <button
                key={t}
                onClick={() => setTone(t)}
                className={`px-6 py-2 rounded-full capitalize transition-all ${
                  tone === t ? 'bg-[#ff4c68] text-white shadow-lg' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading || !memories}
            className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
              loading ? 'bg-gray-300' : 'bg-[#ef8172] text-white hover:bg-[#ff4c68] shadow-lg hover:scale-[1.02]'
            }`}
          >
            {loading ? 'Thinking of the perfect words...' : 'Write Me a Poem'}
          </button>
        </div>

        {poem && (
          <div className="mt-12 p-10 bg-white shadow-2xl rounded-3xl border border-pink-100 relative overflow-hidden animate-fade-in">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-50 rounded-bl-full -z-10 opacity-50"></div>
            <div className="whitespace-pre-wrap text-left text-gray-800 leading-relaxed font-serif text-lg md:text-xl italic">
              {poem}
            </div>
            <div className="mt-8 text-right font-bold text-[#ff4c68]">
              — Forever Yours
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LoveLetterGenerator;
