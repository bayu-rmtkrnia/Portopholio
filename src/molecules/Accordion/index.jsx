import { AccordCard } from "../../atoms/AccordCard"

export const Accordion = ({ exps = [] }) => {
  return (
    <ul className="w-full h-full rounded-2xl flex flex-col gap-3 py-4 px-4 md:px-6
          overflow-y-auto
          [&::-webkit-scrollbar]:w-1
          [&::-webkit-scrollbar-track]:bg-transparent
          [&::-webkit-scrollbar-thumb]:bg-[#577BC1]
          [&::-webkit-scrollbar-thumb]:rounded-full">
      {exps.map((exp, idx) => (
        <li key={idx} className="shrink-0">
          <AccordCard data={exp} />
        </li>
      ))}
    </ul>
  )
}
