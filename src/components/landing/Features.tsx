import React, { useEffect, useRef } from "react";

interface FeatureSectionProps {
  icon: string;
  label: string;
  title: string;
  description: string;
  leftImage?: string;
  centerImage: string;
  rightImage?: string;
  singlePhoneLayout?: boolean;
}

const useReadingScroll = (ref: React.RefObject<HTMLDivElement>) => {
  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    let lastProgress = 0;
    let lastTimestamp = 0;
    let animationFrameId: number;

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const smoothstep = (x: number) => {
      return x * x * (3 - 2 * x);
    };

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = Math.min((timestamp - lastTimestamp) / 16, 1);
      lastTimestamp = timestamp;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Reset animation when section is below viewport
      if (rect.top > viewportHeight) {
        lastProgress = 0;
        const phoneContainer = section.querySelector('[data-reading-phones]');
        if (phoneContainer) {
          phoneContainer.style.transform = 'translateY(220px)';
        }
        animationFrameId = requestAnimationFrame(animate);
        return;
      }
      
      // Calculate distance from viewport center
      const distanceFromCenter = rect.top + rect.height / 2 - viewportHeight / 2;
      const totalDistance = viewportHeight * 0.6;

      // Calculate target progress with smoothstep easing
      let rawProgress = 1 - Math.min(Math.abs(distanceFromCenter) / totalDistance, 1);
      
      // If section is moving up (negative distanceFromCenter) and we've already revealed the phones,
      // keep them revealed
      if (distanceFromCenter < 0 && lastProgress > 0.9) {
        rawProgress = 1;
      }
      
      const targetProgress = smoothstep(Math.min(Math.max(rawProgress, 0), 1));

      // Smooth interpolation based on delta time
      const factor = Math.min(deltaTime * 8, 1); // Slower interpolation
      const smoothedProgress = lerp(lastProgress, targetProgress, factor);
      lastProgress = smoothedProgress;

      // Apply the transform
      const phoneContainer = section.querySelector('[data-reading-phones]');
      if (phoneContainer) {
        phoneContainer.style.transform = `translateY(${220 * (1 - smoothedProgress)}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);
};

const usePlaylistScroll = (ref: React.RefObject<HTMLDivElement>) => {
  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    let lastProgress = 0;
    let lastTimestamp = 0;
    let animationFrameId: number;

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const smoothstep = (x: number) => {
      return x * x * (3 - 2 * x);
    };

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = Math.min((timestamp - lastTimestamp) / 16, 1);
      lastTimestamp = timestamp;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Reset animation when section is below viewport
      if (rect.top > viewportHeight) {
        lastProgress = 0;
        const phoneContainer = section.querySelector('[data-playlist-phone]');
        if (phoneContainer) {
          phoneContainer.style.transform = 'translateY(220px)';
        }
        animationFrameId = requestAnimationFrame(animate);
        return;
      }
      
      // Calculate distance from viewport center
      const distanceFromCenter = rect.top + rect.height / 2 - viewportHeight / 2;
      const totalDistance = viewportHeight * 0.6;

      // Calculate target progress with smoothstep easing
      let rawProgress = 1 - Math.min(Math.abs(distanceFromCenter) / totalDistance, 1);
      
      // If section is moving up (negative distanceFromCenter) and we've already revealed the phone,
      // keep it revealed
      if (distanceFromCenter < 0 && lastProgress > 0.9) {
        rawProgress = 1;
      }
      
      const targetProgress = smoothstep(Math.min(Math.max(rawProgress, 0), 1));

      // Smooth interpolation based on delta time
      const factor = Math.min(deltaTime * 8, 1); // Slower interpolation
      const smoothedProgress = lerp(lastProgress, targetProgress, factor);
      lastProgress = smoothedProgress;

      // Apply the transform
      const phoneContainer = section.querySelector('[data-playlist-phone]');
      if (phoneContainer) {
        phoneContainer.style.transform = `translateY(${220 * (1 - smoothedProgress)}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);
};

const useAudioScroll = (ref: React.RefObject<HTMLDivElement>) => {
  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    let lastProgress = 0;
    let lastTimestamp = 0;
    let lastScrollY = window.scrollY;
    let animationFrameId: number;

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const smoothstep = (x: number) => {
      return x * x * (3 - 2 * x);
    };

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = Math.min((timestamp - lastTimestamp) / 16, 1);
      lastTimestamp = timestamp;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY;
      lastScrollY = currentScrollY;
      
      // Reset animation only when scrolling up and section is below viewport
      if (rect.top > viewportHeight && !scrollingDown) {
        lastProgress = 0;
        const phoneContainer = section.querySelector('[data-audio-phone]');
        if (phoneContainer) {
          phoneContainer.style.transform = 'translate(50px, 220px)';
        }
        animationFrameId = requestAnimationFrame(animate);
        return;
      }
      
      // Calculate distance from viewport center
      const distanceFromCenter = rect.top + rect.height / 2 - viewportHeight / 2;
      const totalDistance = viewportHeight * 0.6;

      // Calculate target progress with smoothstep easing
      let rawProgress = 1 - Math.min(Math.abs(distanceFromCenter) / totalDistance, 1);
      
      // If section is moving up (negative distanceFromCenter) and we've already revealed the phone,
      // keep it revealed
      if (distanceFromCenter < 0 && lastProgress > 0.9) {
        rawProgress = 1;
      }
      
      const targetProgress = smoothstep(Math.min(Math.max(rawProgress, 0), 1));

      // Smooth interpolation based on delta time
      const factor = Math.min(deltaTime * 8, 1); // Slower interpolation
      const smoothedProgress = lerp(lastProgress, targetProgress, factor);
      lastProgress = smoothedProgress;

      // Apply the transform
      const phoneContainer = section.querySelector('[data-audio-phone]');
      if (phoneContainer) {
        phoneContainer.style.transform = `translate(50px, ${220 * (1 - smoothedProgress)}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);
};

const FeatureSection: React.FC<FeatureSectionProps> = ({
  icon,
  label,
  title,
  description,
  leftImage,
  centerImage,
  rightImage,
  singlePhoneLayout,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  if (label === "Reading, simplified") {
    useReadingScroll(sectionRef);
  } else if (label === "AI Audio") {
    useAudioScroll(sectionRef);
  } else if (label === "Playlists") {
    usePlaylistScroll(sectionRef);
  }

  return (
    <div ref={sectionRef} className="bg-[#F6F6F6] rounded-[32px] px-16 pt-8 pb-0 shadow-[0_20.65px_25.94px_4.98px_rgba(0,0,0,0.07)] max-w-[1200px] mx-auto relative overflow-hidden border border-black/[0.06] mb-24">
      {label === "AI Audio" ? (
        <div className="absolute inset-0 bg-[url('/Audio-gradient.png')] bg-cover bg-bottom opacity-100"></div>
      ) : label === "Playlists" ? (
        <div className="absolute inset-0 bg-[url('/Playlists-gradient.png')] bg-cover bg-bottom opacity-100"></div>
      ) : (
        <div className="absolute inset-0 bg-[url('/Reading-gradient.png')] bg-cover bg-bottom opacity-100"></div>
      )}
      <div className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-[400px] mx-auto mb-4 mt-[24px]">
          <div className="flex items-center gap-2.5 text-[18px] text-[#24BC8A] font-medium leading-none">
          <img
            src={icon}
            alt={`${label} icon`}
            className="w-6 h-6"
          />
          <h2>{label}</h2>
        </div>
        <div className="mt-3">
          <h3 className="text-[40px] font-semibold leading-[42px]">
            {label === "AI Audio" ? (
              <>
                Listen to articles<br/>
                on-the-go
              </>
            ) : title}
          </h3>
          <p className="text-base leading-[23px] mt-3 text-gray-600">
            {description}
          </p>
        </div>
      </div>

      <div className="relative max-w-[1200px] mx-auto mt-8">
        {singlePhoneLayout ? (
          <div className="flex justify-center relative mt-8">
            <div className={`relative ${centerImage.includes('playlist') ? 'w-[340px] mx-auto translate-y-[220px] will-change-transform' : 'w-[475px] translate-x-[50px] translate-y-[220px] will-change-transform'}`} data-audio-phone={!centerImage.includes('playlist')} data-playlist-phone={centerImage.includes('playlist')}>
              {centerImage.includes('playlist') && (
                <>
                  <div className="absolute -left-[340px] -top-[100px] opacity-0 transition-all duration-700 floating-image-1" data-floating>
                    <img src="/Hiring-Judgment.png" alt="Hiring Judgment" className="w-[187px] h-[187px] rounded-2xl" />
                  </div>
                  <div className="absolute -right-[340px] -top-[160px] opacity-0 transition-all duration-700 floating-image-2" data-floating>
                    <img src="/Sam-Altman.png" alt="Sam Altman" className="w-[187px] h-[187px] rounded-2xl" />
                  </div>
                  <div className="absolute -left-[220px] bottom-[110px] opacity-0 transition-all duration-700 floating-image-3" data-floating>
                    <img src="/Sahil-Bloom.png" alt="Sahil Bloom" className="w-[187px] h-[187px] rounded-2xl" />
                  </div>
                  <div className="absolute -right-[205px] bottom-[235px] opacity-0 transition-all duration-700 floating-image-4" data-floating>
                    <img src="/1440.png" alt="1440" className="w-[187px] h-[187px] rounded-2xl" />
                  </div>
                  <div className="absolute -right-[390px] bottom-[100px] opacity-0 transition-all duration-700 floating-image-5" data-floating>
                    <img src="/Robinhood.png" alt="Robinhood" className="w-[187px] h-[187px] rounded-2xl" />
                  </div>
                </>
              )}
              <img
                src={centerImage}
                alt="Feature center"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-end gap-3 relative -mt-[25px]" style={{ height: '470px' }}>
            <div data-reading-phones className="flex justify-center items-end gap-3 translate-y-[220px] will-change-transform">
              <div className="relative w-[285px]">
                <img
                  src={leftImage}
                  alt="Feature left"
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>

              <div className="relative w-[340px] z-20">
                <img
                  src={centerImage}
                  alt="Feature center"
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>

              <div className="relative w-[285px]">
                <img
                  src={rightImage}
                  alt="Feature right"
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export const Features = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.8 }
    );

    document.querySelectorAll('[data-floating]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <section className="w-full py-40 relative overflow-hidden">
      <div className="container mx-auto px-4 space-y-40">
        <FeatureSection
          icon="/reading.svg"
          label="Reading, simplified"
          title="One place for all your reading"
          description="Newsletters we love, emails not so much—time to liberate your inbox by reading all of your blogs and newsletters in Perch."
          leftImage="/Reading-1.png"
          centerImage="/Reading-hero.png"
          rightImage="/Reading-2.png"
        />

        <FeatureSection
          icon="/audio.svg"
          label="AI Audio"
          title="Listen to articles&#10;on-the-go"
          description="Get through your reading on a walk or your morning commute with narration so human, you'll forget it's AI."
          centerImage="/ai-audio-phone.png"
          singlePhoneLayout={true}
        />

        <FeatureSection
          icon="/playlists.svg"
          label="Playlists"
          title="Share the best of what you're reading"
          description="Curate and share playlists of your best reads, or discover playlists from the Perch community to learn about anything."
          centerImage="/playlist-phone.png"
          singlePhoneLayout={true}
        />
      </div>
    </section>
  );
};
