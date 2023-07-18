import { useContext } from "react";
import { LanguageContext } from "../App";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

interface ProjectListProps {
  renderNumber: number;
}

export default function ProjectList({ renderNumber }: ProjectListProps) {
  const language = useContext(LanguageContext);

  return (
    <article className="flex flex-col gap-8">
      {projects.slice(0, renderNumber).map((project) => (
        <ProjectCard key={project.id} projects={project} language={language} />
      ))}
    </article>
  );
}
