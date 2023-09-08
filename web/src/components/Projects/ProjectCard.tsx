import { useState } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";
import { useTranslation } from "react-i18next";
import MoreDetailsButton from "../MoreDetailsButton";

interface ProjectCardProps {
  projects: {
    id: string;
    date: string;
    enDate: string;
    name: string;
    enName: string;
    description: JSX.Element;
    enDescription: JSX.Element;
    shortDescription: string;
    enShortDescription: string;
    image: string;
    mockupImage: string;
    github: string;
    deploy: string;
    exampleUrl: string;
    technologies: JSX.Element[];
  };
}

export default function ProjectCard({ projects }: ProjectCardProps) {
  const { i18n } = useTranslation();
  const language = i18n.language;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVisualize = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <article className="flex flex-col md:flex-row gap-2 hover:bg-zinc-500/30 outline-none hover:border-zinc-500/50 border-transparent border-[1px] rounded-lg p-2 transition-all">
        <div className="flex flex-col gap-2 md:w-[380px] p-1">
          <header>
            <p className="text-xs opacity-50">
              {language === "pt-BR" ? projects.date : projects.enDate}
            </p>
            <h1 className="font-medium text-base">
              {language === "pt-BR" ? projects.name : projects.enName}
            </h1>
          </header>
          <p className="font-normal text-base opacity-70">
            {language === "pt-BR"
              ? projects.shortDescription
              : projects.enShortDescription}
          </p>
          <footer className="flex flex-col gap-2">
            <div className="flex flex-row gap-3">
              <MoreDetailsButton handleFunction={handleVisualize} />
            </div>
          </footer>
        </div>

        <div className="flex flex-col relative">
          <img
            className="min-w-[145px] w-[145px] h-[145px] rounded-2xl relative"
            src={projects.image}
            alt="Imagem do projeto"
          />
        </div>
      </article>

      {isModalOpen ? (
        <ProjectDetailsModal
          setIsModalOpen={setIsModalOpen}
          projects={projects}
        />
      ) : null}
    </>
  );
}
