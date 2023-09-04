import ProjectCard from "./ProjectCard";
import { projects } from "../../../data/data";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useTranslation } from "react-i18next";

export default function ProjectList() {
  const { t } = useTranslation();
  const [renderNumber, setRenderNumber] = useState(3);

  const handleShowMoreProjects = () => {
    setRenderNumber(renderNumber + 3);
  };

  return (
    <article className="flex flex-col gap-8">
      {projects?.slice(0, renderNumber).map((project) => (
        <ProjectCard key={project.id} projects={project} />
      ))}
      {renderNumber > 3 ? (
        <button
          onClick={handleShowMoreProjects}
          className="group/edit flex flex-row font-medium text-base max-w-fit hover:brightness-50 transition-all gap-2 items-center"
        >
          {t("projects.footer")}
          <span className="group-hover/edit:scale-150 transition-all">
            <AiOutlinePlus />
          </span>
        </button>
      ) : null}
    </article>
  );
}
