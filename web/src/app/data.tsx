import renerForce from "../../public/experience-images/logo/rener-force.svg";
import uniube from "../../public/education-images/uniube.png";
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
    subtitle: "2023 - em andamento",
    image: uniube,
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
