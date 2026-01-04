  import {Card} from '../../atoms/Card';
  import { useState } from 'react';

  export const Carousel = ({cards = []}) => {
    const [startIndex, setStartIndex] = useState(0)

    const handleNext = () => {
      let fixValuetoAdd;
      if(startIndex + 2 == cards.length - 1){fixValuetoAdd = 0}
      else if(startIndex + 2 + 3 > cards.length - 1){fixValuetoAdd = 3 - (startIndex + 5 - (cards.length - 1) )}
      else {fixValuetoAdd = 3}
      setStartIndex(startIndex + fixValuetoAdd)
    }
    
    const handlePrev = () => {
      let fixValuetoSub;
      if(startIndex == 0){fixValuetoSub = 0}
      else if(startIndex - 3 < 0){fixValuetoSub = 3 + (startIndex - 3)}
      else if(startIndex - 3 > 0){fixValuetoSub = 3}
      setStartIndex(startIndex - fixValuetoSub)
    }

    return (
      <div className='w-full relative flex items-center justify-center'>
        <ul className='w-full h-90 flex items-center justify-center overflow-hidden ease-in-out'>
          {cards.map((card, id) => {
            const isVisible = (id >= startIndex && id <= startIndex + 2); 
            return ( <li key={id} className={(isVisible ? "w-90 opacity-100" : "w-0 opacity-0") + " transition-all duration-800 ease-in-out transform"}>
              <Card  info={card}/>
            </li>)
        })}
        </ul>
        <div className='text-4xl text-[#344CB7] absolute flex justify-between items-center w-[106%] '>
          <button className={'px-4 pb-2 rounded-2xl flex items-center justify-center text-center border-[#ffff] bg-[#e9e9e9]/75 shadow-md shadow-[#577BC1]/55 backdrop-blur-xs border  transition-all ease-in-out duration-700 cursor-pointer ' + (startIndex == 0 ? 'opacity-50 transform scale-[0.8]' : 'opacity-100 transform scale-100') } onClick={handlePrev}>
            ←
          </button>
          <button className={'px-4 pb-2 rounded-2xl flex items-center justify-center text-center border-[#ffff] bg-[#e9e9e9]/75 shadow-md shadow-[#577BC1]/55 backdrop-blur-xs border transition-all ease-in-out duration-700 cursor-pointer ' + (startIndex + 2 >= cards.length-1 ? 'opacity-50 transform scale-[0.8]' : 'opacity-100 transform scale-100') } onClick={handleNext}>
            →
          </button>
        </div>
      </div>
    )
  }