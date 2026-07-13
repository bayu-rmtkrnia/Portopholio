import { useState, useRef, useEffect } from 'react';
import { ScrollFloat } from '../../molecules/ScrollFloat';
import { Carousel } from '../../molecules/Carousel';
import { gsap } from 'gsap';

// Import gambar dari assets
import FindITImg from '../../assets/experienceImage/FindIT.png';
import NESCOImg from '../../assets/experienceImage/NESCO.png';
import KMTETIImg from '../../assets/experienceImage/KMTETI 2026.png';

const PROJECT_ITEMS = [
  {
    title: 'FindIT 2026',
    description: 'I made design guideline, Instagram posts, stories, assets for website, and more of design things. I also coordinate with my team to make a good collaboration and complete the deadline on time.',
    id: 1,
    image: FindITImg,
  },
  {
    title: 'NESCO 2026',
    description: 'I work as design staff for NESCO 2026. My main job is to make posts and stories for Instagram, and also make the proposal design (not the content).',
    id: 2,
    image: NESCOImg,
  },
  {
    title: 'Simple To-Do List',
    description: 'I made a simple to-do list using React JS. It is a simple to-do list that can be used to save your works. I use localstorage on browser to save the data. This is my first project using React and javascript before AI became the main programmer now a days.',
    id: 3,
    image: FindITImg, // Belum ada gambar khusus, pakai random
  },
  {
    title: 'KMTETI 2026',
    description: 'Starting by chosen as the head of design, I recruited some staff and lead them to create a good design for KMTETI 2026. I made the design guideline, Instagram posts, stories, and more of design things. Beside being a leader, i also QC the design that is made by other division.',
    id: 4,
    image: KMTETIImg,
  },
  {
    title: 'HydroConnect Project',
    description: 'At this project I made powerpoint designs and instagram posts as a design staff. You can see more of this project on @hydroconnect.project Instagram account.',
    id: 5,
    image: NESCOImg, // Belum ada gambar khusus, pakai random
  },
  {
    title: 'LOOP Sustainability Bootcamp 2025',
    description: 'In this project I made so many of powerpoint and animated each slide. I also made instagram posts and posters.',
    id: 6,
    image: KMTETIImg, // Belum ada gambar khusus, pakai random
  }
];

import { ObjectContainer } from '../../molecules/Floating3DObject/ObjectContainer';

export const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const descRef = useRef(null);

  // Animasi fade in untuk konten deskripsi saat index berubah
  useEffect(() => {
    if (descRef.current) {
      gsap.fromTo(
        descRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [activeIndex]);

  return (
    <section id="projects" className="w-full min-h-screen flex items-center justify-center py-12 sm:py-16 px-4 sm:px-8 relative">
      
      {/* 3D Objects */}
      <ObjectContainer index={0} sectionId="projects" />
      <ObjectContainer index={1} sectionId="projects" />
      <ObjectContainer index={2} sectionId="projects" />

      {/* Wrapper: kolom di mobile, baris di desktop */}
      <div className="w-full sm:w-[92%] md:w-[88%] lg:w-[85%] xl:w-[75%] flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-12">
        
        {/* Bagian Kiri: Header dan Penjelasan */}
        <div className="flex-1 flex flex-col items-center lg:items-start justify-center gap-4 w-full max-w-lg">
          
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="top bottom-=10%" 
            scrollEnd="center center"
            stagger={0.03}
            containerClassName="w-full text-center lg:text-left"
            textClassName=" [font-feature-settings:'ss01']"
            charClass="text-transparent bg-clip-text bg-linear-to-r from-[#344CB7] to-[#577BC1] bg-fixed"
          >
            Projects
          </ScrollFloat>
          
          {/* Penjelasan — posisi tetap (fixed height) agar header tidak naik turun */}
          <div className="hidden md:block w-full h-[160px] sm:h-[180px] mt-2 overflow-hidden">
            <div ref={descRef} className="flex flex-col items-center lg:items-start justify-start">
              <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-[#344CB7] mb-2">
                {PROJECT_ITEMS[activeIndex].title}
              </h3>
              <p className="font-medium text-xs sm:text-sm md:text-sm text-[#344CB7]/80 leading-relaxed text-center lg:text-left">
                {PROJECT_ITEMS[activeIndex].description}
              </p>
            </div>
          </div>
          
        </div>

        {/* Bagian Kanan: Carousel — rasio 5:4 */}
        <div className="hidden md:flex items-center justify-center shrink-0 w-full overflow-x-hidden lg:max-w-2xl">
          <Carousel 
            items={PROJECT_ITEMS} 
            baseWidth={680} 
            baseHeight={420}
            loop={true}
            onActiveIndexChange={setActiveIndex}
          />
        </div>

        <div className="md:hidden flex items-center justify-center shrink-0 w-full max-w-sm">
          <Carousel 
            items={PROJECT_ITEMS} 
            baseWidth={400} 
            baseHeight={200}
            loop={true}
            onActiveIndexChange={setActiveIndex}
          />
        </div>

         <div className="block md:hidden w-8/10 h-[160px] sm:h-[180px] mt-2 overflow-hidden">
            <div ref={descRef} className="flex flex-col items-center lg:items-start justify-start">
              <h3 className="font-bold text-center text-lg sm:text-xl md:text-2xl text-[#344CB7] mb-2">
                {PROJECT_ITEMS[activeIndex].title}
              </h3>
              <p className="font-medium text-center text-xs sm:text-sm md:text-sm text-[#344CB7]/80 leading-relaxed text-center lg:text-left">
                {PROJECT_ITEMS[activeIndex].description}
              </p>
            </div>
          </div>

      </div>
    </section>
  )
}