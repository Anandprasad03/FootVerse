import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (

    <div className="min-h-screen w-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">

      {/* --- Background Elements (Animated) --- */}
      {/* Blue Blob */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse-slow"></div>
      {/* Red Blob */}
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-red-600 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      {/* Purple Center Blob (New for depth) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900 rounded-full mix-blend-screen filter blur-[150px] opacity-10 -z-10"></div>

      {/* --- Main Content Container --- */}
      <div
        className={`z-10 max-w-3xl p-8 md:p-12 mx-4 rounded-3xl shadow-2xl border border-white/10 
                    bg-white/5 backdrop-blur-xl relative overflow-hidden
                    transition-all duration-1000 ease-out transform
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      >

        {/* Decorative top border gradient */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

        {/* --- Header --- */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight drop-shadow-sm">
          Beyond the Sole.
        </h1>

        {/* --- Text Content --- */}
        <div className="space-y-8 text-gray-300 leading-relaxed text-lg">

          {/* Section 1: Identity */}
          <div className="flex gap-4 items-start">
            {/* Simple Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            <p>
              <span className="text-white font-bold tracking-wide">FootVerse</span> isn't just a store; it's a curation of culture across dimensions. We believe that a sneaker is more than footwear—it's the foundation of your identity.
            </p>
          </div>

          {/* Section 2: The Bridge */}
          <div className="flex gap-4 items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
            <p>
              Whether you're chasing the retro aesthetic of the past or the aerodynamic lines of the future, we bridge the gap. From our signature <span className="text-red-400 font-semibold">Nebula Red</span> to the stealthy <span className="text-gray-400 font-semibold">Void Black</span>, every colorway tells a different story.
            </p>
          </div>

          {/* Section 3: The Tech Box */}
          <div className="mt-4 p-6 border-l-4 border-blue-500 bg-gradient-to-r from-blue-900/20 to-transparent rounded-r-xl backdrop-blur-sm">
            <h3 className="text-white font-bold text-xl mb-2 flex items-center gap-2">
              The Tech
            </h3>
            <p className="text-base text-gray-400 font-light">
              Engineered for gravity. High-response air cushioning meets adaptive knit textures. Built to handle the pavement, the court, and everywhere in between.
            </p>
          </div>
        </div>

        {/* --- Navigation Buttons --- */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4">

          {/* Start Shopping Button (Matches Landing Page style) */}
          <button
            onClick={() => navigate('/main')}
            className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold 
                       rounded-full group cursor-pointer text-black bg-white 
                       hover:bg-gray-200/40 hover:border-black transition-all duration-300"
          >
            <span className="absolute inset-0 w-full h-full"></span>
            <span className="relative z-10">Start Shopping</span>
          </button>

          {/* Back Home Button */}
          <button
            onClick={() => navigate('/')}
            className="px-8 py-3 border border-white/30 text-white font-bold rounded-full 
                       hover:bg-white/10 hover:border-white transition-all duration-300"
          >
            Back Home
          </button>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;