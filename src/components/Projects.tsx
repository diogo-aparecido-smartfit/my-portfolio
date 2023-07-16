import { LanguageContext } from "../App";
import { useContext, useState } from "react";
import ProjectCard from "./ProjectCard";
import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoReact,
} from "react-icons/bi";
import { SiDotnet } from "react-icons/si";
import ProjectsModal from "./ProjectsModal";

export const projects = [
  {
    id: 1,
    portugueseDate: "2023 - present",
    portugueseName: "Nome do projeto",
    portugueseDescription:
      "Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.",
    portugueseView: "Visualizar",
    date: "2023 - present",
    name: "Name of project",
    description:
      "Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.",
    view: "View",
    deploy: "https://google.com",
    technologies: [
      <BiLogoTypescript />,
      <BiLogoJavascript />,
      <BiLogoReact />,
      <SiDotnet />,
    ],
  },
  {
    id: 2,
    portugueseDate: "2023 - present",
    portugueseName: "Nome do projeto",
    portugueseDescription:
      "Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.",
    portugueseView: "Visualizar",
    date: "2023 - present",
    name: "Name of project",
    description:
      "Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.",
    view: "View",
    deploy: "https://google.com",
    technologies: [
      <BiLogoTypescript />,
      <BiLogoJavascript />,
      <BiLogoReact />,
      <SiDotnet />,
    ],
  },
  {
    id: 3,
    portugueseDate: "2023 - present",
    portugueseName: "Nome do projeto",
    portugueseDescription:
      "Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.",
    portugueseView: "Visualizar",
    date: "2023 - present",
    name: "Name of project",
    description:
      "Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.",
    view: "View",
    deploy: "https://google.com",
    technologies: [
      <BiLogoTypescript />,
      <BiLogoJavascript />,
      <BiLogoReact />,
      <SiDotnet />,
    ],
  },
];

export default function Projects() {
  const [showModal, setShowModal] = useState(false);
  const language = useContext(LanguageContext);

  const data = [
    {
      id: 1,
      title: "Alguns dos meus projetos",
      footer: "Ver todos os projetos",
    },
    {
      title: "Some of my projects",
      footer: "See all projects",
    },
  ];

  return (
    <section className="flex flex-col text-left gap-8" id="projects">
      <h1 className="font-medium text-lg">
        {language === "pt-BR" ? data[0].title : data[1].title}
      </h1>

      <div className="flex flex-col gap-8">
        {/* <ProjectCard language={language} projects={projects} /> */}
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            projects={project}
            language={language}
          />
        ))}
      </div>

      <button
        // onClick={() => setShowModal(true)}
        className="group/edit flex flex-row font-medium text-base max-w-fit hover:brightness-50 transition-all gap-2 cursor-not-allowed brightness-50"
      >
        {language === "pt-BR" ? data[0].footer : data[1].footer}
        <span className="group-hover/edit:translate-x-1 transition-all">→</span>
      </button>
      {showModal ? <ProjectsModal setShowModal={setShowModal} /> : null}
    </section>
  );
}
