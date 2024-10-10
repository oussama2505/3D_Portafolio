import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  tesoreria,
  bilbao,
  MariFarma,
  MusicPlayer,
  VueSport,
  threejs,
  ingeniero,
  fsm,
  Izarza,
} from "../assets";


export const navLinks = [
  { id: '', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'experience', title: 'Experience' },
  { id: 'tech', title: 'Tech' },
  { id: 'works', title: 'Works' },
  { id: 'feedbacks', title: 'Feedbacks' },
  { id: 'contact', title: 'Contact' },
];


const services = [
  {
    title: "Desarollador Frontend",
    icon: web,
  },
  {
    title: "Metodologías ágiles",
    icon: mobile,
  },
  {
    title: "Desarollador Backend",
    icon: backend,
  },
  {
    title: "Diseñador gráfico",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Proyecto Académico",
    company_name: "Tesorería de Túnez",
    icon: tesoreria,
    iconBg: "#383E56",
    date: "Sept 2014 - Jun 2015",
    points: [
      "Este proyecto consiste en el desarrollo de una aplicación de escritorio destinada a la gestión integral de impuestos para empresas.",
      "la aplicación permitirá a las empresas calcular y gestionar diversos impuestos como el IVA, IRPF, impuestos locales y cualquier otra obligación tributaria.",
      "La aplicación calculará impuestos, gestionará deudas fiscales y generará informes para la presentación de declaraciones fiscales al final del año.",
      "Desarrollo de aplicación de escritorio en C#, HTML y CSS.",
    ],
  },
  {
    title: "Estudios Preparatorios para Escuelas de Ingeniería",
    company_name: "Faculdad de Sciencia :Túnez",
    icon: ingeniero,
    iconBg: "#E6DEDD",
    date: "Sept 2009 - Jun 2012",
    points: [
      "Tres años de formación intensiva en matemáticas, ciencias físicas y conceptos básicos de ingeniería.",
      "Adquisición de una sólida base en áreas como cálculo, álgebra, física y química.",
      "Preparación para exámenes de ingreso a escuelas de ingeniería.",
    ],
  },
  {
    title: "Licenciatura en Ciencias de la Computación",
    company_name: "Faculdad de Sciencia :Túnez",
    icon: fsm,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Programa de tres años enfocado en fundamentos teóricos y prácticos de la informática.",
      "Amplia cobertura en áreas como programación, algoritmos, bases de datos y sistemas operativos.",
      "Adquisición de habilidades en desarrollo de software, análisis de datos y solución de problemas computacionales.",
    ],
  },
  {
    title: "Bootcamp de Desarrollo Fullstack",
    company_name: "Peñascal Koop. Bilbao,España",
    icon: bilbao,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Ahora",
    points: [
      "Programa intensivo de formación en desarrollo web fullstack durante 7 meses",
      "Dominio de tecnologías front-end como HTML5, CSS3, JavaScript, con experiencia en frameworks como VueJs y ReactJs.",
      "Conocimiento sólido en diseño responsivo utilizando Tailwind CSS y experiencia en la creación de interfaces de usuario con Figma.",
      "Familiaridad con herramientas de control de versiones como Git y habilidades en la creación de contenedores Docker para la implementación de aplicaciones.",
      "Experiencia práctica en la aplicación de metodologías ágiles como Scrum y Kanban para la gestión eficiente de proyectos, basada en proyectos reales desarrollados durante el bootcamp.",
      "Adquisición de habilidades para la resolución de problemas, toma de decisiones y manejo de situaciones bajo presión, aplicadas en el contexto de proyectos de desarrollo de software durante el bootcamp.",
    ],
  },
];

const testimonials = [
/*   {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  }, */
];

const projects = [
  {
    name: "Tienda Online",
    description:
      "Este proyecto es un sitio web llamado MariFarma, que proporciona información y acceso a varios productos relacionados con la salud y el bienestar. Ofrece categorías como Medicamentos, Cuidado Natural, Hierbas y Ortopedia. El sitio web ofrece funcionalidades como selección de idioma, búsqueda de productos y añadir productos a favoritos y al carrito de compras.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: MariFarma,
    source_code_link: "https://github.com/usertina/Marifarma.git",
  },
  {
    name: "Music Player",
    description:
      "Este proyecto es un reproductor de música simple construido utilizando JavaScript y la API de Web Audio (Usando métodos de Array: map(), filter(), find(), join(), sort(), indexOf())",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: MusicPlayer,
    source_code_link: "https://github.com/oussama2505/MusicPlayer_JS_WebAudioAPI.git",
  },
  {
    name: "VueSport",
    description:
      "This website is created by students of the Peñascal F5 bootcamp for educational purposes. The entire project was developed in an estimated time of 2 weeks. The group was organized and worked with agile methodologies, organizing the group with its corresponding Scrum and Product Owner.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCss",
        color: "green-text-gradient",
      },
      {
        name: "VueJs",
        color: "pink-text-gradient",
      },
    ],
    image: VueSport,
    source_code_link: "https://github.com/oussama2505/vueSport.git",
  },
  {
    name: "Restaurante Izarza",
    description:
      "This website is created by students of the Peñascal F5 bootcamp for educational purposes. The entire project was developed in an estimated time of 2 weeks. The group was organized and worked with agile methodologies, organizing the group with its corresponding Scrum and Product Owner.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Wordpress",
        color: "pink-text-gradient",
      },
    ],
    image: Izarza,
    source_code_link: "https://github.com/oussama2505/3D_Portafolio",
  },
];

export { services, technologies, experiences, testimonials, projects };
