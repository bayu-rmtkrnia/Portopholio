import { AccordCard } from "../../atoms/AccordCard"

export const Accordion = ({exps = []}) => {
  return(
    <div>
      <ul>
        {exps.map((exp, idx) => (
          <li key={idx}>
            <AccordCard data={exp} />
          </li>
        ))}
      </ul>
    </div>
  )
}
