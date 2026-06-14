import { Instagram, Mail } from 'lucide-react';

export const Profile = () => {
  return (
    <div className="w-full flex sm:flex-row flex-col gap-3 items-stretch">

      {/* ── Profile Photo ── */}
      {/* Desktop/tablet: fixed width di sisi kiri, h-full mengikuti tinggi cards */}
      {/* Mobile: full width, fixed height */}
      <div className="sm:w-36 md:w-40 lg:w-48 w-full shrink-0">
        <img
          src="/profilePhoto.png"
          alt="Profile Photo"
          className="hidden sm:block w-full h-full object-cover object-top rounded-xl"
        />
        <img
          src="/profilePhoto_md.png"
          alt="Profile Photo"
          className="sm:hidden block w-full h-48 object-cover object-top rounded-xl"
        />
      </div>

      {/* ── Info Cards ── */}
      <div className="flex-1 flex flex-col gap-2 min-w-0">

        {/* Biography */}
        <div className="rounded-lg border border-white/40 bg-[#e9e9e9]/25 shadow-md shadow-[#577BC1]/55 backdrop-blur-xs p-3">
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
          <div className="w-1/2 min-w-0 rounded-lg border border-white/40 bg-[#e9e9e9]/25 shadow-md shadow-[#577BC1]/55 backdrop-blur-xs p-2.5 lg:p-3 flex flex-col">
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
          <div className="w-1/2 min-w-0 rounded-lg border border-white/40 bg-[#e9e9e9]/25 shadow-md shadow-[#577BC1]/55 backdrop-blur-xs p-2.5 lg:p-3">
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
        <div className="rounded-lg border border-white/40 bg-[#e9e9e9]/25 shadow-md shadow-[#577BC1]/55 backdrop-blur-xs py-2 px-3">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 md:gap-5 text-[#344CB7]">
            <h2 className="font-bold text-sm lg:text-base text-[#344CB7] shrink-0 whitespace-nowrap">Contact</h2>
            <div className="flex items-center gap-1.5 shrink-0 whitespace-nowrap">
              <Instagram size={13} className="shrink-0" />
              <span className="text-[11px] sm:text-xs xl:text-sm">bayurahmtk_</span>
            </div>
            <div className="flex items-center gap-1.5 min-w-0 whitespace-nowrap">
              <Mail size={13} className="shrink-0" />
              <span className="text-[11px] sm:text-xs xl:text-sm truncate">bayukurnia362@gmail.com</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};