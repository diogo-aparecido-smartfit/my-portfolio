import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoReact,
} from "react-icons/bi";
import { SiDotnet } from "react-icons/si";

import renerForce from "./public/experience-images/rener-force.svg";
import uniube from "./public/education-images/uniube.png";
import jstack from "./public/education-images/jstack.png";

export const projects = [
  {
    id: "pr1",
    date: "2023 - present",
    enDate: "2023 - present",
    name: "Nome do projeto Teste pra ver se funfou",
    enName: "Name of project",
    description:
      "Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.",
    enDescription:
      "Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.",
    view: "Visualizar",
    enView: "View",
    image: { uniube },
    github: "",
    deploy: "https://google.com",
    technologies: [
      <BiLogoTypescript />,
      <BiLogoJavascript />,
      <BiLogoReact />,
      <SiDotnet />,
    ],
  },
  {
    id: "pr2",
    date: "2023 - present",
    enDate: "2023 - present",
    name: "Nome do projeto Teste pra ver se funfou dois",
    enName: "Name of project KKKKK",
    description:
      "Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.",
    enDescription:
      "Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.",
    view: "Visualizar",
    enView: "View",
    image: { jstack },
    github: "",
    deploy: "https://google.com",
    technologies: [
      <BiLogoTypescript />,
      <BiLogoJavascript />,
      <BiLogoReact />,
      <SiDotnet />,
    ],
  },
];

export const experience = [
  {
    id: "rener-force",
    date: "2023 - agosto",
    enDate: "2023 - august",
    name: "Sistema de orçamentos para oficina mecânica",
    enName: "Mechanic workshop quote system",
    description:
      "Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.",
    enDescription:
      "Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.",
    image: { renerForce },
  },
];
