import { PiEyeClosedBold, PiEyeBold } from "react-icons/pi";
import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoReact,
} from "react-icons/bi";
import { SiDotnet, SiCsharp, SiNextdotjs, SiNodedotjs } from "react-icons/si";
import { LanguageContext } from "../App";
import { useContext } from "react";

export default function Projects() {
  const language = useContext(LanguageContext);

  const data = [
    {
      title: "Alguns dos meus projetos",
      footer: "Ver todos os projetos",
      firstProject: {
        date: "2023 - present",
        name: "Nome do projeto",
        description:
          "Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.",
        view: "Visualizar",
      },
    },
    {
      title: "Some of my projects",
      footer: "See all projects",
      firstProject: {
        date: "2023 - present",
        name: "Name of project",
        description:
          "Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.",
        view: "View",
      },
    },
  ];

  return (
    <section className="flex flex-col text-left gap-8" id="projects">
      <h1 className="font-medium text-lg">
        {language === "pt-BR" ? data[0].title : data[1].title}
      </h1>

      <div className="flex flex-col gap-8">
        <article className="flex flex-col md:flex-row gap-2">
          <div className="flex flex-col gap-2 md:w-[380px]">
            <header>
              <p className="text-xs opacity-50">
                {language === "pt-BR"
                  ? data[0].firstProject.date
                  : data[1].firstProject.date}
              </p>
              <h1 className="font-medium text-base">
                {language === "pt-BR"
                  ? data[0].firstProject.name
                  : data[1].firstProject.name}
              </h1>
            </header>
            <p className="font-normal text-base opacity-70">
              {language === "pt-BR"
                ? data[0].firstProject.description
                : data[1].firstProject.description}
            </p>
            <footer className="flex flex-col gap-2">
              <ul className="flex flex-row list-none text-xl gap-4 ">
                <li className="hover:scale-150 hover:text-yellow-400 opacity-70 hover:opacity-100 hover:cursor-pointer transition-all">
                  <BiLogoJavascript />
                </li>
                <li className="hover:scale-150 hover:text-blue-500 opacity-70 hover:opacity-100  hover:cursor-pointer transition-all">
                  <BiLogoTypescript />
                </li>
                <li className="hover:scale-150 hover:text-blue-500 opacity-70 hover:opacity-100  hover:cursor-pointer transition-all">
                  <BiLogoReact />
                </li>
                <li className="hover:scale-150 hover:text-gray-600 opacity-70 hover:opacity-100  hover:cursor-pointer transition-all">
                  <SiNextdotjs />
                </li>
                <li className="hover:scale-150 hover:text-green-300 opacity-70 hover:opacity-100  hover:cursor-pointer transition-all">
                  <SiNodedotjs />
                </li>
                <li className="hover:scale-150 hover:text-purple-500 opacity-70 hover:opacity-100  hover:cursor-pointer transition-all">
                  <SiCsharp />
                </li>
                <li className="hover:scale-150 hover:bg-purple-800 opacity-70 hover:opacity-100  hover:cursor-pointer transition-all">
                  <SiDotnet />
                </li>
              </ul>
              <a
                className="group/edit underline flex flex-row items-center gap-2 max-w-fit transition-all"
                target="_blank"
                href=""
              >
                {language === "pt-BR"
                  ? data[0].firstProject.view
                  : data[1].firstProject.view}{" "}
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
      </div>

      <a
        href="https://github.com/DiogoAMV?tab=repositories"
        target="_blank"
        className="group/edit flex flex-row font-medium text-base max-w-fit hover:brightness-50 transition-all gap-2"
      >
        {language === "pt-BR" ? data[0].footer : data[1].footer}
        <span className="group-hover/edit:translate-x-1 transition-all">→</span>
      </a>
    </section>
  );
}
