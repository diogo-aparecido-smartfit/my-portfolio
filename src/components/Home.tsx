import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoReact,
} from "react-icons/bi";
import { SiDotnet, SiCsharp, SiNextdotjs, SiNodedotjs } from "react-icons/si";
import { AiOutlineCloudDownload } from "react-icons/ai";

export default function Home() {
  return (
    <section id="home" className="flex flex-col text-left mt-28 gap-4">
      <h1 className="font-medium text-lg ">Olá, eu me chamo Diogo.</h1>
      <p className="opacity-70">
        Eu tenho 18 anos e sou um desenvolvedor Full-Stack! Moro em Uberlândia
        MG e atualmente estou cursando Análise e Desenvolvimento de Sistemas
        pela{" "}
        <a href="https://uniube.br/" target="_blank" className="underline">
          UNIUBE
        </a>
        , além de estar estudando C# e ASP.NET em cursos por fora.
      </p>
      <ul className="flex flex-row list-none text-xl gap-4 ">
        <li className="hover:scale-150 opacity-70 hover:opacity-100 hover:cursor-pointer transition-all">
          <BiLogoJavascript />
        </li>
        <li className="hover:scale-150 opacity-70 hover:opacity-100  hover:cursor-pointer transition-all">
          <BiLogoTypescript />
        </li>
        <li className="hover:scale-150 opacity-70 hover:opacity-100  hover:cursor-pointer transition-all">
          <BiLogoReact />
        </li>
        <li className="hover:scale-150 opacity-70 hover:opacity-100  hover:cursor-pointer transition-all">
          <SiNextdotjs />
        </li>
        <li className="hover:scale-150 opacity-70 hover:opacity-100  hover:cursor-pointer transition-all">
          <SiNodedotjs />
        </li>
        <li className="hover:scale-150 opacity-70 hover:opacity-100  hover:cursor-pointer transition-all">
          <SiCsharp />
        </li>
        <li className="hover:scale-150 opacity-70 hover:opacity-100  hover:cursor-pointer transition-all">
          <SiDotnet />
        </li>
      </ul>
      <button className="flex flex-row w-fit items-center gap-2 hover:brightness-50 hover:underline">
        <span>Baixar currículo</span>
        <span className="text-xl">
          <AiOutlineCloudDownload />
        </span>
      </button>
    </section>
  );
}
