import { useState } from "react"
import { Sidebar } from "./index"
import { AiOutlineMenu } from "react-icons/ai"

import logo from "../assets/logo.png"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpeningSideBar = () => {
    setIsOpen(isOpen === false ? true : false)
  }

  return (
    <header className="px-[2rem] lg:px-[6.25rem] py-[1.5rem] flex justify-between items-center relative">
      <div className="flex gap-2 items-center">
        <div className="w-10 h-10 rounded-full">
          <img className="w-full h-full object-cover" src={logo} alt="Logo Caio Silva" />
        </div>
        <h2 className="text-lg md:text-xl font-bold text-[#f1f5f4]">Caio Silva | Frontend-Developer</h2>
      </div>
      <ul className="hidden lg:flex items-center gap-16 text-[#f1f5f4] font-bold text-lg">
        <li>
          <a className="transition duration-300 hover:opacity-60" href="#about">
            Sobre
          </a>
        </li>
        <li>
          <a className="transition duration-300 hover:opacity-60" href="#projects">
            Projetos
          </a>
        </li>
        <li>
          <a 
            className="
            font-medium 
            bg-[#e33d33] 
            py-[.5rem] 
            px-[1.5rem]
            rounded-md
            cursor-pointer
          "  
            href="#contact"
          >
            Contato
          </a>
        </li>
      </ul>
      {isOpen && (
        <div className="lg:hidden w-screen h-screen inline-flex bg-sidebar rounded-md absolute inset-0">
          {isOpen && <Sidebar handleOpeningSideBar={handleOpeningSideBar}/>}
         </div>
      )}

      {!isOpen && (
          <div
          onClick={handleOpeningSideBar}
          className="lg:hidden overflow-hidden"
        >
          <AiOutlineMenu 
            className='text-2xl cursor-pointer text-white'
          />
      </div>
      )}
    </header>
  )
}

export default Header