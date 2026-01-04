import { Accordion } from "../../molecules/Accordion"

export const Experience = ( ) => {
  const experience = [
    {
      title: "Head of Design Subdivision at KMTETI UGM",
      time: "(Jan 2026 - Dec 2026)",
      desc: "adads"
    },
    {
      title: "Head of Design Subdivision at FindIT 2026",
      time: "(Aug 2025 - May 2026)",
      desc: "adfadfasd"
    },
  ]
  
  return(
    <section className="w-screen h-screen flex flex-col justify-center items-center" >
      <h1 className="font-bold text-4xl text-transparent bg-clip-text bg-linear-to-r from-[#344CB7] to-[#577BC1] h-16 [font-feature-settings:'ss01'] mt-20">
        Experience
      </h1>
      <div>
        <Accordion exps={experience}/>
      </div>
    </section>
  )
}