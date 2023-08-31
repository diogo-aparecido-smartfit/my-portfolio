import eyeIcon from "../../public/icons/eye-icon.json";
import Lottie from "lottie-react";
import { useRef, useState } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";
import { useTranslation } from "react-i18next";

interface ProjectCardProps {
  projects: {
    id: string;
    date: string;
    enDate: string;
    name: string;
    enName: string;
    description: string;
    enDescription: string;
    view: string;
    enView: string;
    image: string;
    github: string;
    deploy: string;
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

  const lottieRef = useRef(null);

  return (
    <>
      <article className="flex flex-col md:flex-row gap-2">
        <div className="flex flex-col gap-2 md:w-[380px]">
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
              ? projects.description
              : projects.enDescription}
          </p>
          <footer className="flex flex-col gap-2">
            <ul className="flex flex-row list-none text-xl gap-4 ">
              {projects.technologies.map((icon, index) => (
                <li
                  className={`hover:scale-150 hover:text-zinc-500 opacity-70 hover:opacity-100 hover:cursor-pointer transition-all`}
                  key={index}
                >
                  {icon}
                </li>
              ))}
            </ul>
            <div className="flex flex-row gap-3">
              <button
                className="group/edit hover:underline flex flex-row items-center gap-2 max-w-fit transition-all cursor-pointer"
                onMouseEnter={() => (lottieRef as any)?.current?.play()}
                onMouseLeave={() => (lottieRef as any)?.current?.stop()}
                onClick={handleVisualize}
              >
                {language === "pt-BR" ? "Mais detalhes" : "More details"}
                <span
                  className={`${
                    localStorage.getItem("darkMode") === "true"
                      ? "brightness-150"
                      : "brightness-50"
                  }`}
                >
                  <Lottie
                    lottieRef={lottieRef}
                    className="w-6 h-6"
                    animationData={eyeIcon}
                    loop={false}
                    autoplay={false}
                  />
                </span>
              </button>
            </div>
          </footer>
        </div>

        <div className="flex flex-col relative">
          <img
            className="w-[145px] h-[145px] rounded-2xl relative"
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
