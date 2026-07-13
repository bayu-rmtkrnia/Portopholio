import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
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
        },
        {
          duration: 1,
          opacity: 1,
          yPercent: 0,
          scaleY: 1,
          scaleX: 1,
          stagger: 0.03,
          ease: 'back.inOut(2)',
        }
      );

      // 2. Putar seluruh kata (merotasi container judulnya)
      tl.to(
        titleContainerRef.current,
        {
          rotation: -90,
          duration: 1,
          ease: 'power2.inOut',
        },
        '+=0.5' // Jeda sedikit setelah animasi ScrollFloat selesai
      );

      // 3. Masukkan Profile Component dari kanan layar sambil text bergeser ke kiri
      tl.to(
        titleContainerRef.current,
        {
          x: '-25vw', // Geser judul ke kiri agar memberi ruang (sesuaikan dengan lebar Profile)
          duration: 1.5,
          ease: 'power2.out',
        },
        '+=0.2'
      );
      
      tl.to(
        profileContainerRef.current,
        {
          x: '0', // Masuk ke posisi normal
          opacity: 1,
          duration: 1.5,
          ease: 'power2.out',
        },
        '<' // Dijalankan berbarengan dengan pergeseran teks
      );

    }, sectionRef); // Scope ke sectionRef

    return () => ctx.revert(); // Bersihkan SEMUA dengan tuntas
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="w-full h-screen flex flex-row items-center justify-center bg-white relative shadow-[0px_-32px_80px_rgba(52,76,183,0.1)]"
    >
      {/* 3D Objects */}
      <ObjectContainer index={0} sectionId="about" />
      <ObjectContainer index={1} sectionId="about" />
      <ObjectContainer index={2} sectionId="about" />
      
      {/* Container utama agar elemen bisa ditata secara berderet */}
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