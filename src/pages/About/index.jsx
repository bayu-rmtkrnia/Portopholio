import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SectionHeading } from '../../molecules/SectionHeading';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Profile } from '../../molecules/Profile';

gsap.registerPlugin(ScrollTrigger);

import { ObjectContainer } from '../../molecules/Floating3DObject/ObjectContainer';

export const About = () => {
  const sectionRef = useRef(null);
  const titleContainerRef = useRef(null);
  const profileContainerRef = useRef(null);
  const charsRef = useRef([]);

  const text = "Some About Me";
  const splitText = text.split('').map((char, index) => (
    <span 
      key={index} 
      ref={el => charsRef.current[index] = el}
      className="inline-block will-change-transform will-change-opacity overflow-hidden text-transparent bg-clip-text bg-linear-to-r from-[#344CB7] to-[#577BC1] bg-fixed"
      style={{ padding: '0 2px' }} // Mencegah karakter terpotong saat scale
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set awal semua karakter & profile
      gsap.set(charsRef.current, {
        opacity: 0,
        y: 36,
        rotateX: -80,
      });
      gsap.set(profileContainerRef.current, {
        y: '50',
        opacity: 0,
      });

      // 1. Animasi judul — char by char, dipicu saat section masuk viewport
      gsap.to(charsRef.current, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.7,
        ease: 'back.out(1.8)',
        stagger: 0.03,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 88%',
          toggleActions: 'play none none reverse',
        },
      });

      // 2. Profile masuk dari kanan setelah judul selesai
      gsap.to(profileContainerRef.current, {
        y: '0',
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        delay: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 88%',
          toggleActions: 'play none none reverse',
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="w-full h-screen flex flex-col gap-8 items-center justify-center relative"
    >
      {/* 3D Objects */}
      <ObjectContainer index={0} sectionId="about" />
      <ObjectContainer index={1} sectionId="about" />
      <ObjectContainer index={2} sectionId="about" />
      
       {/* Title Container - Center */}
      <SectionHeading
          text="About Me"
          tag="h2"
          className="[font-feature-settings:'ss01'] font-bold text-5xl sm:text-6xl md:text-7xl shrink-0"
          charClassName="text-transparent bg-clip-text bg-linear-to-r from-[#344CB7] to-[#577BC1] bg-fixed"
        />


      {/* Container utama agar elemen bisa ditata secara berderet */}
      <div 
        ref={profileContainerRef} 
        className="z-10 w-9/10 sm:w-[85%] md:w-[70%] xl:w-1/2 flex items-center justify-center opacity-0"
      >
        <Profile />
      </div>

     

    </section>
  );
};