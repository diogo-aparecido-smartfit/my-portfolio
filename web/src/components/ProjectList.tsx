import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";
import { projects } from "../../data/data";

interface ProjectListProps {
  renderNumber: number;
}

export default function ProjectList({ renderNumber }: ProjectListProps) {
  const { i18n } = useTranslation();
  const language = i18n.language;

  return (
    <article className="flex flex-col gap-8">
      {projects?.slice(0, renderNumber).map((project) => (
        <ProjectCard key={project.id} projects={project} language={language} />
      ))}
    </article>
  );
}
