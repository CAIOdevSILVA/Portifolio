import { AiOutlineClose } from "react-icons/ai"

interface SidebarProps {
  handleOpeningSideBar: () => void
}

const Sidebar = ({ handleOpeningSideBar }:SidebarProps) => {
  return (
    <nav className="text-[#f1f5f4] w-full">
      <div 
        onClick={handleOpeningSideBar}
        className="w-full flex justify-center border-b-2 border-zinc-600 py-4 mb-10"
      >
        <AiOutlineClose 
          className='text-3xl cursor-pointer'
        />
      </div>
      <ul className="flex flex-col items-center gap-5 py-2 h-full text-[#f1f5f4] font-bold text-2xl">
        <li>
          <a 
            onClick={handleOpeningSideBar}
            className="p-4" 
            href="#about"
          >
            Sobre
          </a>
        </li>
        <li>
          <a
            onClick={handleOpeningSideBar}
            className="p-4"
            href="#projects"
          >
            Projetos
          </a>
        </li>
        <li>
          <a
            onClick={handleOpeningSideBar}
            className="p-4"
            href="#contact"
          >
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
