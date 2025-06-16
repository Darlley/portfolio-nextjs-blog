export const stats = [
  { label: "Developer since", value: "2019" },
  {
    label: "Years of XP",
    value: Number(new Date().getFullYear()) - (2020 + 1), // Desde 2020 (exceto 2021))
  },
  { label: "Companies", value: "2" },
  { label: "Home Office", value: "1" },
];

type TimelineItemType = "start" | "highlight" | "default";

interface TimelineItem {
  type: TimelineItemType;
  image?: string;
  title: string;
  description: string;
  date: string;
  link?: string;
}

export const timelineItems: TimelineItem[] = [
  {
    type: "start",
    title: "Faculdade",
    description: "Tecnologia em análise e desenvolvimento de Sistemas na Universidade Católica Dom Bosco.",
    date: "Mar 2018",
  },
  {
    type: "highlight",
    image: "/profile.jpg",
    title: "Crise existencial",
    description: "Vou trabalhar na área quando, vai demorar muito?",
    date: "Jun 2019",
  },
  {
    type: "highlight",
    image:
      "https://yt3.ggpht.com/a/AATXAJyTdVU1t8QdU53fkQWwr6QwAVxL0KfqBhIPTA=s900-c-k-c0xffffffff-no-rj-mo",
    title: "Estagiário na Rino3 (Marketing Jurídico Digital)",
    description:
      "Este foi meu primeiro estagio como Programador Back-end PHP. Minha primeira experiência foi converter códigos estáticos (HTML, CSS, JS) em códigos dinâmicos usando PHP e WordPress como CMS. Além disso, eu realizava o deploy e as manutenções necessárias.",
    date: "Nov 2019",
    link: "https://rino3.com.br/novo/",
  },
  {
    type: "default",
    title: "Primeira demissão",
    description: "Estágio na Rino3",
    date: "Dec 2020",
  },
  {
    type: "highlight",
    image: "/profile.jpg",
    title: "Crise existencial",
    description: "Será que isso não é para mim? Será que sou realmente burro?",
    date: "Jun 2021",
  },
  {
    type: "default",
    title: "Portfólio básico",
    description: "criado com Bootstrap e Sass.",
    date: "Jun 2021",
    link: "https://darlley.github.io/",
  },
  {
    type: "default",
    title: "Lógica de programação Essencial (DIO)",
    description: "criado com Bootstrap e Sass.",
    date: "Jun 2021",
    link: "https://www.dio.me/certificate/27EA0735/share",
  },
  {
    type: "default",
    title: "Curso de JavaScript com EcmaScript",
    description: "Curso em Vídeo sobre JavaScript com EcmaScript.",
    date: "Jun 2021",
    link: "https://darlley.github.io/images/conhecimentos/certificacao-guanabara-javascript.jpg",
  },
  {
    type: "default",
    title: "Ferramentas Front-end (Udemy)",
    description:
      "Curso sobre ferramentas front-end, incluindo HTML, CSS, JavaScript e React.",
    date: "Jun 2021",
    link: "https://www.udemy.com/certificate/UC-7371743e-804d-441e-b12f-fb61350c2a7d/",
  },
  {
    type: "default",
    title: "Introdução ao Git e ao GitHub (DIO)",
    description: "Curso sobre os conceitos básicos do Git e GitHub.",
    date: "Ago 2021",
    link: "https://www.dio.me/certificate/AADD2875/share",
  },
  {
    type: "default",
    title: "Introdução a Criação de Websites com HTML5 e CSS3 (DIO)",
    description: "Curso sobre a criação de websites com HTML5 e CSS3.",
    date: "Ago 2021",
    link: "https://www.dio.me/certificate/425D0009/share",
  },
  {
    type: "default",
    title: "HTML Web Developer (DIO)",
    description: "Curso sobre desenvolvimento web com HTML.",
    date: "Ago 2021",
    link: "https://www.dio.me/certificate/93688C17/share",
  },
  {
    type: "default",
    title: "CSS Flexbox (Origamid)",
    description: "Curso sobre CSS Flexbox.",
    date: "Ago 2021",
    link: "https://www.dio.me/certificate/E5C0A92F/share",
  },
  {
    type: "default",
    title: "Primeiros passos para desenvolvimento web (DIO)",
    description: "Curso sobre os primeiros passos para desenvolvimento web.",
    date: "Ago 2021",
    link: "https://www.origamid.com/certificate/b8a51b7f",
  },
  {
    type: "default",
    title: "Projetos ágeis com SCRUM (DIO)",
    description: "Curso sobre projetos ágeis com SCRUM.",
    date: "Set 2021",
    link: "https://www.dio.me/certificate/559F2BA3/share",
  },
  {
    type: "default",
    title: "JavaScript ES6 essencial (DIO)",
    description: "Curso sobre JavaScript ES6 essencial.",
    date: "Set 2021",
    link: "https://www.dio.me/certificate/F7328D65/share",
  },
  {
    type: "default",
    title: "Desenvolvimento avançado com JavaScript ES6 (DIO)",
    description: "Curso sobre desenvolvimento avançado com JavaScript ES6.",
    date: "Set 2021",
    link: "https://www.dio.me/certificate/63E1EBBA/share",
  },
  {
    type: "default",
    title: "Introdução ao TypeScript (DIO)",
    description: "Curso sobre introdução ao TypeScript.",
    date: "Set 2021",
    link: "https://www.dio.me/certificate/3FB132E1/share",
  },
  {
    type: "default",
    title: "Introdução ao ReactJS (DIO)",
    description: "Curso sobre introdução ao ReactJS.",
    date: "Out 2021",
    link: "https://www.dio.me/certificate/FCF99A3D/share",
  },
  {
    type: "default",
    title: "Trabalhando com Componentes em React (DIO)",
    description: "Curso sobre trabalhando com componentes em React.",
    date: "Out 2021",
    link: "https://www.dio.me/certificate/8A1A50E0/share",
  },
  {
    type: "default",
    title: "Evento Next Level Week 6 (Rocketseat)",
    description: "Participação no evento Next Level Week 6.",
    date: "Nov 2021",
    link: "https://letmeask-c49ed.web.app/",
  },
  {
    type: "default",
    title: "Maratona Discover (Rocketseat)",
    description: "Participação na Maratona Discover.",
    date: "Nov 2021",
    link: "https://darlley.github.io/Frontend/Rocketseat/DevFinances/",
  },
  {
    type: "default",
    title: "Desafio para a empresa PrivateCode",
    description: "Participação no desafio para a vaga na empresa PrivateCode.",
    date: "Nov 2021",
    link: "https://privatecode.vercel.app/",
  },
  {
    type: "default",
    title: "Desafio para a empresa Sorteio.com",
    description: "Participação no desafio para a vaga na empresa Sorteio.com.",
    date: "Nov 2021",
    link: "https://sorteio-woad.vercel.app/",
  },
  {
    type: "highlight",
    title: "Des. Web Full-Stack na LeadsZapp (Automação de Marketing)",
    description:
      "Fui contradado como Desenvolvedor Web Full Stack Júnior na empresa. Minhas principais atividades eram desenvolver soluções de UI Design, criar e manter bases de conhecimento das ferramentas e participar de outros projetos. As tecnologias que utilizamos são: PHP/Laravel, Livewire, Alpine.js, TailwindCSS, MySQL, Docker e ReactJS com Next.js.",
    date: "Nov 2021",
    image: "https://knowledge.leadszapp.com/img/leadszapp.png",
  },
  {
    type: "default",
    title: "Cursos relacionados ao ecossistema Laravel",
    description: "Conclui diversos cursos relacionados ao ecossitema Laravel.",
    date: "2022",
    link: "",
  },
  {
    type: "default",
    title: "Mudança de planos",
    description: "Abandonei a faculdade por convicções pessoais.",
    date: "Abr 2022",
    link: "",
  },
  {
    type: "default",
    title: "Cursos de UI Design",
    description: "Conclui 2 cursos relacionados ao UI Design.",
    date: "Jan 2023",
    link: "",
  },
  {
    type: "highlight",
    image: "https://knowledge.leadszapp.com/img/leadszapp.png",
    title: "Layoff",
    description: "Fui demitido da LeadsZapp após 3 anos. Com baixa de clientes a rescisão foi amigável e deixou muitos aprendizados importantes, tanto em Desenvolvimento de Software como em Marketing Digital.",
    date: "Oct 2024",
  },
  {
    type: "highlight",
    image: "/profile.jpg",
    title: "Foco atual",
    description:
      "Atualmente meu foco é desenvolver ainda mais minhas habilidades em Backend, aprender mais sobre Inteligência Artificial e desenvolver meus proprios Micro-SaaS.",
    date: "Mar 2023",
    link: "",
  },
];
