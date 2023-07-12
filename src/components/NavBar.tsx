import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { GiBrazilFlag } from "react-icons/gi";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { LanguageContext } from "../App";
import { useContext } from "react";

interface NavBarProps {
  toggleDarkMode: () => void;
  handleChangeLanguage: () => void;
  darkMode: boolean;
}

export default function NavBar({
  toggleDarkMode,
  darkMode,
  handleChangeLanguage,
}: NavBarProps) {
  const language = useContext(LanguageContext);

  const data = [
    {
      projects: "Projetos",
      education: "Educação",
      contact: "Contato",
    },
    {
      projects: "Projects",
      education: "Education",
      contact: "Contact",
    },
  ];

  return (
    <header>
      <nav className="hidden md:flex px-8 mt-16 items-center flex-row gap-10">
        <a href="#home">Diogo Marques</a>
        <a className="opacity-50 hover:opacity-80" href="#projects">
          {language === "pt-BR" ? data[0].projects : data[1].projects}
        </a>
        <a className="opacity-50 hover:opacity-80" href="#education">
          {language === "pt-BR" ? data[0].education : data[1].education}
        </a>
        <a className="opacity-50 hover:opacity-80" href="#contact">
          {language === "pt-BR" ? data[0].contact : data[1].contact}
        </a>
        <button
          className="hover:scale-125 transition-all"
          onClick={handleChangeLanguage}
        >
          {language === "en-US" ? <LiaFlagUsaSolid /> : <GiBrazilFlag />}
        </button>
        <button
          className="hover:scale-125 transition-all"
          onClick={toggleDarkMode}
        >
          {darkMode ? <BsFillMoonFill /> : <BsFillSunFill />}
        </button>
      </nav>
    </header>
  );
}
