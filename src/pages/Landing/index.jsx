import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import { SplitText } from '../../molecules/SplitText';

export const Landing = () => {
  const pyramidsRef = useRef([]);
  const pyramidsLeftRef = useRef([]);
  const subtitleRef = useRef(null);

  useEffect(() => {
    // Animasi gambar segitiga (pyramid) dari atas, mengecil, dengan jeda yang sama dengan navbar
    gsap.fromTo(
      pyramidsRef.current,
      {x: 200 , y: -100, scale: 2, opacity: 0 },
      { 
        x:0,
        y: 0, 
        scale: 1, 
        opacity: 1, 
        duration: 1.8, 
        delay: 0, 
        ease: "power3.out"
      }
    );

    gsap.fromTo(
      pyramidsLeftRef.current,
      {x: -200 , y: -100, scale: 2, opacity: 0 },
      { 
        x:0,
        y: 0, 
        scale: 1, 
        opacity: 1, 
        duration: 1.8, 
        delay: 0, 
        ease: "power3.out"
      }
    );
    gsap.fromTo(
      pyramidsRef.current,
      {x: 200 , y: -100, scale: 2, opacity: 0 },
      { 
        x:0,
        y: 0, 
        scale: 1, 
        opacity: 1, 
        duration: 1.8, 
        delay: 0, 
        ease: "power3.out"
      }
    );
    // Animasi fade in tulisan di bawah "Hi, I'm Bayu"
    // Delay 1.8s agar muncul setelah animasi SplitText "Hi, I'm Bayu" selesai
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 1.0, delay: 1.5, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="w-full h-screen flex items-center justify-center relative overflow-hidden pb-16">

      {/* 1:2:1 content area */}
      <div className="w-[90%] h-auto sm:w-3/4 md:w-1/2 md:h-1/2 flex flex-col items-center justify-center gap-3 text-center z-10">
        <SplitText 
          text="Hi, I'm Bayu"
          tag="h1"
          className="font-bold text-[5.5rem] md:text-8xl [font-feature-settings:'ss01'] leading-tight pb-1"
          charClass="text-transparent bg-clip-text bg-linear-to-r from-[#344CB7] via-[#577BC1] to-[#f1f1f1] bg-fixed"
          delay={50}
          duration={1.25}
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
        />
        <ul ref={subtitleRef} className="flex flex-col justify-center items-center text-sm sm:text-base md:text-lg lg:text-xl font-medium gap-1 text-[#344CB7] opacity-0">
          <li>An undergraduate who are into</li>
          <li className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl">Software Engineering &amp; Graphic Design</li>
        </ul>
      </div>

      {/* Decorations */}
      <img 
        ref={el => pyramidsLeftRef.current[0] = el}
        src="./src/assets/pyramide/landing1.png" 
        alt="" 
        aria-hidden="true" 
        className="absolute left-0 bottom-24 md:bottom-32 h-[15%] md:h-[20%] pointer-events-none" 
      />
      <img 
        ref={el => pyramidsRef.current[0] = el}
        src="./src/assets/pyramide/landing2.png" 
        alt="" 
        aria-hidden="true" 
        className="absolute right-6 md:right-10 top-10 w-16 md:w-auto pointer-events-none" 
      />
      <img 
        ref={el => pyramidsRef.current[1] = el}
        src="./src/assets/pyramide/landing3.png" 
        alt="" 
        aria-hidden="true" 
        className="h-48 md:h-72 absolute -right-4 bottom-0 pointer-events-none" 
      />
    </section>
  )
}