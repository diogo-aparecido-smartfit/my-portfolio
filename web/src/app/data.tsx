import renerForce from "../../public/experience-images/mockup/rener-force.png";
import uniube from "../../public/education-images/uniube.png";
import jstack from "../../public/education-images/jstack.png";
import balta from "../../public/education-images/balta.png";
import rocketseat from "../../public/education-images/rocketseat.png";
import microsoft from "../../public/education-images/microsoft.png";
import { BiLogoTypescript, BiLogoReact } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { SiDotnet, SiMicrosoftsqlserver, SiNextdotjs } from "react-icons/si";

export const projects = [
  {
    id: 1,
    title: "Rener Force - Voluntário",
    subtitle: "Sistema de orçamentos para oficina mecânica.",
    image: renerForce,
  },
];

export const education = [
  {
    id: 1,
    title: "Análise e Desenvolvimento de Sistemas ・ UNIUBE",
    subtitle: "fev 2023 - em andamento.",
    image: uniube,
  },
  {
    id: 2,
    title: "Curso Full-Stack ・ JStack",
    subtitle: "jun 2022 - em andamento.",
    image: jstack,
  },
  {
    id: 3,
    title: "Developing with .NET ・ Microsoft Learn",
    subtitle: "jul 2023 - em andamento",
    image: microsoft,
  },
  {
    id: 4,
    title: "Fundamentos do C# ・ Balta.io",
    subtitle: "jun 2023 - jul 2023.",
    image: balta,
  },
  {
    id: 5,
    title: "Ignite ReactJS ・ RocketSeat",
    subtitle: "nov 2021 - abr 2022.",
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
