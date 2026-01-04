export const AccordCard = ({data}) => {
  return(
    <div>
      <h1>{data.title}</h1>
      <h2>{data.time}</h2>
      <p>{data.desc}</p>
    </div>
  )
}