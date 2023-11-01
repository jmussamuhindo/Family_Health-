import { Button } from "../ui/button"

const NavBar = () => {
  return (
    <nav className=" relative top-6 bg-white/75 backdrop-blur-[14px] flex justify-between items-center py-4 px-2 shadow-lg rounded-sm z-50">
      <h1 className="font-extrabold text-2xl">Family</h1>
      <div className="flex items-center space-x-12">
        <ul className="flex flex-1 justify-center items-center space-x-9">
          <li className="cursor-pointer hover:text-primary transition duration-300 ease-in-out">
            Home
          </li>
          <li className="cursor-pointer hover:text-primary transition duration-300 ease-in-out">
            About
          </li>
          <li className="cursor-pointer hover:text-primary transition duration-300 ease-in-out">
            Doctors
          </li>
          <li className="cursor-pointer hover:text-primary transition duration-300 ease-in-out">
            Contact us
          </li>
        </ul>
        <span className="flex items-center space-x-4">
          <Button text="Sign in" variant={"default"} />
          <Button text="Sign up" variant={"default"} />
        </span>
      </div>
    </nav>
  )
}

export default NavBar
