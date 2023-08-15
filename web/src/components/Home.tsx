import { BiLogoTypescript, BiLogoReact } from "react-icons/bi";
import { SiDotnet, SiCsharp, SiNextdotjs, SiNodedotjs } from "react-icons/si";
import downloadIcon from "../../public/icons/download-icon.json";
import { LanguageContext } from "../App";
import { useContext, useRef } from "react";
import CV from "../../public/DiogoResume.pdf";
import ProfilePhoto from "./ProfilePhoto";
import Lottie from "lottie-react";

export default function Home() {
  const language = useContext(LanguageContext);
  const lottieRef = useRef(null);

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
      <ProfilePhoto />
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
      <a
        href={CV}
        onMouseEnter={() => (lottieRef as any)?.current?.play()}
        onMouseLeave={() => (lottieRef as any)?.current?.stop()}
        download
        target="_blank"
        className="flex flex-row w-fit items-center gap-2 hover:brightness-50 hover:underline"
      >
        <span>{language === "pt-BR" ? data[0].cv : data[1].cv}</span>
        <span
          className={`${
            localStorage.getItem("darkMode") === "true"
              ? "brightness-200" // Classe de estilo para o modo escuro
              : "brightness-50" // Classe de estilo para o modo claro
          }`}
        >
          <Lottie
            lottieRef={lottieRef}
            className="w-6 h-6"
            animationData={downloadIcon}
            loop={false}
            autoplay={false}
          />
        </span>
      </a>
    </section>
  );
}
