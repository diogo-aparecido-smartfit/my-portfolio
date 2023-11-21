"use client";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { projects } from "@/app/data";
import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";
import { StaticImageData } from "next/image";

interface ProjectListProps {
  title?: string;
  projectsPage?: boolean;
}

interface ProjectsProps {
  id: string;
  title: string;
  subtitle: string;
  github: string;
  image: StaticImageData;
}

export default function ProjectList({ projectsPage, title }: ProjectListProps) {
  const [projectsData, setProjectsData] = useState<ProjectsProps[]>();

  useEffect(() => {
    const data = projects;
    setProjectsData(data);
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center mb-4">
        <h1 className="text-xl sm:text-2xl font-semibold  text-zinc-200">
          {title}
        </h1>
        {projectsPage ? null : (
          <Link
            href="/experience"
            className="flex items-center rounded-lg bg-darkBg border-[1px] border-darkBorder px-5 py-1 w-fit gap-2 hover:brightness-150 transition-all justify-between duration-300"
          >
            Ver todos <IoIosArrowForward />
          </Link>
        )}
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full h-full max-w-full">
        {projectsData &&
          projectsData.map((project) => (
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
    </div>
  );
}
