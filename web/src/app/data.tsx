/* eslint-disable react/jsx-key */
import renerForce from "../../public/experience-images/mockup/renerforce/rener-force.jpg";
import rener1 from "../../public/experience-images/mockup/renerforce/rener1.jpg";
import rener2 from "../../public/experience-images/mockup/renerforce/rener2.jpg";
import rener3 from "../../public/experience-images/mockup/renerforce/rener3.jpg";
import rener4 from "../../public/experience-images/mockup/renerforce/rener4.jpg";
import andrezaBiquinis from "../../public/experience-images/mockup/andreza/andreza-mockup.jpg";
import andreza1 from "../../public/experience-images/mockup/andreza/andreza-1.jpg";
import andreza2 from "../../public/experience-images/mockup/andreza/andreza-2.jpg";
import andreza3 from "../../public/experience-images/mockup/andreza/andreza-3.jpg";
import andreza4 from "../../public/experience-images/mockup/andreza/andreza-4.jpg";
import bitMockup from "../../public/experience-images/mockup/bit/bit-mockup.jpg";
import bit1 from "../../public/experience-images/mockup/bit/bit-1.jpg";
import bit2 from "../../public/experience-images/mockup/bit/bit-2.jpg";
import bit3 from "../../public/experience-images/mockup/bit/bit-3.jpg";
import bit4 from "../../public/experience-images/mockup/bit/bit-4.jpg";
import uniube from "../../public/education-images/uniube.png";
import uniubeCampus from "../../public/education-images/uniube/uniube-campus.jpg";
import jstack from "../../public/education-images/jstack.png";
import fincheck from "../../public/education-images/jstack/fincheck.jpg";
import waiterapp from "../../public/education-images/jstack/waiterapp.jpg";
import mycontacts from "../../public/education-images/jstack/mycontacts.jpg";
import balta from "../../public/education-images/balta.png";
import rocketseat from "../../public/education-images/rocketseat.png";
import microsoft from "../../public/education-images/microsoft.png";
import {
  BiLogoTypescript,
  BiLogoReact,
  BiLogoPostgresql,
} from "react-icons/bi";
import { FaCss3, FaDocker, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import {
  SiDotnet,
  SiMicrosoftsqlserver,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import { StaticImageData } from "next/image";
import { IoLogoJavascript } from "react-icons/io";

export interface ProjectProps {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  projectType: string;
  jobType: string;
  github: string;
  deploy: string;
  overview: JSX.Element;
  specifications: string[];
  detailsProjectImages?: StaticImageData[];
  technologies: JSX.Element[];
  image: StaticImageData;
}

export const projects = [
  {
    id: "rener-force",
    title: "Rener Force - Voluntário",
    subtitle: "Sistema de orçamentos para oficina mecânica.",
    period: "Jul 2023 - Ago 2023",
    projectType: "Full-Stack",
    jobType: "Desenvolvedor",
    technologies: [
      <FaHtml5 width={30} height={30} />,
      <FaCss3 width={30} height={30} />,
      <IoLogoJavascript width={30} height={30} />,
      <SiTypescript width={30} height={30} />,
      <FaReact width={30} height={30} />,
      <IoLogoFirebase width={30} height={30} />,
    ],
    overview: (
      <>
        <p>
          Este projeto trata-se de um sistema de orçamentos para a oficina do
          pai de uma amiga. O projeto conta com as seguintes funcionalidades:
        </p>
        <ul>
          <li>Criação de orçamentos</li>
          <li>Edição de orçamentos</li>
          <li>Remoção de orçamentos</li>
          <li>Gerenciamento de clientes</li>
          <li>Imprimir tabelas em PNG/PDF</li>
        </ul>
      </>
    ),
    specifications: [
      "Projeto Full-Stack",
      "Conexão com banco de dados",
      "Responsivo",
      "Tema branco/escuro",
      "Sistema de impressão de orçamentos",
    ],
    github: "https://github.com/DiogoAMV/budgetSystem",
    deploy: "https://budget-system-nine.vercel.app/",
    detailsProjectImages: [rener1, rener2, rener3, rener4],
    image: renerForce,
  },
  {
    id: "andreza",
    title: "Andreza Biquinis - Voluntário",
    subtitle: "Loja virtual online para a venda de biquinis.",
    period: "Set 2023 - Nov 2023",
    projectType: "Full-Stack",
    jobType: "Desenvolvedor",
    technologies: [
      <FaHtml5 />,
      <FaCss3 />,
      <IoLogoJavascript />,
      <SiTypescript />,
      <FaReact />,
      <IoLogoFirebase />,
    ],
    overview: (
      <>
        <p>
          Este é um projeto voluntário feito para uma vendedora de biquinis
          local, o projeto conta com as seguintes funcionalidades:
        </p>
        <ul>
          <li>Gerenciamento de produtos, categorias e estilos</li>
          <li>
            Edição dos dados pessoais do vendedor (nome, redes sociais,
            telefone...)
          </li>
          <li>Dashboard de administrador completo</li>
          <li>Sistema de autenticação</li>
          <li>Design responsivo</li>
        </ul>
      </>
    ),
    specifications: [
      "Projeto Full-Stack",
      "Conexão com API & banco de dados",
      "Responsivo",
      "Adm dashboard",
      "Sistema de login",
      "Gerenciamento completo do site",
    ],
    github: "https://github.com/DiogoAMV/andrezaProject",
    deploy: "https://andreza-voluntary-project.vercel.app/",
    detailsProjectImages: [andreza1, andreza2, andreza3, andreza4],
    image: andrezaBiquinis,
  },
  {
    id: "bit",
    title: "Bit Blog - Projeto Pessoal",
    subtitle: "Blog inglês sobre tecnologia.",
    period: "Dec 2023 - Jan 2024",
    projectType: "Full-Stack",
    jobType: "Desenvolvedor",
    technologies: [
      <FaHtml5 />,
      <FaCss3 />,
      <IoLogoJavascript />,
      <SiTypescript />,
      <SiNextdotjs />,
      <FaDocker />,
      <SiDotnet />,
      <BiLogoPostgresql />,
    ],
    overview: (
      <>
        <p>
          Este projeto se trata de um blog de tecnologia com foco na língua
          inglesa, o blog conta com as seguintes funcionalidades:
        </p>
        <ul>
          <li>Gerenciamento de publicações</li>
          <li>Autenticação de usuários</li>
          <li>Sistema de autenticação e autorização c/ token JWT</li>
          <li>Design responsivo</li>
          <li>Editor de textos HTML para criação de posts (WYSIWYG)</li>
          <li>API com conexão á banco de dados</li>
        </ul>
      </>
    ),
    specifications: [
      "Projeto Full-Stack",
      "Conexão com API & banco de dados PostgreSQL",
      "Adm Dashboard & Responsivo",
      "Roteamento dinâmico com NextJS",
      "Sistema de autenticação & autorização c/ JWT",
      "Rich Text Editor (WYSIWYG)",
    ],
    github: "https://github.com/DiogoAMV/bit",
    deploy: "",
    detailsProjectImages: [bit1, bit2, bit3, bit4],
    image: bitMockup,
  },
];

export const experiences = [
  {
    title: "Desenvolvedor de Software Voluntário",
    company: "Andreza Biquinis",
    period: "Set 2023 - Nov 2023",
    description:
      "Responsável por desenvolver um site de gerenciamento de produtos para ser usado como vitrine aos clientes. O site conta com sistema de autenticação, personalização de elementos como contato, email e também a possibilidade de criar, editar e remover produtos e categorias.",
  },
  {
    title: "Desenvolvedor de Software Voluntário",
    company: "Rener Force",
    period: "Jul 2023 - Ago 2023",
    description:
      "Atribuído a função de criar um sistema de gerenciamento de orçamentos para os clientes da Rener Force, uma oficina mecânica. O sistema desenvolvido é capaz de criar e listar clientes e imprimir orçamentos e notas fiscais em PDF, além do armazenamento em tempo real de todos os dados na nuvem.",
  },
  {
    title: "Jovem Aprendiz",
    company: "Osaka Toyota",
    period: "Fev 2021 - Jun 2022",
    description:
      "Responsável por algumas funções de estoque, organização e armazenamento de todos os produtos expostos nas lojas, entrada e saída de mercadorias, recebimento e inspeção de cargas e produtos.",
  },
];

export interface CourseProps {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  courseFocus: string;
  courseType: string;
  detailsCourseImages: StaticImageData[];
  description: string;
  image: StaticImageData;
}

export const education = [
  {
    id: "uniube",
    title: "Análise e Desenvolvimento de Sistemas",
    subtitle: "Fev. 2023 - em andamento",
    period: "Fev. 2023 - em andamento",
    courseFocus: "Desenv. de Sistemas",
    courseType: "Tecnólogo",
    detailsCourseImages: [uniubeCampus],
    description:
      "Estou matriculado no curso *Tecnólogo* de em *Análise e Desenvolvimento de Sistemas* na *UNIUBE*, com início em *fevereiro de 2023* e previsão de conclusão para *julho de 2025*. Atualmente, estou focado em várias disciplinas e tópicos que estão moldando minha base de conhecimento, onde estes incluem *SQL Server*, *programação em C* e também em *Python*. Além disso, estou estudando *gestão de projetos*, organização e gerenciamento de *sistemas distribuídos* e *Banco de Dados Oracle*.",
    image: uniube,
  },
  {
    id: "jstack",
    title: "JStack",
    subtitle: "Jun. 2022 - em andamento",
    period: "Jun. 2022 - em andamento",
    courseFocus: "Web, Back-End & Mobile",
    courseType: "Bootcamp",
    detailsCourseImages: [fincheck, waiterapp, mycontacts],
    description:
      "Além da faculdade, também estou fazendo cursos por fora como o *JStack*, ministrado pelo professor *Mateus Silva*. O curso é muito amplo e está me ensinando uma variedade de skills essenciais para o *desenvolvimento web*, *back-end* e de *aplicativos mobile*. Desde que comecei o curso em *meados de junho de 2022*, aprendi muito. No back-end, aprendi a usar *Node.js*, *TypeScript*, *Express*, *Docker*, *API REST*, *MongoDB* e *PostgreSQL*. No front-end, aprimorei minhas skills em *ReactJS*, entendendo seu funcionamento por baixo dos panos e como funcionavam seus hooks e funcionalidades. Além disso, o curso aborda o *desenvolvimento mobile* com *React Native* e, particularmente, *é algo que tenho intenções de me aprofundar*.",
    image: jstack,
  },
  {
    id: "ms-learn-dotnet",
    title: "Developing with .NET",
    subtitle: "jul 2023 - em andamento",
    period: "",
    courseFocus: "",
    courseType: "",
    detailsCourseImages: [renerForce, renerForce, renerForce],
    description: "",
    image: microsoft,
  },
  {
    id: "balta",
    title: "Fundamentos do C#",
    subtitle: "jun 2023 - jul 2023.",
    period: "",
    courseFocus: "Fundamentos de Algoritmos",
    courseType: "Bootcamp",
    detailsCourseImages: [renerForce, renerForce, renerForce],
    description: "",
    image: balta,
  },
  {
    id: "rocketseat",
    title: "Ignite ReactJS",
    subtitle: "nov 2021 - abr 2022.",
    period: "nov 2021 - abr 2022",
    courseFocus: "Desenv. Web",
    courseType: "Bootcamp",
    detailsCourseImages: [],
    description: `O curso "*Ignite - ReactJS*" ofertado pela *RocketSeat* aborda principalmente o *desenvolvimento web* com *React + TypeScript*. O bootcamp em si foca principalmente em fazer com que o aluno *aprimore sua percepção e noção de código*, dando ideias de como executar tais tarefas, maneiras diferentes de executá-las e também formas de resolver problemas. Um pouco do que foi ensinado no bootcamp foram assuntos em relação ao mercado atual de desenvolvimento Front-End como: *consumir API's*, *criar SPA's*, *uso de hooks*, *melhoria de performance*, *Server-Side-Rendering* e *Static-Site-Generation (Next.js)*, *Design Systems*, etc... Além disso, também é retratado no bootcamp a *estilização/responsividade* de interfaces utilizando frameworks como *TailwindCSS*, *StyledComponent*, *Sass*, *Radix*, entre outros...`,
    image: rocketseat,
  },
];

export const technologies = [
  {
    icon: <BiLogoTypescript />,
    technology: "TypeScript",
    tag: "Language",
  },
  {
    icon: <BiLogoReact />,
    technology: "React",
    tag: "Library",
  },
  {
    icon: <SiNextdotjs />,
    technology: "NextJS",
    tag: "Framework",
  },
  {
    icon: <FaNodeJs />,
    technology: "Node",
    tag: "Platform",
  },
  {
    icon: <SiDotnet />,
    technology: ".NET",
    tag: "Framework",
  },
  {
    icon: <SiMicrosoftsqlserver />,
    technology: "SQL Server",
    tag: "SGDB",
  },
];
