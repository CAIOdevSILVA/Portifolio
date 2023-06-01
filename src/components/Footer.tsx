import logo from "../assets/logo.png";
import { github, linkedin, instagram } from "../assets";

const Footer = () => {
  return (
    <footer className="mt-16 px-[2rem] lg:px-[6.25rem] py-8 md:flex flex-col justify-between items-center">
      <div className="flex gap-2 items-center mt-2">
        <div className="w-10 h-10 rounded-full">
          <img
            className="w-full h-full object-cover"
            src={logo}
            alt="Logo Caio Silva"
          />
        </div>
        <h2 className=" text-lg md:text-xl font-bold text-[#f1f5f4]">
          Caio Silva | Frontend-Developer
        </h2>
      </div>
      <div className="flex gap-4 items-center mt-2 ">
        <a
          className="cursor-pointer hover:scale-105"
          href="https://github.com/CAIOdevSILVA"
          target="_blank"
        >
          <img src={github} alt="Github image" />
        </a>
        <a
          className="cursor-pointer hover:scale-105"
          href="https://www.linkedin.com/in/caio-silva-b12bb61a9/"
          target="_blank"
        >
          <img src={linkedin} alt="linkedin image" />
        </a>
        <a
          className="cursor-pointer hover:scale-105"
          href="https://www.instagram.com/dev_caiosilva/"
          target="_blank"
        >
          <img src={instagram} alt="instagram image" />
        </a>
      </div>
      <p className="text-[#f1f5f4] text-sm md:text-lg mt-2">
        © 2023 CaioSIlva. Todos os direitos reservados
      </p>
    </footer>
  );
};

export default Footer;
