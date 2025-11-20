import React, { useState } from 'react';
import Particles from './Background2'; 
import { ChevronLeft, ChevronRight, ArrowDown, Activity, Wind, Layers, Zap } from 'lucide-react'; 
import { motion, AnimatePresence } from 'framer-motion'; // IMPORT FRAMER MOTION

// --- DATA CONFIGURATION ---
const shoesData = [
  {
    id: 0,
    model: "AIR MAX",
    name: "Nebula Red",
    desc: "Step into the void. Engineered for zero-gravity comfort and urban velocity. The Nebula Red captures the energy of a dying star.",
    price: "$129.00",
    image: "./public/Red-Shoe.png", 
    themeGradient: "from-red-500 to-orange-600",
    buttonColor: "bg-red-600 hover:bg-red-700",
    glowColor: "bg-red-600",
    particleColors: ['#ef4444', '#fb923c'],
    properties: { cushion: "Max Air", weight: "12.5oz", material: "Mesh/Leather", highlight: "High Traction" }
  },
  {
    id: 1,
    model: "AIR MAX",
    name: "Deep Ocean",
    desc: "Dive deep. The Ocean Blue colorway brings fluidity and calm to the chaos of the streets with water-resistant layering.",
    price: "$145.00",
    image: "./public/DarkBlue-Shoe.png",
    themeGradient: "from-blue-500 to-cyan-400",
    buttonColor: "bg-blue-600 hover:bg-blue-700",
    glowColor: "bg-blue-600",
    particleColors: ['#3b82f6', '#22d3ee'],
    properties: { cushion: "Encapsulated", weight: "14.0oz", material: "Gore-Tex", highlight: "Waterproof" }
  },
  {
    id: 2,
    model: "AIR MAX",
    name: "Toxic Green",
    desc: "Radioactive style. Stand out with neon accents and a glow-in-the-dark sole designed for the night walkers.",
    price: "$110.00",
    image: "./public/DarkGreen-Shoe.png",
    themeGradient: "from-green-500 to-lime-400",
    buttonColor: "bg-green-600 hover:bg-green-700",
    glowColor: "bg-green-600",
    particleColors: ['#22c55e', '#a3e635'],
    properties: { cushion: "Foam Midsole", weight: "11.8oz", material: "Syn-Suede", highlight: "Night Glow" }
  },
  {
    id: 3,
    model: "AIR MAX",
    name: "Electric Purple",
    desc: "Shock the system. Built for agility and speed, the Electric Purple features responsive cushioning for explosive movement.",
    price: "$135.00",
    image: "./public/Purple-Shoe.png",
    themeGradient: "from-purple-600 to-pink-500",
    buttonColor: "bg-purple-600 hover:bg-purple-700",
    glowColor: "bg-purple-600",
    particleColors: ['#9333ea', '#ec4899'],
    properties: { cushion: "Zoom Air", weight: "10.5oz", material: "Flyknit", highlight: "Responsive" }
  },
  {
    id: 4,
    model: "AIR MAX",
    name: "Lunar Gray",
    desc: "Understated elegance meets urban utility. The Lunar Gray offers versatile style with a sleek, minimalist design and superior comfort.",
    price: "$125.00",
    image: "./public/Gray-Shoe.png", 
    themeGradient: "from-gray-500 to-slate-400",
    buttonColor: "bg-gray-600 hover:bg-gray-700",
    glowColor: "bg-gray-500",
    particleColors: ['#6b7280', '#94a3b8'],
    properties: { cushion: "Responsive", weight: "12.8oz", material: "Suede/Textile", highlight: "Versatile" }
  }
];

// --- ANIMATION VARIANTS ---
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    rotate: direction > 0 ? 45 : -45,
    scale: 0.5,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    rotate: -20, // The resting angle
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    }
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    rotate: direction < 0 ? 45 : -45,
    scale: 0.5,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    }
  })
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.3 } 
  }
};

const MainPage = () => {
  // We keep track of [currentIndex, direction] to know which way to slide
  const [[page, direction], setPage] = useState([0, 0]);

  // Helper to handle the wrapping index logic
  const shoeIndex = ((page % shoesData.length) + shoesData.length) % shoesData.length;
  const currentShoe = shoesData[shoeIndex];

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  // Jump to specific index (calculated to find shortest direction)
  const jumpTo = (index) => {
    if (index === shoeIndex) return;
    const newDirection = index > shoeIndex ? 1 : -1;
    setPage([page + (index - shoeIndex), newDirection]);
  };

  return (
    <div className="bg-neutral-950 min-h-screen overflow-x-hidden text-white selection:bg-white/20 font-sans">

      {/* ===========================
          SECTION 1: HERO SLIDER 
      ============================ */}
      <div className="relative w-screen h-screen flex flex-col overflow-hidden">

        {/* --- Dynamic Background Particles --- */}
        <div className='absolute inset-0 w-full h-full -z-50 transition-colors duration-700'>
          {/* We don't animate the particles unmount to keep BG stable */}
          <Particles
            key={currentShoe.id} 
            particleColors={currentShoe.particleColors}
            particleCount={120}
            particleSpread={10}
            speed={0.3}
            particleBaseSize={180}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        {/* --- GIANT BACKGROUND TEXT --- */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none select-none">
           <AnimatePresence mode='wait'>
              <motion.h1 
                  key={currentShoe.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.05, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="text-[15vw] md:text-[18vw] font-black text-transparent leading-none"
                  style={{ WebkitTextStroke: '2px rgba(255,255,255,0.3)' }}
              >
                  {currentShoe.model}
              </motion.h1>
           </AnimatePresence>
        </div>

        {/* --- Navigation Buttons --- */}
        <button onClick={() => paginate(-1)} className="hidden md:block absolute left-8 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-white/5 backdrop-blur-md hover:bg-white/10 border border-white/10 transition-all duration-300 hover:scale-110 active:scale-95 group">
          <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform text-gray-300 group-hover:text-white" />
        </button>

        <button onClick={() => paginate(1)} className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-white/5 backdrop-blur-md hover:bg-white/10 border border-white/10 transition-all duration-300 hover:scale-110 active:scale-95 group">
          <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform text-gray-300 group-hover:text-white" />
        </button>

        {/* --- Main Content --- */}
        <div className="flex-1 flex flex-col md:flex-row items-center justify-center relative z-10 container mx-auto px-4 md:px-12 h-full">

          {/* Left Side: Text Info */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start pl-4 md:pl-12 h-[40vh] md:h-auto">
            <AnimatePresence mode='wait'>
              <motion.div 
                key={currentShoe.id}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={textVariants}
                className="flex flex-col items-start"
              >
                <div className="flex items-center gap-3 mb-4 overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: 48 }} transition={{ delay: 0.2, duration: 0.5 }} className={`h-[2px] bg-gradient-to-r ${currentShoe.themeGradient}`}></motion.div>
                    <span className={`font-bold tracking-[0.2em] uppercase text-sm bg-clip-text text-transparent bg-gradient-to-r ${currentShoe.themeGradient}`}>
                    Signature Series
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9]">
                  {currentShoe.model} <br />
                  <span className={`text-transparent bg-clip-text bg-gradient-to-r ${currentShoe.themeGradient}`}>
                    {currentShoe.name}
                  </span>
                </h1>

                <motion.p 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                  className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg border-l-2 border-white/10 pl-6"
                >
                  {currentShoe.desc}
                </motion.p>

                <div className="flex flex-wrap items-center gap-6 md:gap-8">
                  <motion.span initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4 }} className="text-4xl font-bold text-white tracking-tight">{currentShoe.price}</motion.span>

                  <motion.button 
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-white rounded-full group ${currentShoe.buttonColor} shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]`}
                  >
                    <span className="relative flex items-center gap-3">
                      Add to Cart
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                    </span>
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Image Area */}
          <div className="w-full md:w-1/2 h-[50vh] md:h-full flex items-center justify-center relative perspective-1000">
            
            {/* Dynamic Glowing Orb (Simple Fade) */}
            <div className={`absolute w-[250px] h-[250px] md:w-[550px] md:h-[550px] rounded-full blur-[120px] opacity-40 animate-pulse transition-colors duration-1000 ${currentShoe.glowColor}`}></div>

            {/* Shoe Image with SLIDE Animation */}
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    key={currentShoe.id}
                    src={currentShoe.image}
                    alt={currentShoe.name}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    drag
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} // Elastic Drag
                    className="absolute w-[90%] md:w-[110%] max-w-[750px] object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)] cursor-grab active:cursor-grabbing z-20"
                />
            </AnimatePresence>
          </div>
          
          {/* --- THUMBNAIL NAV STRIP --- */}
          <div className="absolute bottom-10 right-4 md:right-12 z-20 flex gap-4 bg-black/20 backdrop-blur-lg p-2 rounded-2xl border border-white/5">
            {shoesData.map((shoe, index) => (
                <div 
                    key={shoe.id}
                    onClick={() => jumpTo(index)}
                    className={`w-16 h-16 rounded-xl cursor-pointer flex items-center justify-center transition-all duration-300 border ${index === shoeIndex ? `border-white bg-white/10 scale-110 shadow-lg` : 'border-transparent opacity-50 hover:opacity-100 hover:bg-white/5'}`}
                >
                    <img src={shoe.image} alt={shoe.name} className="w-14 h-14 object-contain -rotate-[15deg]" />
                </div>
            ))}
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-8 hidden md:flex items-center gap-2 text-gray-500 text-xs font-mono tracking-widest opacity-60">
          SCROLL DOWN
          <ArrowDown size={14} className="animate-bounce"/>
        </div>
      </div>

      {/* ===========================
          SECTION 2: PROPERTIES 
      ============================ */}
      <div className="min-h-[60vh] w-screen bg-neutral-950 relative z-20 border-t border-white/5 flex items-center justify-center py-24">
        {/* Decorative BG Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
            <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white">Technical Specs</h2>
                <p className="text-gray-400 font-mono uppercase tracking-widest text-sm">Model: {currentShoe.model} - {currentShoe.name}</p>
            </div>
            <div className="hidden md:block text-right">
                <div className="text-sm text-gray-500">Release Year</div>
                <div className="text-xl font-bold text-white">2024</div>
            </div>
          </div>

          {/* Animate Key changes in specs */}
          <AnimatePresence mode='wait'>
            <motion.div 
                key={currentShoe.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {[
                    { icon: Layers, label: "Cushioning", value: currentShoe.properties.cushion, sub: "Impact System" },
                    { icon: Wind, label: "Weight", value: currentShoe.properties.weight, sub: "Per Unit" },
                    { icon: Activity, label: "Material", value: currentShoe.properties.material, sub: "Composite" },
                    { icon: Zap, label: "Highlight", value: currentShoe.properties.highlight, sub: "Key Feature" },
                ].map((spec, idx) => (
                    <div key={idx} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1">
                        <div className={`w-10 h-10 rounded-lg mb-6 flex items-center justify-center bg-gradient-to-br ${currentShoe.themeGradient} shadow-lg`}>
                            <spec.icon className="text-white w-5 h-5" />
                        </div>
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">{spec.label}</h3>
                        <p className="text-2xl font-bold text-white mb-2">{spec.value}</p>
                        <div className="w-full h-[1px] bg-white/10 my-3 group-hover:bg-white/30 transition-colors"></div>
                        <p className="text-xs text-gray-500 font-mono">{spec.sub}</p>
                    </div>
                ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default MainPage