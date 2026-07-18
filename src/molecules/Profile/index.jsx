import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiMail, FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

export const Profile = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll('.profile-card');

    const ctx = gsap.context(() => {
      gsap.set(cards, { opacity: 0, y: 55 });

      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.13,
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full flex sm:flex-row flex-col gap-3 items-stretch">

      {/* ── Profile Photo ── */}
      <div className="profile-card sm:w-36 md:w-40 lg:w-48 w-full shrink-0" style={{ opacity: 0 }}>
        <img
          src="/profilePhoto.png"
          alt="Profile Photo"
          className="hidden sm:block w-full h-full object-cover object-top rounded-xl"
        />
      </div>

      {/* ── Info Cards ── */}
      <div className="flex-1 flex flex-col gap-2 min-w-0">

        {/* Biography */}
        <div className="profile-card rounded-lg border border-white/40 bg-[#e9e9e9]/25 shadow-md shadow-[#577BC1]/55 backdrop-blur-xs p-3" style={{ opacity: 0 }}>
          <h2 className="font-bold text-sm lg:text-base text-[#344CB7] mb-1">Biography</h2>
          <p className="text-[11px] sm:text-xs lg:text-[13px] font-medium text-[#344CB7] text-justify leading-relaxed break-words">
            My name is Bayu Rahmat Kurnia, but people commonly call me Bayu. I am 19 years old.
            Currently, I'm an Information Technology student at Gadjah Mada University.
            I am from West Sumatra and the pattern used in this web is inspired by West Sumatra's culture.
            I like to learn new things, especially about web development, UI/UX design, and Graphic Design.
          </p>
        </div>

        {/* Tools + Soft Skills */}
        <div className="flex gap-2 flex-1 min-w-0">
          {/* Tools */}
          <div className="profile-card w-1/2 min-w-0 rounded-lg border border-white/40 bg-[#e9e9e9]/25 shadow-md shadow-[#577BC1]/55 backdrop-blur-xs p-2.5 lg:p-3 flex flex-col" style={{ opacity: 0 }}>
            <h2 className="font-bold text-sm lg:text-base text-[#344CB7] mb-1.5 shrink-0">Tools</h2>
            <ul className="flex-1 flex flex-wrap gap-1.5 sm:gap-2 items-center justify-center">
              <li><img src="./src/assets/toolsIcon/figma_Logo.png"        alt="Figma"     className="h-5 sm:h-6 lg:h-7" /></li>
              <li><img src="./src/assets/toolsIcon/Affinity_Logo.png"     alt="Affinity"  className="h-5 sm:h-6 lg:h-7 rounded-md" /></li>
              <li><img src="./src/assets/toolsIcon/react.svg"             alt="React"     className="h-5 sm:h-6 lg:h-7" /></li>
              <li><img src="./src/assets/toolsIcon/next-js.svg"           alt="Next.js"   className="h-5 sm:h-6 lg:h-7" /></li>
              <li><img src="./src/assets/toolsIcon/Tailwind_CSS_Logo.png" alt="Tailwind"  className="h-5 sm:h-6 lg:h-7" /></li>
              <li><img src="./src/assets/toolsIcon/Neon_Logo.png"         alt="Neon"      className="h-5 sm:h-6 lg:h-7 rounded-md" /></li>
            </ul>
          </div>

          {/* Soft Skills */}
          <div className="profile-card w-1/2 min-w-0 rounded-lg border border-white/40 bg-[#e9e9e9]/25 shadow-md shadow-[#577BC1]/55 backdrop-blur-xs p-2.5 lg:p-3" style={{ opacity: 0 }}>
            <h2 className="font-bold text-sm lg:text-base text-[#344CB7] mb-1.5">Soft Skills</h2>
            <ul className="list-disc text-[#344CB7] ml-3.5 text-[11px] sm:text-xs lg:text-[13px] space-y-0.5">
              <li>Communication</li>
              <li>Teamwork</li>
              <li>Adaptability</li>
              <li>Problem Solving</li>
              <li>Time Management</li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="profile-card rounded-lg bg-gradient-to-br from-[#344CB7] to-[#151e47] shadow-md shadow-[#577BC1]/55 py-2.5 px-3" style={{ opacity: 0 }}>
          <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between sm:gap-4">
            <h2 className="font-bold text-sm lg:text-base text-white shrink-0 whitespace-nowrap">Contact</h2>
            <div className="flex items-center gap-3">
              <a
                href="mailto:bayukurnia362@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full text-white hover:bg-white/20 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                aria-label="Email"
              >
                <FiMail size={15} color="white" />
              </a>
              <a
                href="https://instagram.com/bayurahmtk_"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full text-white hover:bg-white/20 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                aria-label="Instagram"
              >
                <FiInstagram size={15} color="white" />
              </a>
              <a
                href="https://linkedin.com/in/bayurmtkrnia"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full text-white hover:bg-white/20 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={15} color="white" />
              </a>
              <a
                href="https://github.com/bayu-rmtkrnia"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full text-white hover:bg-white/20 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                aria-label="GitHub"
              >
                <FiGithub size={15} color="white" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};