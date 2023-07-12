import { LanguageContext } from "../App";
import { useContext } from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const language = useContext(LanguageContext);

  const data = [
    {
      title: "Alguns dos meus projetos",
      footer: "Ver todos os projetos",
      firstProject: {
        date: "2023 - present",
        name: "Nome do projeto",
        description:
          "Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.",
        view: "Visualizar",
      },
    },
    {
      title: "Some of my projects",
      footer: "See all projects",
      firstProject: {
        date: "2023 - present",
        name: "Name of project",
        description:
          "Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.",
        view: "View",
      },
    },
  ];

  return (
    <section className="flex flex-col text-left gap-8" id="projects">
      <h1 className="font-medium text-lg">
        {language === "pt-BR" ? data[0].title : data[1].title}
      </h1>

      <div className="flex flex-col gap-8">
        <ProjectCard language={language} data={data} />
      </div>

      <a
        href="https://github.com/DiogoAMV?tab=repositories"
        target="_blank"
        className="group/edit flex flex-row font-medium text-base max-w-fit hover:brightness-50 transition-all gap-2"
      >
        {language === "pt-BR" ? data[0].footer : data[1].footer}
        <span className="group-hover/edit:translate-x-1 transition-all">→</span>
      </a>
    </section>
  );
}
