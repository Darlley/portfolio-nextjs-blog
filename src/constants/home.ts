import { TypeContent } from "@/components/PageHome/PageHome";
import AICustomIcon from "@/icons/AICustomIcon";
import AWSCustomIcon from "@/icons/AWSCustomIcon";
import BackEndCustomIcon from "@/icons/BackEndCustomIcon";
import FigmaCustomIcon from "@/icons/FigmaCustomIcon";
import LaravelCustomIcon from "@/icons/LaravelCustomIcon";
import MongoCustomIcon from "@/icons/MongoCustomIcon";
import N8NCustomIcon from "@/icons/N8NCustomIcon";
import ReactCustomIcon from "@/icons/ReactCustomIcon";
import TailwindCustomIcon from "@/icons/TailwindCustomIcon";
import WordpressCustomIcon from "@/icons/WordpressCustomIcon";
import { SVGProps } from "react";

export const cardSkills: {
  [key in TypeContent]: null | {
    title: string;
    description: string;
    list: {
      title: string;
      school?: string;
      certifiedUrl?: string;
      projectUrl?: string;
    }[];
    externalUrl?: string;
  };
} = {
  me: {
    title: "Darlley Brasil de Brito Furtado",
    description: `Sou desenvolvedor web full stack com experiência na área atuando em 2 empresas de marketing digital. Em 2020 fui estagiário backend PHP na Bonafide (Marketing Júridico) criando sites institucionais com WordPress CMS (PHP), e entre 2022 e 2024 fui contratado como Desenvolvedor Web Fullstack na LeadsZapp onde implementava micro-tasks no frontend com HTML+TailwindCSS, sites com Nextjs e ferramentas de gerenciamento interno com Laravel ou no-code).
    
Cursei somente até o 5° semestre (2022) em Análise e Desenvolvimento de Sistemas na Universidade Católica Dom Bosco (UCDB) mas pretendo me graduar em Ciência da Computação. Também tenho interesse pelas areas de UI Design, AWS Cloud Computing e Inteligência Artificial Generativa.
    
Além do computador, alguns dos meus hobbies incluem: leitura, estética automotiva, caminhada e cerveja artesanal.`,

    list: [],
    externalUrl: "https://www.linkedin.com/in/darlleybrito/",
  },
  Frontend: {
    title: "ReactJS",
    description:
      "Tenho experiência no desenvolvimento front-end utilizando o framework e seu ecossistema (Webpack, CRA, Vite.js e Next.js).",
    list: [
      {
        title: "Curso React.js Ninja: Módulo React + Webpack",
        school: "Udemy",
        projectUrl: "https://github.com/Darlley/react-webpack-ninja",
      },
      {
        title: "Next Level Week 6 da Rocketseat",
        school: "Rocketseat",
        projectUrl: "https://github.com/Darlley/letmeask-vite",
      },
      {
        title: "(Desafio vaga) Privatecode",
        projectUrl: "https://github.com/Darlley/desafio-privatecode",
      },
      {
        title: "(Desafio vaga) Sorteio.com",
        projectUrl: "https://github.com/Darlley/sorteio-page",
      },
    ],
    externalUrl: "",
  },
  Design: {
    title: "UI Design",
    description:
      "Tenho conhecimentos básicos das teorias e do Workflow do UI Design e tenho conhecimentos intermediários em Figma para criação de Design de Interface e prototipação. Próximas metas é concluir os cursos: \nUI Expert do Lucas Assis, e UI Design Avançado da Origamid.",
    list: [
      {
        title:
          "PRO FIGMA | Design de interface do Iniciante ao especialista (Udemy)",
        certifiedUrl:
          "https://www.udemy.com/certificate/UC-3c8c6d6e-4c1d-4388-ab88-228cda80ed44/",
        school: "Udemy",
        projectUrl:
          "https://www.figma.com/proto/v6daHC3YsIuZO8ozjWN4Pa/Googday-FIGMA-PRO?node-id=102-42&starting-point-node-id=102%3A42",
      },
      {
        title: "UI Design para Iniciantes (Origamid)",
        certifiedUrl: "https://www.origamid.com/certificate/f6676778",
        school: "Origamid",
        projectUrl:
          "https://www.figma.com/community/file/1315518954317390421/curso-design-website-bikcraft",
      },
      {
        title: "Curso de UI Design (ui Start)",
        certifiedUrl:
          "https://uistart.club.hotmart.com/public/user-certificate/7ff0280a-0990-412e-9dc2-7d16303e54f5/_",
        school: "Hotmart",
        projectUrl:
          "https://www.figma.com/community/file/1315518415455162963/curso-landing-page-uistart",
      },
    ],
    externalUrl: "",
  },
  CSS: {
    title: "CSS",
    description:
      "Tenho conhecimentos intermediários em CSS3 (tenho mais facilidade para construir layouts com Flexbox). Sei iniciar um projeto com NPM ou Yarn, compilar SASS proprietário/personalizado e de frameworks CSS com node-sass e gulp-sass e automatizar as tarefas com Gulp.\n\nDentre ferramentas front-end que tenho mais familiaridade: HTML5, CSS3, Git/GitHub, NPM/Yarn, SCSS/Sass, Bootstrap, TailwindCSS, Vite.js, Webpack.",
    list: [
      {
        title: "Bootcamp HTML Web Developer",
        certifiedUrl: "https://www.dio.me/certificate/93688C17/share",
        school: "Dio",
      },
      {
        title: "CSS Flexbox",
        certifiedUrl: "https://www.origamid.com/certificate/b8a51b7f",
        school: "Origamid",
      },
      {
        title: "Curso Ferramentas Front-end: GIT, NPM, Webpack, Gulp e Sass",
        certifiedUrl:
          "https://www.udemy.com/certificate/UC-7371743e-804d-441e-b12f-fb61350c2a7d/",
        school: "Udemy",
      },
    ],
    externalUrl: "",
  },
  WordPress: {
    title: "WordPress",
    description:
      "Entre Novembro de 2019 até Dezembro de 2020 estagiei em uma empresa de Marketing Jurídiro onde eu era responsavel por converter os arquivos estáticos (HTML, CSS e JavaScript) do site que um desenvolvedor criava em um tema WordPress/PHP usado como CSM para sites institucionais de advogados. Também fazia o deploy com Hostgator.",
    list: [
      {
        title: "WordPress Como CMS",
        school: "Origamid",
        certifiedUrl: "https://rino3.com.br/novo/",
      },
    ],
    externalUrl: "",
  },
  Laravel: {
    title: "Laravel",
    description:
      "Atualmente atuo utilizando a TALL Stack (Tailwind, Alpine.js, Laravel e Livewire).\n\nCriei duas bases de conhecimentos com esta stack, e alguns projetos avulsos. Tenho acompanhado o Laravel desde sua oitava versão.",
    list: [
      {
        title: "Curso de Laravel",
        projectUrl: "https://github.com/Darlley/projeto",
      },
      {
        title: "Laravel para iniciantes",
        certifiedUrl:
          "https://www.udemy.com/certificate/UC-30a1c71c-2b63-4e16-93e2-6197164612be/",
        school: "Udemy",
      },
      {
        title: "(Em andamento) TDD com TALL Stack",
        projectUrl: "https://github.com/Darlley/artlover",
        school: "Marco Avila",
      },
      {
        title: "(Em andamento) Laravel na vida real - TALL STACK",
        projectUrl: "https://github.com/Darlley/adoteumdev",
        school: "Beer and Code",
      },
    ],
    externalUrl: "",
  },
  Database: {
    title: "Banco de Dados",
    description:
      `Tive muita experiência com MySQL, usei ele no meu primeiro estágio com WordPress CMS. E no Laravel criei duas bases de conhecimentos usando MySQL.

Ja usei PostgreSQL na faculdade e cursos, profissionalmente usei o Supabase como banco de dados e o pgVector para armazenamento de vetores para crição de RAG's com Inteligência Artificial.

Usei o MongoDB profissionalmente com Nestjs na antiga empresa em que trabalhei e em projetos pessoais e cursos.`,
    list: [
      {
        title: "Fundamentos em Banco de Dados",
        certifiedUrl: "https://www.dio.me/certificate/CABB6B69/share",
        school: "Digital Innovation One",
      },
      {
        title: "(Cursando) Formação SQL Database Specialist",
        school: "Digital Innovation One",
      },
    ],
    externalUrl: "",
  },
  AWS: {
    title: "DevOps",
    description: `Não sou DevOps mas tenho conhecimentos em tecnologias relacionadas: tenho conhecimentos básicos de Docker (uso bastante o Laravel Sail), e estou estudando para tirar a certificação da AWS Cloud Practitioner.
\nInicialmente fiz o deploy deste portfólio com a AWS Amplify + AWS Route53 e já utilizei os serviço de AWS S3 junto com Laravel para armazenar imagens de uma base de conhecimento`,
    list: [
      {
        title: "Docker do 0 à Maestria: Contêineres Desmistificados + EXTRAS",
        certifiedUrl:
          "https://www.udemy.com/certificate/UC-544ac24a-5950-4914-9506-8d6bf81ba89b/",
        school: "Udemy",
      },
      {
        title:
          "Curso Certificação Amazon AWS Cloud Practitioner Foundational 2023",
        certifiedUrl:
          "https://www.udemy.com/certificate/UC-6b1a0937-f009-46ec-adeb-3019b2c74845/",
        school: "Udemy",
      },
      {
        title: "Descubra a Nuvem AWS - Nexa Resources",
        certifiedUrl: "https://www.dio.me/certificate/54EF551C/share",
        school: "Digital Innovation One",
      },
      {
        title: "Docker para Desenvolvedores (com Docker Swarm e Kubernetes)",
        certifiedUrl:
          "https://www.udemy.com/certificate/UC-126c8419-caeb-472c-8f46-fd1025605bd0/",
        school: "Udemy",
      },
    ],
    externalUrl: "",
  },
  "Low-Code/No-Code": {
    title: "Low-Code & No-Code",
    description: `Tenho experiência em ferramentas de automação e low-code na construção de websites até a integração de sistemas. 

O que sei fazer:

☑️ Sei criar website low code com Reactjs usando Codux e Plasmic, e Wordpress CMS com PHP
☑️ Sei criar website no-code usando Webflow e Framer
☑️ Sei usar o Appwrite um banco de dados low code com sdk
☑️ Sei user o Strapi CMS com Nextjs
☑️ Estou aprendendo a criar apps usando Flutterflow com firebase database
☑️ Estou aprendendo a criar aplicações no-code usando o WeWeb e AppSmith
☑️ Sei criar automações e integrações entre sistemas usando o n8n usando Webhooks e API
    `,
    list: [],
  },
  AI: {
    title: "Inteligência Artificial",
    description: `Integro a inteligência artificial de forma prática em meus projetos, utilizando ferramentas avançadas para aumentar a produtividade e precisão.
    
O que sei fazer:

☑️ Usar a IDE cursor.sh e llms para criação de códigos, configurar o vscode com copilot + supermaven + aider + gemini para sugestão de codigos
☑️ Fazer RAG com Supabase pgvector e langchain
☑️ Usar langchain para transformar uma pergunta do usuário em uma pergunta curta mais obejtiva
☑️ User o langchain com pgvector do supabase para criar embeddings de conteudos
☑️ User o upstash para criar embeddings e fazer um chat com rag usando a ia sdk da vercel
☑️ Sei criar embeddings com o Vector Store
☑️ Sei criar mockups, telas e componentes usando o v0 da vercel e o claude da antropic
☑️ Sei criar modelagem de banco de dados com o https://postgres.new/ 
    `,
    list: [
      {
        title: "Learn LangChain.js - Build LLM apps with JavaScript and OpenAI",
        school: "freeCodeCamp.org",
        projectUrl: "https://github.com/Darlley/langchain-course",
      },
    ],
  },
  Nestjs: {
    title: "NestJS",
    description: `No ecossistema Node utilizo e tenho experiência profissional com o framework Nestjs e ja fiz uso pessoal do express e fastify.`,
    list: [
      {
        title: "NestJS with MongoDB & Mongoose - FULL BEGINNER TUTORIAL",
        school: "Anson the Develop",
        projectUrl: "https://github.com/Darlley/tutorial-anson-nestjs-mongo",
      },
      {
        title: "Curso NestJS Com Typescript Completo 2024 - PT1",
        school: "Garoto de Software",
        projectUrl: "https://github.com/Darlley/tutorial-nestjs",
      },
    ],
  },
};

export const planetSkills: Array<{
  name: TypeContent;
  top: string;
  left: string;
  delay: string;
  icon: React.FC<SVGProps<SVGSVGElement>>;
}> = [
  {
    name: "Design",
    top: "9.55%",
    left: "79.39%",
    delay: "1s",
    icon: FigmaCustomIcon,
  },
  {
    name: "CSS",
    top: "34.55%",
    left: "97.55%",
    delay: "2s",
    icon: TailwindCustomIcon,
  },
  {
    name: "WordPress",
    top: "65.45%",
    left: "97.55%",
    delay: "3s",
    icon: WordpressCustomIcon,
  },
  {
    name: "Database",
    top: "100%",
    left: "50%",
    delay: "5s",
    icon: MongoCustomIcon,
  },
  {
    name: "Laravel",
    top: "90.45%",
    left: "79.39%",
    delay: "4s",
    icon: LaravelCustomIcon,
  },
  {
    name: "Frontend",
    top: "0%",
    left: "50%",
    delay: "0s",
    icon: ReactCustomIcon,
  },
  {
    name: "Nestjs",
    top: "9.55%",
    left: "20.61%",
    delay: "9s",
    icon: BackEndCustomIcon,
  },
  {
    name: "AI",
    top: "65.45%",
    left: "2.45%",
    delay: "7s",
    icon: AICustomIcon,
  },
  {
    name: "Low-Code/No-Code",
    top: "34.55%",
    left: "2.45%",
    delay: "8s",
    icon: N8NCustomIcon,
  },
  {
    name: "AWS",
    top: "90.45%",
    left: "20.61%",
    delay: "6s",
    icon: AWSCustomIcon,
  },
];
