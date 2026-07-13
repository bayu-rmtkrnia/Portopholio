import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import { SplitText } from '../../molecules/SplitText';
import { ObjectContainer } from '../../molecules/Floating3DObject/ObjectContainer';

export const Landing = () => {
  const subtitleRef = useRef(null);

  useEffect(() => {
    // Animasi fade in tulisan di bawah "Hi, I'm Bayu"
    // Delay 1.8s agar muncul setelah animasi SplitText "Hi, I'm Bayu" selesai
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 1.0, delay: 1.5, ease: "power3.out" }
    );
  }, []);

  return (
    <section id="landing" className="w-full h-screen flex items-center justify-center relative pb-16">
      {/* 3D Objects (Max 3) */}
      <ObjectContainer index={0} sectionId="landing" />
      <ObjectContainer index={1} sectionId="landing" />
      <ObjectContainer index={2} sectionId="landing" />

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
    </section>
  )
}