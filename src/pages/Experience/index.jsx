import { Accordion } from "../../molecules/Accordion"
import { ScrollFloat } from "../../molecules/ScrollFloat"

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
    <section className="w-full min-h-screen flex items-center justify-center py-12 sm:py-16 px-4 sm:px-8">

      {/* Content area — responsif di semua ukuran layar */}
      <div className="w-full sm:w-[92%] md:w-[80%] lg:w-[65%] xl:w-[55%] flex flex-col items-center justify-center gap-6">

        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="top bottom-=10%" 
          scrollEnd="center center"
          stagger={0.03}
          textClassName="font-bold text-3xl sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-linear-to-r from-[#344CB7] to-[#577BC1] [font-feature-settings:'ss01']"
          charClass="text-transparent bg-clip-text bg-linear-to-r from-[#344CB7] to-[#577BC1] bg-fixed"
        >
          Experience
        </ScrollFloat>

        {/* Accordion fills remaining height */}
        <div className="w-full flex-1 min-h-0 overflow-hidden">
          <Accordion exps={experience} />
        </div>

      </div>
    </section>
  )
}