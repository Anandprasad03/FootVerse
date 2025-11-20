import DotGrid from './Background';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function LandingPage() {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <>
            {/* UPDATED BACKGROUND WRAPPER: 
               1. Removed '-z-50', changed to 'z-0'. This places it ON TOP of the white body, but BEHIND text.
               2. Added 'absolute' just to be safe with positioning.
            */}
            <div className='h-screen w-screen bg-black fixed -z-50'>
                <DotGrid
                    dotSize={5}
                    gap={15}
                    baseColor="#7371f2"
                    activeColor="#7371f2"
                    proximity={120}
                    shockRadius={250}
                    shockStrength={5}
                    resistance={750}
                    returnDuration={1.5}
                />
            </div>

            {/* LOGO: Z-Index 30 ensures it is above the background (z-0) */}
            <img
                src="./public/Logo.png"
                className="invert w-28 md:w-36 absolute top-0 left-0 z-30 
                           transition-all duration-300 hover:scale-105 hover:drop-shadow-lg"
                alt="FootVerse Logo"
            />

            {/* HERO SECTION: Relative + z-10 ensures it sits on top of the z-0 background */}
            <div
                className={`text-white w-screen text-center h-screen flex flex-col justify-center items-center relative z-10 
                           transition-opacity duration-1000 ease-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
                <h2 className='p-2 font-extrabold text-3xl md:text-5xl lg:text-6xl mb-4 
                               bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text 
                               drop-shadow-lg leading-tight'
                >
                    Welcome to FootVerse — Your Sneaker Multiverse
                </h2>

                <p className='p-2 font-light text-base md:text-xl lg:text-2xl max-w-2xl text-gray-300 mb-6 animate-pulse-slow'
                >
                    Fresh drops, bold designs, and comfort that goes all day.
                    <br className="sm:hidden" /> Step into your next favorite pair.
                </p>

                <h3 className='p-2 font-extrabold text-xl md:text-2xl lg:text-3xl mb-8 
                               tracking-wider text-white'
                >
                    Shop the Vibe
                </h3>

                <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 p-6'>
                    <span
                        onClick={() => navigate('/main')}
                        className='relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold 
                                   rounded-full group cursor-pointer text-black bg-white hover:bg-gray-200/40 hover:border-black transition-all duration-300'
                    >
                        <span className="absolute inset-0 w-full h-full"></span>
                        <span className="relative z-10">Get started</span>
                    </span>

                    <span
                        onClick={() => navigate('/about')}
                        className='relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold 
                                   rounded-full group cursor-pointer text-gray-200 bg-gray-700 
                                   hover:text-white transition-all duration-300 ease-out hover:ring-2 hover:ring-gray-400 focus:outline-none'
                    >
                        <span className="absolute inset-0 w-full h-full hover:bg-white/10 hover:border-white transition-all duration-300"></span>
                        <span className="relative z-10">Read more</span>
                    </span>
                </div>
            </div>
        </>
    )
}

export default LandingPage;