import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollFloat } from '../ScrollFloat';
import { FiMail, FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

export const Footer = () => {
  const triggerRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animasi "slick up" untuk container footer
      gsap.fromTo(
        footerRef.current,
        {
          yPercent: 100, // Mulai tersembunyi di bawah layar
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: triggerRef.current,
            start: 'top bottom', // Trigger saat bagian atas container menyentuh bagian bawah layar
            toggleActions: 'play none none reverse', // Mainkan sekali pas muncul, reverse pas di-scroll ke atas
          },
        }
      );
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <div ref={triggerRef} className="w-full relative z-20">
      <footer 
        ref={footerRef}
        className="w-full bg-gradient-to-b from-[#344CB7] to-[#151e47] text-[#ebebeb] rounded-t-[40px] md:rounded-t-[60px] overflow-hidden pt-16 pb-8 px-6 md:px-16 flex flex-col items-center justify-center relative shadow-[0_-10px_40px_rgba(52,76,183,0.15)]"
      >
        {/* Bagian Call to Action */}
      <div className="w-full flex flex-col items-center justify-center text-center mb-16">
        <ScrollFloat
          animationDuration={1.2}
          ease="back.out(1.7)"
          scrollStart="top bottom-=10%"
          scrollEnd="bottom center"
          stagger={0.04}
          textClassName="font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl [font-feature-settings:'ss01'] text-[#ebebeb]"
        >
          Let's Work Together!
        </ScrollFloat>
        <p className="mt-6 text-sm md:text-base lg:text-lg text-[#ebebeb]/70 max-w-lg">
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