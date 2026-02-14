
import React, { useState } from 'react';
import Hero from './components/Hero';
import DateIdeaPlanner from './components/DateIdeaPlanner';
import FloatingHearts from './components/FloatingHearts';
import LoveLetterGenerator from './components/LoveLetterGenerator';

const App: React.FC = () => {
  const [isWishing, setIsWishing] = useState(false);

  const handleWishClick = () => {
    setIsWishing(true);
    setTimeout(() => setIsWishing(false), 5000);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation - Minimalist Style */}
      <nav className="gradient-bg px-6 py-6 text-white shadow-md relative z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-3xl font-black lowercase tracking-tighter">
            forabby<span className="text-pink-200">.com</span>
          </div>
          <div className="text-2xl">❤️</div>
        </div>
      </nav>

      {/* Main Content */}
      <Hero onWishClick={handleWishClick} />

      <main>
        {/* Features Section - Modern Cards */}
        <section className="py-24 bg-white px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16 text-center">
            <div className="group">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#ff4c68] transition-colors group-hover:text-white text-[#ff4c68]">
                 <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              </div>
              <h3 className="text-2xl font-black mb-4">Elite Love</h3>
              <p className="text-gray-500">Only the best for Abby. Personalized attention and care 24/7.</p>
            </div>
            <div className="group">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#ff4c68] transition-colors group-hover:text-white text-[#ff4c68]">
                 <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-2xl font-black mb-4">Adventure Ready</h3>
              <p className="text-gray-500">From world tours to coffee runs, we make every moment count.</p>
            </div>
            <div className="group">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#ff4c68] transition-colors group-hover:text-white text-[#ff4c68]">
                 <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 7h-5v8h-2v-8H5V9h5V4h2v5h5v2z"/></svg>
              </div>
              <h3 className="text-2xl font-black mb-4">Infinite Growth</h3>
              <p className="text-gray-500">Learning and growing together, every single day.</p>
            </div>
          </div>
        </section>

        {/* Love Letter Generator Section */}
        <LoveLetterGenerator />

        {/* Date Planner Section */}
        <div id="planner">
          <DateIdeaPlanner />
        </div>

        {/* Closing Testimonial Section - TinDog Style */}
        <section className="gradient-bg py-24 px-6 text-white text-center overflow-hidden relative">
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-12 italic leading-tight">
              "I no longer have to look for happiness, because I found it in Abby. She is my world."
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <div className="relative group">
                <img 
                  src="https://images.unsplash.com/photo-1544168190-79c17527004f?q=80&w=400&h=550&auto=format&fit=crop&sat=-100&bri=-20&con=40" 
                  className="w-32 h-32 md:w-40 md:h-40 rounded-3xl border-4 border-white shadow-2xl object-cover object-center filter grayscale contrast-150 brightness-75 group-hover:scale-105 transition-transform" 
                  alt="Your Favorite Human"
                />
                <div className="absolute -bottom-3 -right-3 bg-white text-black p-2 rounded-full shadow-lg text-2xl">🎩</div>
              </div>
              <div className="text-center sm:text-left">
                <p className="font-black text-3xl tracking-tight uppercase">Your Favorite Human</p>
                <p className="opacity-90 font-bold text-lg">Full-time Boyfriend & Your #1 Fan</p>
              </div>
            </div>
          </div>
          {/* Background decoration */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-[20rem] opacity-5 -rotate-12 select-none pointer-events-none">
            ❤️
          </div>
        </section>

        {/* Logo Section */}
        <section className="bg-[#ef8172] py-12 px-6 flex flex-wrap justify-center items-center gap-12 md:gap-24">
            <span className="text-white text-2xl font-black opacity-60 grayscale hover:grayscale-0 transition-all cursor-default tracking-widest">DATES</span>
            <span className="text-white text-2xl font-black opacity-60 grayscale hover:grayscale-0 transition-all cursor-default tracking-widest">SMILES</span>
            <span className="text-white text-2xl font-black opacity-60 grayscale hover:grayscale-0 transition-all cursor-default tracking-widest">HUGS</span>
            <span className="text-white text-2xl font-black opacity-60 grayscale hover:grayscale-0 transition-all cursor-default tracking-widest">DREAMS</span>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-20 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center gap-6 mb-8 text-2xl">
            <span className="cursor-pointer hover:text-[#ff4c68] transition-colors">🐦</span>
            <span className="cursor-pointer hover:text-[#ff4c68] transition-colors">📸</span>
            <span className="cursor-pointer hover:text-[#ff4c68] transition-colors">✉️</span>
          </div>
          <p className="text-gray-400 font-bold mb-4 tracking-widest uppercase text-sm">© {new Date().getFullYear()} MADE WITH LOVE FOR ABBY</p>
          <div className="text-[#ff4c68] animate-pulse text-2xl font-black">I LOVE YOU</div>
        </div>
      </footer>

      {/* Overlay Effects */}
      <FloatingHearts active={isWishing} />
    </div>
  );
};

export default App;
