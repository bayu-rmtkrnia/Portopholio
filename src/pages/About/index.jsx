import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Profile } from '../../molecules/Profile';

gsap.registerPlugin(ScrollTrigger);

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
    // gsap.context() memastikan SEMUA animasi & ScrollTrigger di dalamnya
    // akan dibersihkan secara tuntas saat React unmount/remount (StrictMode).
    const ctx = gsap.context(() => {
      // Sembunyikan semua karakter & profile sejak awal
      gsap.set(charsRef.current, {
        opacity: 0,
        yPercent: 120,
        scaleY: 2.3,
        scaleX: 0.7,
        transformOrigin: '50% 0%'
      });
      gsap.set(profileContainerRef.current, {
        x: '100vw',
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          start: 'top',
          end: '+=1000',
          anticipatePin: 1,
        }
      });

      // 1. ScrollFloat effect (tulisan muncul per karakter)
      tl.fromTo(
        charsRef.current,
        {
          opacity: 0,
          yPercent: 120,
          scaleY: 2.3,
          scaleX: 0.7,
          transformOrigin: '50% 0%'
        },
        {
          opacity: 1,
          yPercent: 0,
          scaleY: 1,
          scaleX: 1,
          stagger: 0.05,
          duration: 2,
          ease: 'back.inOut(2)',
          immediateRender: false // Penting agar scrub bisa reverse dengan benar
        }
      );

      // Jeda sebentar
      tl.to({}, { duration: 0.5 });

      // 2 & 3. Rotasi + Profile masuk bersamaan
      tl.to(titleContainerRef.current, {
        rotation: 90,
        x: () => -window.innerWidth / 2 + (window.innerWidth < 768 ? 40 : 80),
        duration: 3,
        ease: 'power2.inOut'
      }, 'moveIn');

      tl.fromTo(profileContainerRef.current, {
        x: '100vw',
        opacity: 0,
      }, {
        x: 0,
        opacity: 1,
        duration: 3,
        ease: 'power2.inOut',
        immediateRender: false
      }, 'moveIn');

      // Jeda di akhir agar ada waktu membaca Profile
      tl.to({}, { duration: 2 });

    }, sectionRef); // Scope ke sectionRef

    return () => ctx.revert(); // Bersihkan SEMUA dengan tuntas
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="w-full h-screen flex items-center justify-center relative px-4"
    >
      
      {/* Profile Container - Center */}
      <div 
        ref={profileContainerRef} 
        className="absolute z-10 w-full sm:w-[85%] md:w-[70%] lg:w-[60%] xl:w-1/2 flex items-center justify-center opacity-0"
      >
        <Profile />
      </div>

      {/* Title Container - Center */}
      <div 
        ref={titleContainerRef} 
        className="absolute z-20 flex items-center justify-center origin-center"
      >
        {/* Tambahkan whitespace-nowrap agar huruf tidak terpotong atau tergeser ke bawah */}
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl [font-feature-settings:'ss01'] inline-block whitespace-nowrap py-4">
          {splitText}
        </h1>
      </div>

    </section>
  );
};