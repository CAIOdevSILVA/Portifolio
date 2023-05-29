import { github, linkedin, instagram } from "../assets/index"

const Hero = () => {
  return (
    <div
      className={`relative z-0 bg-[#18181b]`}
    >
      <div
        className="bg-hero-background bg-cover bg-no-repeat bg-center py-8 px-[6.25rem]"
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-[#f1f5f4] text-6xl font-bold">
            Olá, eu sou <span className="text-[#e33d33]">Caio</span>
          </h1>
          <h2 className="text-3xl text-[#f1f5f4] font-medium">
            Front<span className="text-[#e33d33]">-</span>end Developer
          </h2>
          <p className="text-lg text-[#f1f5f4]">
            Desenvolver interfaces de usuário inteligentes e interações úteis,<br/> 
            desenvolver aplicativos da Web avançados e experiências da Web perfeitas.
          </p>
          <div className="flex gap-4 items-center">
            <a className="cursor-pointer" href="https://github.com/CAIOdevSILVA" target="_blank">
              <img src={github} alt="Github image"/>
            </a>
            <a className="cursor-pointer" href="https://www.linkedin.com/in/caio-silva-b12bb61a9/" target="_blank">
              <img src={linkedin} alt="linkedin image" />
            </a>
            <a className="cursor-pointer" href="https://www.instagram.com/dev_caiosilva/" target="_blank">
              <img src={instagram} alt="instagram image" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero