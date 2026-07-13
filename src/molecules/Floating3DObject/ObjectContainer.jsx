import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Floating3DObject } from './index';

export const ObjectContainer = ({ index, sectionId }) => {
  const containerRef = useRef(null);
  
  // State untuk random posisi, ukuran, dan arah masuk agar tetap konsisten setelah render pertama
  const [randomProps, setRandomProps] = useState(null);

  useEffect(() => {
    // Generate nilai random untuk ukuran
    const size = Math.floor(Math.random() * (120 - 50 + 1)) + 50; // Ukuran antara 50px - 120px
    
    // Distribusi vertikal berdasarkan index agar tidak menumpuk (atas, tengah, bawah)
    let minTop, maxTop;
    if (index === 0) { minTop = 5; maxTop = 30; }
    else if (index === 1) { minTop = 35; maxTop = 65; }
    else { minTop = 70; maxTop = 90; }
    
    const top = Math.floor(Math.random() * (maxTop - minTop + 1)) + minTop;
    
    // Distribusi horizontal (kiri / kanan bergantian agar balance)
    let isLeftSide;
    if (index === 0) isLeftSide = true; // Objek pertama di kiri
    else if (index === 1) isLeftSide = false; // Objek kedua di kanan
    else isLeftSide = Math.random() > 0.5; // Objek ketiga random kiri/kanan
    
    const left = isLeftSide 
      ? Math.floor(Math.random() * 10) + 2    // Kiri: 2% - 12%
      : Math.floor(Math.random() * 10) + 88;  // Kanan: 88% - 98%
    
    // Tentukan arah datang
    const fromDirection = isLeftSide ? -1 : 1;
    const initialX = fromDirection * (window.innerWidth / 2 + 200);

    setRandomProps({
      size,
      top: `${top}%`,
      left: `${left}%`,
      initialX,
      rotation: fromDirection * 180,
    });
  }, [index]);

  useEffect(() => {
    if (!randomProps || !containerRef.current) return;

    // Animasi masuk (muncul dari kiri/kanan, scale down, sedikit rotasi)
    gsap.fromTo(
      containerRef.current,
      {
        x: randomProps.initialX,
        y: (Math.random() - 0.5) * 100, // Sedikit variasi arah vertikal
        scale: 2.5,
        rotation: randomProps.rotation,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 1.8,
        delay: index * 0.2, // Stagger berdasarkan index
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 90%', // Mulai saat elemen mendekati layar
          toggleActions: 'play none none reverse',
        }
      }
    );
  }, [randomProps, index]);

  if (!randomProps) return null;

  return (
    <div
      ref={containerRef}
      className="absolute z-0 pointer-events-none"
      style={{
        width: `${randomProps.size}px`,
        height: `${randomProps.size}px`,
        top: randomProps.top,
        left: randomProps.left,
      }}
    >
      <Floating3DObject />
    </div>
  );
};
