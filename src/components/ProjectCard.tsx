import { useState } from "react";
import { PiEyeClosedBold, PiEyeBold } from "react-icons/pi";
interface ProjectCardProps {
  language: string;
  projects: {
    id: number;
    portugueseDate: string;
    portugueseName: string;
    portugueseDescription: string;
    portugueseView: string;
    date: string;
    name: string;
    description: string;
    view: string;
    deploy: string;
    technologies: JSX.Element[];
  };
}

export default function ProjectCard({ language, projects }: ProjectCardProps) {
  const [isLoading, setIsLoading] = useState(false);

  function handleIsLoading() {
    if (isLoading === true) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }

  handleIsLoading();

  return isLoading ? (
    <div className=" shadow rounded-md p-4 h-[180px] w-[533px] mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 w-10 bg-gray-400 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-gray-400 rounded col-span-2"></div>
              <div className="h-2 bg-gray-400 rounded col-span-2"></div>
              <div className="h-2 bg-gray-400 rounded"></div>
            </div>
            <div className="h-2 bg-gray-400 rounded"></div>
            <div className="grid grid-cols-10 gap-4">
              <div className="h-4 bg-gray-400 rounded col-span-1"></div>
              <div className="h-4 bg-gray-400 rounded col-span-1"></div>
              <div className="h-4 bg-gray-400 rounded col-span-1"></div>
              <div className="h-4 bg-gray-400 rounded col-span-1"></div>
            </div>
            <div className="h-2 w-16 bg-gray-400 rounded"></div>
          </div>
        </div>
        <div className="rounded-2xl bg-gray-400 h-[145px] w-[145px]"></div>
      </div>
    </div>
  ) : (
    <article className="flex flex-col md:flex-row gap-2">
      <div className="flex flex-col gap-2 md:w-[380px]">
        <header>
          <p className="text-xs opacity-50">
            {language === "pt-BR" ? projects.portugueseDate : projects.date}
          </p>
          <h1 className="font-medium text-base">
            {language === "pt-BR" ? projects.portugueseName : projects.name}
          </h1>
        </header>
        <p className="font-normal text-base opacity-70">
          {language === "pt-BR"
            ? projects.portugueseDescription
            : projects.description}
        </p>
        <footer className="flex flex-col gap-2">
          <ul className="flex flex-row list-none text-xl gap-4 ">
            {" "}
            {projects.technologies.map((Icon, index) => (
              <li
                className="hover:scale-150 hover:text-white opacity-70 hover:opacity-100 hover:cursor-pointer transition-all"
                key={index}
              >
                {Icon}
              </li>
            ))}
          </ul>
          <a
            className="group/edit underline flex flex-row items-center gap-2 max-w-fit transition-all"
            target="_blank"
            href={projects.deploy}
          >
            {language === "pt-BR" ? projects.portugueseView : projects.view}
            <span className="group-hover/edit:hidden">
              <PiEyeClosedBold />
            </span>
            <span className="hidden group-hover/edit:flex">
              <PiEyeBold />
            </span>
          </a>
        </footer>
      </div>

      <div className="flex flex-col relative">
        <img
          className="w-[145px] h-[145px] rounded-2xl relative"
          src="https://source.unsplash.com/random"
          alt="Imagem do projeto"
        />
      </div>
    </article>
  );
}
