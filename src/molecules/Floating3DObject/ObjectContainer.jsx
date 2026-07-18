import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Floating3DObject } from './index';

// Daftarkan plugin ScrollTrigger ke GSAP
gsap.registerPlugin(ScrollTrigger);

/**
 * Konfigurasi preset untuk setiap 3D shape di halaman Landing.
 * Setiap shape punya identitas visual unik:
 * - Posisi asimetris tapi seimbang
 * - Arah rotasi Three.js berbeda untuk setiap shape
 * - Ukuran bervariasi untuk depth & hierarchy
 * - Warna berbeda dalam harmoni palet biru
 */
const SHAPE_CONFIGS = [
  {
    // Shape 0: Kiri atas — Icosahedron besar
    shape: {
      shapeType: 'icosahedron',
      color: '#5e7bff',
      speed: 0.35,
      rotationAxis: { x: 0.3, y: 1.0, z: 0.1 },
      metalness: 0.15,
      roughness: 0.08,
      clearcoat: 0.5,
      cameraZ: 2.8,
    },
    position: { size: 130, mobileSize: 60, top: '8%', left: '3%' },
    animation: { fromX: -220, fromY: -80, delay: 0.0 },
  },
  {
    // Shape 1: Kanan tengah — Dodecahedron sedang
    shape: {
      shapeType: 'dodecahedron',
      color: '#76a2f9',
      speed: 0.45,
      rotationAxis: { x: -0.4, y: -0.8, z: 0.2 },
      metalness: 0.3,
      roughness: 0.05,
      clearcoat: 0.8,
      cameraZ: 3.2,
    },
    position: { size: 95, mobileSize: 45, top: '42%', right: '2.5%' },
    animation: { fromX: 200, fromY: 40, delay: 0.15 },
  },
  {
    // Shape 2: Kiri bawah — Tetrahedron kecil
    shape: {
      shapeType: 'tetrahedron',
      color: '#76a2f9',
      speed: 0.6,
      rotationAxis: { x: 1.0, y: -0.5, z: 0.3 },
      metalness: 0.1,
      roughness: 0.15,
      clearcoat: 1.2,
      cameraZ: 2.5,
    },
    position: { size: 72, mobileSize: 36, top: '75%', left: '6%' },
    animation: { fromX: -160, fromY: 120, delay: 0.25 },
  },
  {
    // Shape 3: Kanan atas — Octahedron kecil
    shape: {
      shapeType: 'octahedron',
      color: '#76a2f9',
      speed: 0.5,
      rotationAxis: { x: 0.2, y: 0.4, z: -1.0 },
      metalness: 0.25,
      roughness: 0.1,
      clearcoat: 0.9,
      cameraZ: 3.0,
    },
    position: { size: 80, mobileSize: 38, top: '12%', right: '5%' },
    animation: { fromX: 180, fromY: -100, delay: 0.1 },
  },
];

/**
 * ObjectContainer — Fly-in dengan ScrollTrigger yang smooth untuk 3D shapes.
 *
 * TEKNIK ANIMASI AMAN UNTUK WEBGL CANVAS:
 * - ✅ x, y (translate) — tidak memengaruhi pixel canvas
 * - ✅ opacity — aman
 * - ✅ filter: blur() — efek depth/speed saat fly-in
 * - ❌ scale — meregangkan pixel canvas WebGL → glitch
 * - ❌ rotation (HTML element) — konflik Three.js render loop
 *
 * ScrollTrigger di-trigger oleh SECTION parent (#landing),
 * bukan oleh elemen shape itu sendiri — ini lebih reliable karena
 * shape yang posisinya di pinggir bisa saja belum masuk viewport.
 */
export const ObjectContainer = ({ index, sectionId }) => {
  const config = SHAPE_CONFIGS[index];
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el || !config) return;

    const { fromX, fromY, delay } = config.animation;

    // Tentukan trigger: gunakan section parent jika sectionId ada,
    // fallback ke elemen itu sendiri
    const triggerEl = sectionId
      ? document.getElementById(sectionId)
      : el;

    const ctx = gsap.context(() => {
      // Set state awal: posisi offset + transparan + blur
      gsap.set(el, {
        x: fromX,
        y: fromY,
        opacity: 0,
        filter: 'blur(8px)',
        willChange: 'transform, opacity, filter',
      });

      // Fly-in: dipicu saat section masuk viewport
      gsap.to(el, {
        x: 0,
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
        duration: 1.5,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: triggerEl,
          start: 'top 85%',       // animasi mulai saat 85% dari atas viewport menyentuh section
          toggleActions: 'play none none reverse', // play saat masuk, reverse saat keluar
          once: false,            // bisa diulang saat scroll naik-turun
        },
        onComplete: () => {
          gsap.set(el, { willChange: 'auto' });
        },
      });
    });

    return () => ctx.revert();
  }, [index, sectionId]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!config) return null;

  const { position, shape } = config;

  // Ukuran responsif: kecil di mobile, normal di tablet/desktop
  // Gunakan CSS custom property + @media di style tag tidak memungkinkan,
  // jadi kita pakai pendekatan: set style width/height ke mobileSize px,
  // lalu di breakpoint sm ke atas override dengan CSS variable lewat Tailwind class.
  const mobileSize = position.mobileSize ?? position.size;

  const posStyle = {
    // Gunakan CSS variable agar bisa di-override via Tailwind responsive
    width: `var(--shape-size, ${mobileSize}px)`,
    height: `var(--shape-size, ${mobileSize}px)`,
    // sm: override via inline Tailwind tidak bisa, jadi kita set keduanya lewat custom prop
    '--shape-size-mobile': `${mobileSize}px`,
    '--shape-size-desktop': `${position.size}px`,
    top: position.top,
    opacity: 0,
    ...(position.left !== undefined ? { left: position.left } : {}),
    ...(position.right !== undefined ? { right: position.right } : {}),
  };

  return (
    <div
      ref={containerRef}
      className="absolute z-0 pointer-events-none shape-responsive"
      style={posStyle}
    >
      <Floating3DObject {...shape} />
    </div>
  );
};
