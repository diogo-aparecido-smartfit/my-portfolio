"use client";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { projects } from "@/app/data";
import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";
import { StaticImageData } from "next/image";
import { MdArrowRightAlt } from "react-icons/md";

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
        <h1 className="text-lg sm:text-2xl font-semibold  text-zinc-200">
          {title}
        </h1>
        {projectsPage ? null : (
          <Link
            href="/experience"
            className="flex items-center rounded-lg bg-darkBg border-[1px] border-darkBorder px-2 py-1 sm:px-5 sm:py-1 w-fit gap-1 sm:gap-2 hover:brightness-150 transition-all justify-between duration-300 group/edit"
          >
            <span className="hidden sm:flex">Ver todos</span>
            <div className="flex max-w-[16px] overflow-hidden transition-all duration-100 ease-in-out">
              <div className="flex group-hover/edit:translate-x-0 -translate-x-7 transition-all duration-700 ease-in-out">
                <MdArrowRightAlt />
                <IoIosArrowForward className="ml-3" />
              </div>
            </div>
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
