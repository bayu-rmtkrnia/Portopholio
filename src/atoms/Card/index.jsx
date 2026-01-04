import { Github } from 'lucide-react';
import { useState } from 'react';

export const Card = ({ info }) => {
  const [isOpen, setDesc] = useState(false)

  return (
    <div 
      className={'w-90 h-64 text-[#344CB7] flex flex-col justify-between items-center rounded-lg border-[#ffff] bg-[#e9e9e9]/25 shadow-md shadow-[#577BC1]/55 backdrop-blur-xs border overflow-hidden cursor-pointer transition-all' } 
      onClick={() => setDesc(!isOpen)}
    >
      
      <div className={`w-full overflow-hidden transition-all duration-700 ease-in-out 
        ${isOpen ? "h-[40%]" : "h-9/10"}`}
      >
        <img src={info.image} alt={info.title} className='w-full h-full object-cover'/>
      </div>

      <div className={`flex flex-col items-center w-full transition-all duration-700 
        ${isOpen ? "h-full pt-2" : "h-2/10"}`}
      >
        <h1 className='font-bold text-center text-lg mb-2'>{info.title}</h1>
        
        <div className={`px-4 text-sm text-center w-full transform transition-full ease-in-out duration-500 
          ${isOpen ? "opacity-100 transform" : "opacity-0 transform"}`}
        >
           <p className="h-20 overflow-y-auto text-justify [&::-webkit-scrollbar]:w-1
            [&::-webkit-scrollbar-track]:bg-transparent
          [&::-webkit-scrollbar-thumb]:bg-[#577BC1]
            [&::-webkit-scrollbar-thumb]:rounded-xs">
              {info.description}
           </p>
        </div>

        <div className={`w-9/10 h-8 rounded-md border-[#ffff] bg-[#e9e9e9]/25 shadow-md shadow-[#577BC1]/55 backdrop-blur-xs border justify-center flex mt-auto mb-4 gap-2 items-center hover:bg-[#344CB7] hover:text-[#f1f1f1] transition-colors
          ${info.github !== 'none' && isOpen ? "opacity-100 " : "opacity-0 "}`}
        >
          <Github size={20} />
          <p className="text-sm font-semibold">Check Github</p>
        </div>

      </div>
    </div>
  )
}