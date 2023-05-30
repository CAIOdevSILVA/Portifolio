import { 
    html, 
    css, 
    javascript, 
    typescript, 
    react, 
    next, 
    redux,
    tailwind,
    styledComponents,
    sass,
    git,
    sanity,
    Shareme,
    Lord
  } from "../assets/index"

interface technologiesProps {
  name: string;
  logo: string
}


interface projectsProps {
  title: string;
  projectImg: string;
  description: string;
  techs: technologiesProps[];
  gitHubLink: string;
  webSiteLink: string;
}


const technologies: technologiesProps[] = [
  {
    name: "html",
    logo:html
  },
  {
    name: "css",
    logo:css
  },
  {
    name: "javascript",
    logo:javascript
  },
  {
    name: "typescript",
    logo:typescript
  },
  {
    name: "react",
    logo:react
  },
  {
    name: "next",
    logo:next
  },
  {
    name: "redux",
    logo:redux
  },
  {
    name: "tailwind",
    logo:tailwind
  },
  {
    name: "styled-components",
    logo:styledComponents
  },
  {
    name: "sass",
    logo:sass
  },
  {
    name: "git",
    logo:git
  },
]


const projects: projectsProps[] = [
  {
    title: "ShareMe",
    projectImg: Shareme,
    description: "ShareME é um projeto inspirado no Pinterest e feito com React e Tailwind. Com ele podemos compartilhar imagens, curtir e comentar assim como em qualquer outra rede social. Todas as informações são armazenadas no CMS SANITY isso permite que usuários, imagens, curtidas e comentários sejam salvos e atualizados em tempo real. ShareMe é uma incrível rede social não deixe de criar sua conta!",
    techs: [
      {
        name: "react",
        logo: react
      },
      {
        name: "tailwind",
        logo: tailwind
      },
      {
        name: "sanity",
        logo: sanity
      },
    ],
    gitHubLink: "https://github.com/CAIOdevSILVA/ShareME-Frontend",
    webSiteLink: "https://shareme-caio-silva.netlify.app/"
  },
  {
    title: "Lord of the novels",
    projectImg: Lord,
    description: "Lord os the Novels é projeto de uma plataforma de leitura seja de livros, WebNovels ou Novels feito com React e e Styled-Components. Nele podemos criar conta, curtir, comentar e salvar as obras preferidas. Além disso, todo o controle de conteúdos é feito pelo CMS Sanity, por isso, todas informações são salvas, armazenadas e disponibilizadas ao usuário final de maneira rápida e segura. Se você gosta de obras digitais fique de à vontade testar o site e conferir os exemplos.",
    techs: [
      {
        name: "react",
        logo: react
      },
      {
        name: "styled-components",
        logo: styledComponents
      },
      {
        name: "sanity",
        logo: sanity
      },
    ],
    gitHubLink: "https://github.com/CAIOdevSILVA/Lord-Of-The-Novels",
    webSiteLink: "https://lord-of-the-novels.vercel.app/"
  },
]

export { technologies, projects }