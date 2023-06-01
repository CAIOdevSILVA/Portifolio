import { Title } from "./index"

import { technologies } from "../constants/constants"

const About = () => {
  return (
    <section className=" flex flex-col lg:mt-8 mt-4 px-[2rem] lg:px-[6.25rem]" id="about">
      <div className="mt-16 mb-16 ">
        <Title titleText="Overview" subTitle="introdução" />
        
        <p className="text-[#f1f5f4] text-sm md:text-[18px]">
          Eu sou desenvolvedor Frontend com conhecimento em Javascript e Typescript,<br/> 
          e também em tecnologias muito populares no mercado como React, Redux, <br/>
          Tailwind css e outras mais. Aprendo rápido e tenho um bom trabalho em equipe.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        {technologies.map((technology) => (
          <div key={technology.name} className="flex flex-col items-center gap-4 cursor-pointer">
            <div className="transition duration-300 transform hover:scale-105 hover:rotate-360">
              <img className="" src={technology.logo} alt={technology.name} />
            </div>
            <h2 className="text-[#f1f5f4] text-base md:text-lg whitespace-nowrap">{technology.name.toUpperCase()}</h2>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About