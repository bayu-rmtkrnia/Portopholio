export const Navbar = () => {
  const navItems = [
    {
      name : 'Home',
      id: 'home',
    },
    {
      name: 'About',
      id: 'about'
    },
    {
      name: 'Projects',
      id: 'projects'
    },
    {
      name: 'Experience',
      id: 'experience'
    },
    {
      name: 'Gallery',
      id: 'gallery'
    }
  ]
  
  return (
    <nav className="w-[80%] h-12 mx-auto mt-4 flex rounded-lg border-[#ffff] bg-[#e9e9e9]/25 shadow-md shadow-[#577BC1]/55 backdrop-blur-xs border items-center z-10 sticky top-4">
      <ul className="w-full flex justify-around items-center ">
        {navItems.map((item) => {
          return(<li key={item.name} className=""><a href={item.id}>{item.name}</a></li>)
        })}
      </ul>
    </nav>
  )
}