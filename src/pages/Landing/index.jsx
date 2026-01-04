export const Landing = () => {
  return(
    <section className="w-screen h-[90vh] flex flex-col justify-center items-center gap-2 mt-0">
      <h1 className="font-bold text-8xl text-transparent bg-clip-text bg-linear-to-r from-[#344CB7] via-[#577BC1] to-[#f1f1f1] h-32 [font-feature-settings:'ss01'] ">Hi, I'm Bayu</h1>
      <ul className="flex flex-col justify-center items-center text-xl font-medium gap-1 text-[#344CB7]">
        <li className="font-weight-[400]"> 
          An undergraduate who are into to
        </li>
        <li className="font-bold text-2xl">
          Web Development & Graphic Design
        </li>
      </ul>
      <img src="./src/assets/pyramide/landing1.png" alt="pyramide 1" className="absolute left-0"/>
      <img src="./src/assets/pyramide/landing2.png" alt="pyramide 2" className="absolute right-20 top-48"/>
      <img src="./src/assets/pyramide/landing3.png" alt="pyramide 1" className="h-96 absolute -right-4 -bottom-32"/>
    </section>
  )
}