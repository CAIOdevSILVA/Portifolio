import { projects } from "../constants/constants"
import { Card, Title } from "./index"

const Projects = () => {
  return (
    <section className="flex flex-col lg:mt-8 mt-4 px-[6.25rem]" id="projects">
      <div className="mt-16 mb-16">
        <Title titleText="Projetos" subTitle="Meus projetos" />

        <p className="text-[#f1f5f4] text-[18px]">
          Os projetos a seguir mostram a minha capacidade de desenvolver e gerenciar projetos<br/> 
          através de exemplos do mundo real. Isso reflete da minha habilidade em resolver problema<br/>
          complexos e trabalhar com diferentes tecnologias. Cada projeto é brevemente descrito e<br/> 
          também possui os links para os seus respectivos repositórios e sites.
        </p>
      </div>
      <div className="flex flex-col gap-32">
        {projects.map((project) => (
          <Card key={project.title} project={project}/>
        ))}
      </div>
    </section>
  )
}

export default Projects