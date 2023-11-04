import React from "react"
import { Button } from "../ui/button"

interface NavBarPros {
  setPages: React.Dispatch<React.SetStateAction<string>>
  pages?: string
}
const NavBar = () => {
  return (
    <nav className=" fixed right-[135px] left-[135px] top-6 bg-white/50 backdrop-blur-[14px] flex justify-between items-center py-4 px-2 shadow-lg rounded-sm z-50">
      <h1 className="font-extrabold text-2xl">Family</h1>
      <div className="flex items-center space-x-12">
        <ul className="flex flex-1 justify-center items-center space-x-9">
          <li className="cursor-pointer hover:text-primary transition duration-300 ease-in-out">
            <a href="/"> Home</a>
          </li>
          <li className="cursor-pointer hover:text-primary transition duration-300 ease-in-out">
            <a href="/about">About</a>
          </li>
          <li className="cursor-pointer hover:text-primary transition duration-300 ease-in-out">
            <a href="/doctors"> Doctors</a>
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
