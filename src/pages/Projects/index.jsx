import {Carousel} from '../../molecules/Carousel';

export const Projects = (  ) => {
  const experience = [
    {
    title: 'NESCO 2026 Design',
    time: '2025 - Present',
    description : 'Working on the design of NESCO 2026, focusing on creating an engaging instagram feeds and the needs of visual elements of the event.',
    github: 'none',
    image: './src/assets/experienceImage/NESCO.png'
    },
    {
    title: 'FindIT 2026 Design',
    time: '2025 - Present',
    description : 'Working on the design of FindIT 2026, made the design guideline for the event included elements, color pallete, and design theme for the Web Development UI/UX team, creating an engaging instagram feeds and the needs of visual elements for the event.',
    github: 'none',
    image: './src/assets/experienceImage/FindIT.png'
    },
    {
    title: 'BCart',
    time: 'Pending',
    description : 'An e-commerce web application project built using Next-JS. It features user authentication, product browsing, shopping cart functionality, and secure checkout process. Unfortunaly, this project is still pending due to the lack of time.',
    github: 'https://github.com/yourusername/bcart',
    image: './src/assets/experienceImage/FindIT.png'
    },
    {
    title: 'Todo List App',
    time: 'Finished',
    description : 'A simple and user-friendly Todo List application developed using React. It allows users to add, edit, and delete tasks, as well as mark them as completed. I made this for learning react-JS when I was following the Course from OmahTI UGM.',
    github: 'https://github.com/yourusername/todo-list-app',
    image: './src/assets/experienceImage/FindIT.png'
    },
    {
    title: 'KMTETI Open Recruitment Design',
    time: '2025(Finished)',
    description : 'Designed the Guidebook Template and Instagram Feeds with a collegue for KMTETI UGM Open Recruitment 2024. The design focused on creating an engaging and informative visual identity for the Recruitment event and make the division who requested easier to fill the data to the Guidebook',
    github: 'none',
    image: './src/assets/experienceImage/OprecKMTETI.png'
    },
    {
    title: 'LOOP Bootcamp Design',
    time: '2025(Finished)',
    description : 'Made the Instagram feeds and material powerpoint. I made the powerpoint in Microsoft Powerpoint as the requested, I also make the transition animation for each slide to make the powerpoint more attractive.',
    github: 'none',
    image: './src/assets/experienceImage/FindIT.png'
    },
    {
    title: 'Hydro Connect Project Design',
    time: '2025(Finished)',
    description : 'Made the Instagram feeds and helped making elements for the Guide Design. The feeds already have briefs, So I just try to fulfill the needs of the briefs',
    github: 'none',
    image: './src/assets/experienceImage/FindIT.png'
    }
  ];

  return(
    <section className="w-screen h-screen flex flex-col justify-center items-center" >
      <div className='flex flex-col justify-around items-center h-4/10 mt-4'>
        <h1 className="font-bold text-4xl text-transparent bg-clip-text bg-linear-to-r from-[#344CB7] to-[#577BC1]  [font-feature-settings:'ss01'] mt-20 h-6/10">
        Projects
        </h1>
        <p className='font-normal text-xl text-[#344CB7]'>These are projects I ever made and enrolled to, </p>
      </div>
      <div className='h-full w-3/4'>
        <Carousel cards = {experience}/>
      </div>
    </section>
  )
}