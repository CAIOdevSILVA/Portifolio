import { Button } from "./index"

interface techsProps {
  name: string;
  logo: string
}

interface ProjectProps {
  title: string;
  projectImg: string;
  description: string;
  techs: techsProps[];
  gitHubLink: string;
  webSiteLink: string;
}

interface CardProps {
  project: ProjectProps
}

const Card = ({ project }: CardProps) => {
  return (
    <div className="w-full lg:min-h-[25rem]  inline-flex [@media(max-width:700px)]:flex-col gap-8 shadow-card mb-8">
      <div className="flex-grow-1 min-h-full lg:min-w-[26.3rem]">
        <img className="w-full h-full object-cover object-left" src={project?.projectImg} alt={`${project?.title} imagem`} />
      </div>
      <div className="flex-grow-2 inline-flex flex-col text-[#f1f5f4] gap-4 py-4 px-2 rounded-md">
        <h1 className="text-xl md:text-[30px] font-medium">{project?.title.toUpperCase()}</h1>
        <p className="text-sm md:text-[18px] font-light pr-4">
          {project.description}
        </p>
        <div className="flex gap-4">
          {project.techs.map((tech) => (
            <div className="w-[1.5rem] h-[1.5rem] sm:w-[2.5rem] sm:h-[2.5rem] cursor-pointer">
              <img className="w-full h-full object-cover" src={tech.logo} alt="tecnology image" />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-8 mt-4">
          <Button buttonText="ver github" buttonLink={project.gitHubLink} outline/>
          <Button buttonText="acessar site" buttonLink={project.webSiteLink}/>
        </div>
      </div>
    </div>
  )
}

export default Card