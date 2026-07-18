import { Navbar} from './molecules/Navbar'
import { Landing } from './pages/Landing'
import { About } from './pages/About'
import { Projects } from './pages/Projects'
import { Experience } from './pages/Experience'
import { Footer } from './molecules/Footer'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const navItems = [
  { label: 'Home', href: '#/' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' }
]

const App = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    // Animasi background scale mengecil dari 2 ke 1
    gsap.fromTo(
      bgRef.current,
      { scale: 2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, delay: 0.2, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="smooth-scroll w-full min-h-screen bg-[#ebebeb] m-0 p-0 flex flex-col relative">
      {/* Background Layer: dipisah agar bisa dianimasikan scale-nya tanpa mengganggu konten */}
      {/* <div 
        ref={bgRef}
        className="fixed inset-0 z-0 bg-[url('./assets/bg-fixed.png')] bg-center bg-no-repeat bg-cover pointer-events-none"
      /> */}
      
      {/* Content Layer */}
      <div className="relative z-10 w-full flex flex-col">
        {/* <div className="sticky top-1 z-50 flex justify-center w-full px-4">
          <Navbar />
        </div> */}
        <div className='w-full'>
          <div id="/" className="relative z-[1] overflow-visible">
            <Landing />
          </div>
          <div id="about" className="relative z-[4]">
            <About />
          </div>
          <div id="projects" className="relative z-[3]">
            <Projects />
          </div>
          <div id="experience" className="relative z-[2]">
            <Experience />
          </div>
          {/* Footer Component */}
          <div className="relative z-[1] w-full mt-auto">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
