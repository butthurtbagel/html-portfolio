
import React, { useState } from 'react';
import { planDateWithMaps } from '../services/geminiService';

const DateIdeaPlanner: React.FC = () => {
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ text: string; links: { title: string; url: string }[] } | null>(null);

  const handlePlanDate = async () => {
    setLoading(true);
    try {
      let lat, lng;
      if (!city) {
        // Try to get current location if city isn't provided
        const pos = await new Promise<GeolocationPosition>((res, rej) => 
          navigator.geolocation.getCurrentPosition(res, rej)
        ).catch(() => null);
        
        if (pos) {
          lat = pos.coords.latitude;
          lng = pos.coords.longitude;
        }
      }
      
      const data = await planDateWithMaps(city || 'Nearby', lat, lng);
      setResult(data);
    } catch (err) {
      console.error(err);
      setResult({ text: "I couldn't find specific spots right now, but anywhere with you is my favorite place.", links: [] });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gray-50 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl text-[#ff4c68] mb-4">Plan Our Next Adventure</h2>
          <p className="text-gray-600 text-lg">Where should we go next, Abby?</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter a city (or leave blank for nearby)"
            className="flex-grow p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#ff4c68] outline-none"
          />
          <button
            onClick={handlePlanDate}
            disabled={loading}
            className="bg-[#ff4c68] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#ef8172] transition-colors whitespace-nowrap disabled:bg-gray-400"
          >
            {loading ? 'Finding Gems...' : 'Surprise Me'}
          </button>
        </div>

        {result && (
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
            <div className="prose prose-pink max-w-none text-gray-700 mb-8 whitespace-pre-wrap">
              {result.text}
            </div>
            
            {result.links.length > 0 && (
              <div className="border-t pt-6">
                <h3 className="font-bold text-gray-800 mb-4">View on Maps:</h3>
                <div className="flex flex-wrap gap-3">
                  {result.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-pink-50 text-[#ff4c68] px-4 py-2 rounded-full text-sm font-semibold hover:bg-pink-100 transition-colors"
                    >
                      📍 {link.title}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default DateIdeaPlanner;
