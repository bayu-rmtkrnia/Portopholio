import { useState } from "react"

export const AccordCard = ({data}) => {
  const [isOpen, setIsOpen] = useState(false)

  return(
    <div className={"w-full p-4 flex flex-col justify-center rounded-lg border-[#ffff] bg-[#e9e9e9]/25 shadow-md shadow-[#577BC1]/55 backdrop-blur-xs border items-left cursor-pointer text-[#344CB7] transition-full duration-500 ease-in-out " + (isOpen ? " h-full" : " h-24 delay-200")} onClick = {() => {setIsOpen(!isOpen)}}>
      <h1 className="font-bold text-base lg:text-lg text-wrap">{data.title}</h1>
      <h2 className="text-wrap">{data.time}</h2>
      

      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        {/* Inner container harus overflow-hidden supaya kontennya hilang saat row=0 */}
        <div className="overflow-hidden">
          {/* Tambahkan sedikit padding top/bottom di text jika perlu, tapi jangan di wrapper luar */}
          <p className="text-justify text-sm pt-2 pb-1">
            {data.desc}
          </p>
        </div>
      </div>
    </div>
  )
}