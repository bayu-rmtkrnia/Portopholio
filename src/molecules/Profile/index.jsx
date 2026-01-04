import {Instagram} from 'lucide-react';
import {Mail} from 'lucide-react';

export const Profile = () => {
  return(
    <div className="w-[80%] h-[70%] flex flex-row justify-center items-center">
      {/* Profile Photo */}
      <div className="h-full overflow-hidden">
        <img src= "/profilePhoto.png" alt="Profile Photo" className="h-full"/>
      </div>

      {/* Profile Info */}
      <div className="h-full w-[80%] flex flex-col justify-left p-4 gap-4">
        <div className="w-full rounded-lg border-[#ffff] bg-[#e9e9e9]/25 shadow-md shadow-[#577BC1]/55 backdrop-blur-xs border p-4">
          <h1 className="font-bold text-2xl text-[#344CB7] mb-2">Biography</h1>
          <p className="text-md font-medium text-[#344CB7] text-justify">
            My name is Bayu Rahmat Kurnia, but people commonly call me Bayu. I am 19 years old.
            Currently, I’m an Information Technology student at Gadjah Mada University.
            I am from West Sumatra and pattern used in this web is inspired by West Sumatra’s culture.
            I like to learn new things, especially about web development, UI/UX design, and Graphic Design. 
          </p>
        </div>


        <div className="flex gap-2">
          <div className="w-1/2 rounded-lg border-[#ffff] bg-[#e9e9e9]/25 shadow-md shadow-[#577BC1]/55 backdrop-blur-xs border p-4 flex flex-col ">
            <h1 className="font-bold text-2xl text-[#344CB7] mb-2">Tools I Use</h1>
            <ul className=" h-full flex flex-wrap gap-4 items-center justify-center">
              <li> <img src="./src/assets/toolsIcon/figma_Logo.png" alt="figma-icon" className="h-10"/></li>
              <li> <img src="./src/assets/toolsIcon/Affinity_Logo.png" alt="figma-icon" className="h-10 rounded-lg"/></li>
              <li> <img src="./src/assets/toolsIcon/react.svg" alt="figma-icon" className="h-10"/></li>
              <li> <img src="./src/assets/toolsIcon/next-js.svg" alt="figma-icon" className="h-10"/></li>
              <li> <img src="./src/assets/toolsIcon/Tailwind_CSS_Logo.png" alt="figma-icon" className="h-8"/></li>
              <li> <img src="./src/assets/toolsIcon/Neon_Logo.png" alt="figma-icon" className="h-10 rounded-lg"/></li>
            </ul>
          </div>
          
          <div className="w-1/2 rounded-lg border-[#ffff] bg-[#e9e9e9]/25 shadow-md shadow-[#577BC1]/55 backdrop-blur-xs border p-4">
            <h1 className="font-bold text-2xl text-[#344CB7] mb-1">Soft Skills</h1>
            <ul className="list-disc text-[#344CB7] ml-5">
              <li>Communication</li>
              <li>Teamwork</li>
              <li>Adaptability</li>
              <li>Problem Solving</li>
              <li>Time Management</li>
            </ul>
          </div>
          
         

        </div>

         <div className="w-full rounded-lg border-[#ffff] bg-[#e9e9e9]/25 shadow-md shadow-[#577BC1]/55 backdrop-blur-xs border py-4 px-2">
            <ul className="text-[#344CB7] ml-5 flex items-center gap-16">
              <li><h1 className="font-bold text-2xl text-[#344CB7] mb-1">Contact Me On </h1></li>
              <li className='flex'>
                <Instagram />
                <p>bayurahmtk_</p>
              </li>
              <li className='flex'>
                <Mail />
                <p>bayukurnia362@gmail.com</p>
              </li>
            </ul>
          </div>
      </div>
    </div>
  )
}