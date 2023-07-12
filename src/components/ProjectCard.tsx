/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { PiEyeClosedBold, PiEyeBold } from "react-icons/pi";
import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoReact,
} from "react-icons/bi";
import { SiDotnet, SiCsharp, SiNextdotjs, SiNodedotjs } from "react-icons/si";

interface ProjectCardProps {
  language: string;
  data: {
    title: string;
    footer: string;
    firstProject: {
      date: string;
      name: string;
      description: string;
      view: string;
    };
  }[];
}

export default function ProjectCard({ language, data }: ProjectCardProps) {
  return (
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
  );
}
