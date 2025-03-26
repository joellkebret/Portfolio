import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import Book from '../components/Book.jsx';
import CanvasLoader from '../components/CanvasLoader';
import { Leva } from 'leva';
import { useMediaQuery } from 'react-responsive';
import { calculateAllSizes } from '../constants/index.js';
import HeroCamera from '../components/HeroCamera.jsx';

// Import other 3D components (Cube, ReactLogo, Rings, etc.) as needed

const Hero = () => {
  // Media queries to detect screen sizes
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  // Calculate sizes for all components
  const sizes = calculateAllSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col items-center text-center sm:mt-36 mt-20 gap-3">
        <p className="sm:text-3xl text-3xl font-medium text-white font-generalsans hero_tag text-left">
          Hi, I am Joell <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Building Creative Software.</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Leva collapsed />
        <Canvas style={{ background: 'transparent' }} className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <Book
                scale={sizes.bookScale}
                position={sizes.bookPosition}
                rotation={[0.6, 0, 0]}
              />
          </HeroCamera>
            {/* Render Target using calculated sizes */}
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.7} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
