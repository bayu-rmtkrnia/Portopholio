import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * SectionHeading — Animasi judul section dengan char-by-char stagger.
 * Menggunakan toggleActions (bukan scrub) sehingga teks selalu muncul
 * begitu section masuk viewport, tanpa bergantung pada sisa jarak scroll.
 *
 * @param {string} text - Teks heading
 * @param {string} className - Class tambahan untuk elemen h2
 * @param {string} charClassName - Class untuk setiap karakter
 * @param {string} triggerSelector - CSS selector elemen trigger (default: elemen itu sendiri)
 * @param {string} tag - Tag HTML: 'h1' | 'h2' | 'h3' (default: 'h2')
 */
export const SectionHeading = ({
  text,
  className = '',
  charClassName = '',
  tag: Tag = 'h2',
}) => {
  const headingRef = useRef(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    const chars = el.querySelectorAll('.sh-char');

    const ctx = gsap.context(() => {
      gsap.set(chars, { opacity: 0, y: 36, rotateX: -80 });

      gsap.to(chars, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.7,
        ease: 'back.out(1.7)',
        stagger: 0.03,
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    return () => ctx.revert();
  }, [text]);

  // Pecah teks jadi array karakter
  const chars = text.split('').map((char, i) => (
    <span
      key={i}
      className={`sh-char inline-block ${charClassName}`}
      style={{ opacity: 0, transformStyle: 'preserve-3d' }}
      aria-hidden="true"
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));

  return (
    <Tag
      ref={headingRef}
      className={className}
      style={{ perspective: '800px' }}
      aria-label={text} // aksesibilitas
    >
      {chars}
    </Tag>
  );
};
