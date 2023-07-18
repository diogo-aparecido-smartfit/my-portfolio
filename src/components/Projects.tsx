import { LanguageContext } from "../App";
import { useContext } from "react";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectList from "./ProjectList";

export default function Projects() {
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

      <ProjectList renderNumber={2} />

      <Link
        to="projects"
        className="group/edit flex flex-row font-medium text-base max-w-fit hover:brightness-50 transition-all gap-2"
      >
        {language === "pt-BR" ? data[0].footer : data[1].footer}
        <span className="group-hover/edit:translate-x-1 transition-all">→</span>
      </Link>
    </section>
  );
}
