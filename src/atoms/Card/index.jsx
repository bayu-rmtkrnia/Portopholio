import { Github } from 'lucide-react';

export const Card = ({ info }) => {
  return (
    <div className="w-[85%] sm:w-[65%] md:w-[55%] lg:w-[48%] h-full text-[#344CB7] flex flex-col rounded-3xl border border-white/40 bg-[#e9e9e9]/25 shadow-xl shadow-[#577BC1]/55 backdrop-blur-xs overflow-hidden">

      {/* Project Image */}
      <div className="w-full h-[55%] overflow-hidden shrink-0">
        <img
          src={info.image}
          alt={info.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Project Info */}
      <div className="flex flex-col flex-1 p-4 min-h-0 overflow-hidden">
        <h2 className="font-bold text-base md:text-lg text-center shrink-0 break-words mb-2">{info.title}</h2>

        <div className="flex-1 overflow-y-auto min-h-0
            [&::-webkit-scrollbar]:w-1
            [&::-webkit-scrollbar-track]:bg-transparent
            [&::-webkit-scrollbar-thumb]:bg-[#577BC1]
            [&::-webkit-scrollbar-thumb]:rounded-full">
          <p className="text-xs md:text-sm text-justify leading-relaxed break-words">
            {info.description}
          </p>
        </div>

        {/* GitHub Button */}
        <div className={`shrink-0 mt-2 transition-all duration-300
            ${info.github !== 'none' ? 'opacity-100 h-9' : 'opacity-0 h-0 pointer-events-none'}`}>
          <a
            href={info.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full px-2 rounded-md border border-white/40 bg-[#e9e9e9]/50 shadow-sm
              flex justify-center gap-2 items-center
              hover:bg-[#344CB7]/90 hover:text-[#f1f1f1] transition-colors duration-500 text-sm font-semibold"
          >
            <Github size={16} />
            <span>Check Github</span>
          </a>
        </div>
      </div>

    </div>
  )
}