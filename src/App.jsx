import { Navbar } from './molecules/Navbar'
import { Landing } from './pages/Landing'
import { About } from './pages/About'
import { Projects } from './pages/Projects'
import { Experience } from './pages/Experience'

const App = () => {
  return (
    <div className="w-screen h-[500vh] bg-[#ebebeb] m-0 p-0 flex flex-col bg-[url('./assets/bg-fixed.png')] bg-local bg-no-repeat bg-cover ">
      <Navbar />
      <div className='w-screen'>
        <Landing /> 
        <About />
        <Projects />
        <Experience /> 
      </div>
    </div>
  )
}

export default App
