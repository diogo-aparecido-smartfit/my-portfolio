import { BiLogoTypescript, BiLogoReact } from "react-icons/bi";
import { SiDotnet, SiCsharp, SiNextdotjs, SiNodedotjs } from "react-icons/si";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { LanguageContext } from "../App";
import { useContext } from "react";

export default function Home() {
  const language = useContext(LanguageContext);

  const data = [
    {
      name: "Olá, eu me chamo Diogo.",
      about:
        "Eu tenho 18 anos e sou um desenvolvedor Full-Stack! Moro em Uberlândia MG e atualmente estou cursando Análise e Desenvolvimento de Sistemas pela UNIUBE, além de estar estudando C# e ASP.NET em cursos por fora.",
      cv: "Baixar Currículo",
    },
    {
      name: "Hello, my name is Diogo.",
      about:
        "I'm 18 years old and a full-stack developer! I live in Uberlândia MG and I'm currently studying Systems Analysis and Development at UNIUBE, in addition to studying C# and ASP.NET in courses abroad.",
      cv: "Download CV",
    },
  ];

  return (
    <section id="home" className="flex flex-col text-left mt-28 gap-4">
      <h1 className="font-medium text-lg ">
        {language === "pt-BR" ? data[0].name : data[1].name}
      </h1>
      <p className="opacity-70">
        {language === "pt-BR" ? data[0].about : data[1].about}
      </p>
      <ul className="flex flex-row list-none text-xl gap-4 ">
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
      <button className="flex flex-row w-fit items-center gap-2 hover:brightness-50 hover:underline">
        <span>{language === "pt-BR" ? data[0].cv : data[1].cv}</span>
        <span className="text-xl">
          <AiOutlineCloudDownload />
        </span>
      </button>
    </section>
  );
}
