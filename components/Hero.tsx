
import React from 'react';

interface HeroProps {
  onWishClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onWishClick }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-white px-6 text-center overflow-hidden">
      {/* Cinematic Background Video Container */}
      <div className="absolute inset-0 w-full h-full z-0 bg-black">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-80 z-0"
          poster="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop"
        >
          {/* High-quality cinematic golden hour video */}
          <source src="https://cdn.pixabay.com/video/2021/08/18/85494-589531634_large.mp4" type="video/mp4" />
          <source src="https://cdn.pixabay.com/video/2020/09/20/50343-461320473_large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Warm color overlay to match the golden sun flare in the frames */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40 z-1"></div>
        <div className="absolute inset-0 bg-orange-900/10 mix-blend-overlay z-1"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 py-20">
        <div className="w-full">
          <h1 className="text-6xl md:text-8xl lg:text-9xl mb-8 leading-tight animate-fade-in drop-shadow-2xl font-black tracking-tighter">
            Happy Valentine's Day, Abby.
          </h1>
          <p className="text-2xl md:text-3xl mb-12 opacity-95 font-medium max-w-2xl mx-auto drop-shadow-lg leading-relaxed">
            To the most beautiful person I know. You make every day feel like a golden dream.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={onWishClick}
              className="bg-[#ff4c68] text-white px-12 py-5 rounded-full flex items-center justify-center gap-3 hover:bg-[#ef8172] transition-all hover:scale-105 shadow-2xl text-2xl font-black"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              Be My Valentine
            </button>
            <button 
              onClick={() => {
                document.getElementById('planner')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="backdrop-blur-xl bg-white/20 border-2 border-white/50 text-white px-12 py-5 rounded-full flex items-center justify-center gap-3 hover:bg-white hover:text-[#ff4c68] transition-all hover:scale-105 text-2xl font-black shadow-2xl"
            >
              Plan a Date
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative floating heart icons with better visibility */}
      <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-16 text-6xl opacity-90 z-10 drop-shadow-lg">
        <span className="animate-bounce" style={{ animationDelay: '0s' }}>💖</span>
        <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>✨</span>
        <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>🌹</span>
      </div>
    </section>
  );
};

export default Hero;
