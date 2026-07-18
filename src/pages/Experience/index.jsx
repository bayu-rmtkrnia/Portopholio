import { Accordion } from "../../molecules/Accordion"
import { SectionHeading } from '../../molecules/SectionHeading'
import { ObjectContainer } from "../../molecules/Floating3DObject/ObjectContainer"

export const Experience = () => {
  const experience = [
    {
      title: "Head of Design Subdivision at KMTETI UGM",
      time: "(Jan 2026 - Dec 2026)",
      desc: "Led a team of designers to establish visual brand guidelines and create engaging promotional assets. Directed the visual strategy for all major departmental events, resulting in a 40% increase in student engagement across social media platforms."
    },
    {
      title: "Head of Design Subdivision at FindIT UGM 2026",
      time: "(Aug 2025 - May 2026)",
      desc: "Spearheaded the UI/UX design direction for the primary event website and coordinated with the development team to ensure seamless implementation. Created cohesive visual identities including color palettes, typography, and marketing feeds."
    },
    {
      title: "Design Staff at LOOP Sustainability Bootcamp",
      time: "(Aug 2025 - Sept 2025)",
      desc: "Designed comprehensive presentation decks and animated slide transitions. Produced compelling Instagram feed content to promote sustainability awareness, ensuring strict adherence to the bootcamp's visual identity."
    },
    {
      title: "Design Staff at Hydro Connect Project",
      time: "(Nov 2025 - Dec 2025)",
      desc: "Assisted in generating graphical elements for the official Guide Design. Followed strict design briefs to deliver high-quality social media content that effectively communicated the project's core mission to the public."
    }
  ]

  return (
    <section id="experience" className="w-full min-h-screen flex items-center justify-center py-12 sm:py-16 px-4 sm:px-8 relative overflow-hidden">
      
      {/* 3D Objects */}
      <ObjectContainer index={3} sectionId="experience" />
      <ObjectContainer index={1} sectionId="experience" />
      <ObjectContainer index={0} sectionId="experience" />

      {/* Content area — responsif di semua ukuran layar */}
      <div className="w-[100%] md:w-[80%] flex flex-col lg:flex-row-reverse items-center justify-center gap-6 min-w-0">

        {/* Heading wrapper — shrink jika perlu, tidak overflow ke kanan */}
        <div className="shrink-0 flex justify-center lg:justify-end min-w-0 max-w-full pr-4">
          <SectionHeading
            text="Experience"
            tag="h2"
            className="[font-feature-settings:'ss01'] font-bold text-5xl sm:text-6xl md:text-7xl text-center lg:text-right"
            charClassName="text-transparent bg-clip-text bg-linear-to-r from-[#344CB7] to-[#577BC1] bg-fixed"
          />
        </div>

        {/* Accordion fills remaining height */}
        <div className="w-full flex-1 min-h-0 min-w-0 overflow-hidden">
          <Accordion exps={experience} />
        </div>

      </div>
    </section>
  )
}