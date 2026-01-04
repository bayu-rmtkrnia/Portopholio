import {Profile} from '../../molecules/Profile';

export const About = (  ) => {
  return(
    <section className="w-screen h-screen flex flex-col justify-center items-center" >
      <h1 className="font-bold text-4xl text-transparent bg-clip-text bg-linear-to-r from-[#344CB7] to-[#577BC1] h-16 [font-feature-settings:'ss01'] mt-20">
        Some About Me
      </h1>
      < Profile />
    </section>
  )
}