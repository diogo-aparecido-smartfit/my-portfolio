"use client";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { projects } from "@/app/data";
import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";
import { StaticImageData } from "next/image";
import { MdArrowRightAlt } from "react-icons/md";
import { usePathname } from "next/navigation";

interface ProjectListProps {
  pageType: "home" | "projects" | "detailProject";
}

interface ProjectsProps {
  id: string;
  title: string;
  subtitle: string;
  github: string;
  image: StaticImageData;
}

export default function ProjectList({ pageType }: ProjectListProps) {
  const [projectsData, setProjectsData] = useState<ProjectsProps[]>();
  const pathname = usePathname();

  useEffect(() => {
    const data = projects;
    setProjectsData(data);
  }, []);

  const renderFilteredProjects = (
    projects: ProjectsProps[],
    pageType: string
  ) => {
    switch (pageType) {
      case "home":
        return projects.slice(0, 2).reverse();
      case "detailProject":
        return projects
          .filter((project) => !pathname.includes(project.id))
          .slice(0, 2)
          .reverse();
      case "projects":
        return projects.slice().reverse();
      default:
        return [];
    }
  };

  const filteredProjects = projectsData
    ? renderFilteredProjects(projectsData, pageType)
    : [];

  return (
    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full h-full max-w-full">
      {filteredProjects.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          title={project.title}
          subtitle={project.subtitle}
          image={project.image}
          github={project.github}
        />
      ))}
    </ul>
  );
}
