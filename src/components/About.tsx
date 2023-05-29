import { technologies } from "../constants/constants"

const About = () => {
  return (
    <section>
      <div className="mt-16 mb-16 px-[6.25rem]">
        <h3 className="text-[1.25rem] font-light text-[#f1f5f4]">INTRODUÇÃO</h3>
        <h1 className="text-[3.75rem] text-[#f1f5f4] font-bold">OVERVIEW</h1>
        <p className="text-[#f1f5f4] text-[18px]">
          Eu sou desenvolvedor Frontend com conhecimento em Javascript e Typescript,<br/> 
          e também em tecnologias muito populares no mercado como React, Redux, <br/>
          Tailwind css e outras mais. Aprendo rápido e tenho um bom trabalho em equipe.
        </p>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
        {technologies.map((technology) => (
          <div key={technology.name} className="flex flex-col items-center gap-4 cursor-pointer">
            <div className="transition duration-300 transform hover:scale-105 hover:rotate-360">
              <img src={technology.logo} alt={technology.name} />
            </div>
            <h2 className="text-[#f1f5f4] text-lg">{technology.name.toUpperCase()}</h2>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About