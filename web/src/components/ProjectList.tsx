import ProjectCard from "./ProjectCard";
import { projects } from "../../data/data";

interface ProjectListProps {
  renderNumber: number;
}

export default function ProjectList({ renderNumber }: ProjectListProps) {
  return (
    <article className="flex flex-col gap-8">
      {projects?.slice(0, renderNumber).map((project) => (
        <ProjectCard key={project.id} projects={project} />
      ))}
    </article>
  );
}
