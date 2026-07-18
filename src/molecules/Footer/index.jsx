import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiMail, FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

export const Footer = () => {
  const triggerRef = useRef(null);
  const footerRef = useRef(null);
  const headingWrapRef = useRef(null); // wrapper yang melingkupi kedua h2 (desktop & mobile)
  const subtextRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animasi "slick up" untuk container footer keseluruhan
      gsap.fromTo(
        footerRef.current,
        { yPercent: 8, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: triggerRef.current,
            start: 'top bottom',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Animasi heading "Let's Work Together!" — char per char stagger
      // Pakai toggleActions bukan scrub agar tidak bergantung pada jarak scroll
      if (headingWrapRef.current) {
        // Query semua .footer-char dari wrapper (desktop + mobile h2)
        const chars = headingWrapRef.current.querySelectorAll('.footer-char');
        gsap.fromTo(
          chars,
          { opacity: 0, y: 40, rotateX: -90 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            ease: 'back.out(1.7)',
            stagger: 0.03,
            delay: 0.3,
            scrollTrigger: {
              trigger: triggerRef.current,
              start: 'top bottom',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Animasi subtext fade in
      if (subtextRef.current) {
        gsap.fromTo(
          subtextRef.current,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            delay: 0.7,
            scrollTrigger: {
              trigger: triggerRef.current,
              start: 'top bottom',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  const currentYear = new Date().getFullYear();

  // Satu baris untuk desktop, dua baris untuk mobile
  const buildChars = (text) =>
    text.split('').map((char, i) => (
      <span
        key={i}
        className="footer-char inline-block"
        style={{ opacity: 0 }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));

  return (
    <div ref={triggerRef} className="w-full relative z-20">
      <footer
        ref={footerRef}
        className="w-full bg-gradient-to-b from-[#344CB7] to-[#151e47] text-[#ebebeb] rounded-t-[40px] md:rounded-t-[60px] pt-16 pb-8 px-6 md:px-16 flex flex-col items-center justify-center relative shadow-[0_-10px_40px_rgba(52,76,183,0.15)]"
        style={{ opacity: 0 }}
      >
        {/* Bagian Call to Action */}
        <div className="w-full flex flex-col items-center justify-center text-center mb-16">

          {/* Heading wrapper — GSAP query .footer-char dari sini */}
          <div ref={headingWrapRef}>

            {/* Desktop (sm+): satu baris */}
            <h2
              className="hidden sm:block font-bold text-5xl md:text-7xl lg:text-8xl [font-feature-settings:'ss01'] text-[#ebebeb] leading-tight"
              style={{ perspective: '600px' }}
            >
              {buildChars("Let's Work Together!")}
            </h2>

            {/* Mobile (<sm): dua baris */}
            <h2
              className="sm:hidden font-bold text-4xl [font-feature-settings:'ss01'] text-[#ebebeb] leading-snug"
              style={{ perspective: '600px' }}
            >
              <span className="block">{buildChars("Let's Work")}</span>
              <span className="block">{buildChars("Together!")}</span>
            </h2>

          </div>

          <p
            ref={subtextRef}
            className="mt-6 text-sm md:text-base lg:text-lg text-[#ebebeb]/70 max-w-lg"
            style={{ opacity: 0 }}
          >
            I'm always open to discussing product design work or partnership opportunities. Feel free to reach out.
          </p>
        </div>

        {/* Garis pemisah */}
        <div className="w-full h-px bg-[#ebebeb]/10 mb-8" />

        {/* Bagian Bawah: Sosial Media & Copyright */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright */}
          <div className="text-[#ebebeb]/50 text-xs md:text-sm order-2 md:order-1">
            &copy; {currentYear} Bayu. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 md:gap-6 order-1 md:order-2">
            <a 
              href="mailto:your.email@example.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-[#ebebeb]/5 rounded-full hover:bg-[#344CB7] hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <FiMail size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-[#ebebeb]/5 rounded-full hover:bg-[#344CB7] hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <FiLinkedin size={20} />
            </a>
            <a 
              href="https://instagram.com/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-[#ebebeb]/5 rounded-full hover:bg-[#344CB7] hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <FiInstagram size={20} />
            </a>
            <a 
              href="https://github.com/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-[#ebebeb]/5 rounded-full hover:bg-[#344CB7] hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <FiGithub size={20} />
            </a>
          </div>

        </div>
      </footer>
    </div>
  );
};