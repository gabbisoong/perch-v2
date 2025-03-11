import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AppStoreButtons } from "./AppStoreButtons";
import { FloatingCard } from "./FloatingCard";

export const Hero = () => {
  const { scrollYProgress } = useScroll({
    offset: ['start end', 'center center']
  });

  // Hero-1 through Hero-6 animations
  const hero1X = useTransform(scrollYProgress, 
    [0, 0.35],
    ['0%', '150%']
  );
  const hero1Y = useTransform(scrollYProgress,
    [0, 0.35],
    ['0%', '250%']
  );
  const hero1Opacity = useTransform(scrollYProgress,
    [0, 0.3, 0.35],
    [1, 1, 0]
  );

  const hero2X = useTransform(scrollYProgress, 
    [0, 0.35],
    ['0%', '-150%']
  );
  const hero2Y = useTransform(scrollYProgress,
    [0, 0.35],
    ['0%', '250%']
  );
  const hero2Opacity = useTransform(scrollYProgress,
    [0, 0.3, 0.35],
    [1, 1, 0]
  );

  const hero3X = useTransform(scrollYProgress, 
    [0, 0.35],
    ['0%', '150%']
  );
  const hero3Y = useTransform(scrollYProgress,
    [0, 0.35],
    ['0%', '250%']
  );
  const hero3Opacity = useTransform(scrollYProgress,
    [0, 0.3, 0.35],
    [1, 1, 0]
  );

  const hero4X = useTransform(scrollYProgress, 
    [0, 0.35],
    ['0%', '-150%']
  );
  const hero4Y = useTransform(scrollYProgress,
    [0, 0.35],
    ['0%', '250%']
  );
  const hero4Opacity = useTransform(scrollYProgress,
    [0, 0.3, 0.35],
    [1, 1, 0]
  );

  const hero5X = useTransform(scrollYProgress, 
    [0, 0.35],
    ['0%', '150%']
  );
  const hero5Y = useTransform(scrollYProgress,
    [0, 0.35],
    ['0%', '-250%']
  );
  const hero5Opacity = useTransform(scrollYProgress,
    [0, 0.3, 0.35],
    [1, 1, 0]
  );

  const hero6X = useTransform(scrollYProgress, 
    [0, 0.35],
    ['0%', '-150%']
  );
  const hero6Y = useTransform(scrollYProgress,
    [0, 0.35],
    ['0%', '-250%']
  );
  const hero6Opacity = useTransform(scrollYProgress,
    [0, 0.3, 0.35],
    [1, 1, 0]
  );

  // Other left cards move right and down faster
  const leftCardsX = useTransform(scrollYProgress, 
    [0, 0.3],
    ['0%', '100%']
  );
  
  // Right cards move left and down faster
  const rightCardsX = useTransform(scrollYProgress,
    [0, 0.3],
    ['0%', '-100%']
  );

  // All other cards move down faster
  const cardsY = useTransform(scrollYProgress,
    [0, 0.3],
    ['0%', '100%']
  );

  // Keep other cards visible until very end of movement
  const cardsOpacity = useTransform(scrollYProgress,
    [0, 0.25, 0.3],
    [1, 1, 0]
  );
  return (
    <section id="hero-section" className="mt-[61px] max-md:mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-[65px] font-semibold leading-none tracking-[-1.3px] max-md:text-[36px]">
            Meet Perch.
          </h1>
          <p className="text-[36px] font-normal leading-[43px] tracking-[-0.36px] mt-4 max-w-[450px]">
            The new home for all your blogs and newsletters.
          </p>
          <div className="mt-9">
            <AppStoreButtons />
          </div>
          <div className="mt-16 relative w-full max-w-[1200px]">
            <div className="relative w-full mb-[100px]">
              <div className="relative w-full max-w-[1000px] mx-auto">
                <img
                  src="/phone-hero.png"
                  alt="Perch app interface"
                  className="absolute w-[1000px] h-auto left-[calc(50%-10px)] -translate-x-1/2 top-[350px] -translate-y-1/2 relative z-20"
                />
              {/* Left side images */}
              <motion.img
                src="/hero-1.png"
                alt="Morning Brew article"
                className="absolute -top-[480px] -left-[580px] w-[380px] h-auto drop-shadow-xl"
                style={{ 
                  x: hero1X,
                  y: hero1Y,
                  opacity: hero1Opacity
                }}
              />
              <motion.img
                src="/hero-3.png"
                alt="Paul Graham essay"
                className="absolute -top-[280px] -left-[450px] w-[340px] h-auto drop-shadow-xl"
                style={{ 
                  x: hero3X,
                  y: hero3Y,
                  opacity: hero3Opacity
                }}
              />
              <motion.img
                src="/hero-5.png"
                alt="Money Stuff article"
                className="absolute top-[450px] -left-[300px] w-[300px] h-auto drop-shadow-xl"
                style={{ 
                  x: hero5X,
                  y: hero5Y,
                  opacity: hero5Opacity
                }}
              />

              {/* Right side images */}
              <motion.img
                src="/hero-2.png"
                alt="The Age of the Essay"
                className="absolute -top-[540px] -right-[580px] w-[380px] h-auto drop-shadow-xl"
                style={{ 
                  x: hero2X,
                  y: hero2Y,
                  opacity: hero2Opacity
                }}
              />
              <motion.img
                src="/hero-4.png"
                alt="Trump's DOGE article"
                className="absolute -top-[260px] -right-[380px] w-[320px] h-auto drop-shadow-xl"
                style={{ 
                  x: hero4X,
                  y: hero4Y,
                  opacity: hero4Opacity
                }}
              />
              <motion.img
                src="/hero-6.png"
                alt="Homeownership article"
                className="absolute top-[450px] -right-[400px] w-[300px] h-auto drop-shadow-xl"
                style={{ 
                  x: hero6X,
                  y: hero6Y,
                  opacity: hero6Opacity
                }}
              />

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
