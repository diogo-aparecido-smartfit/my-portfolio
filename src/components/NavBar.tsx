import { GiBrazilFlag } from "react-icons/gi";
import { FiHome } from "react-icons/fi";
import {
  LiaFlagUsaSolid,
  LiaGraduationCapSolid,
  LiaPhoneSolid,
} from "react-icons/lia";
import { MdOutlineWorkOutline } from "react-icons/md";
import { LanguageContext } from "../App";
import { useContext, useEffect, useRef, useState } from "react";
import { BsGrid, BsMoon, BsSun } from "react-icons/bs";

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
  const [isNavbarOpen, setIsNavbarOpen] = useState(true);
  const language = useContext(LanguageContext);
  const navbarRef = useRef<HTMLDivElement | null>(null);

  // closes the mobile navbar if the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsNavbarOpen(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // open/close the mobile navbar
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const data = [
    {
      home: "Início",
      projects: "Projetos",
      education: "Educação",
      contact: "Contato",
      lightTheme: "Claro",
      darkTheme: "Escuro",
      portuguese: "Português",
      english: "Inglês",
    },
    {
      home: "Home",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
      lightTheme: "Light",
      darkTheme: "Dark",
      portuguese: "Portuguese",
      english: "English",
    },
  ];

  return (
    <header>
      <nav className="hidden sm:flex px-8 mt-16 items-center flex-row gap-10">
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
          {darkMode ? <BsMoon /> : <BsSun />}
        </button>
      </nav>
      <nav
        ref={navbarRef}
        className={`flex sm:hidden h-12 bottom-0 z-10 w-screen items-center justify-between  fixed ${
          darkMode ? "bg-[#191719] transition-all" : "bg-white  transition-all"
        }`}
      >
        <div className="flex flex-row items-center justify-between w-full z-20 p-4">
          <a href="" className="">
            Diogo Marques
          </a>

          <button onClick={toggleNavbar}>
            <BsGrid />
          </button>
        </div>
        <div
          className={`${
            isNavbarOpen ? "-bottom-full" : "bottom-0"
          } flex flex-row transition-all duration-500 w-screen fixed h-72 pt-8 px-6 pb-16 rounded-t-2xl justify-center shadow-navShadow z-10 ${
            darkMode
              ? "bg-[#191719] text-[#fff] transition-all"
              : "bg-white text-[#111010] transition-all"
          } `}
        >
          <ul className="grid flex-row flex-wrap font-medium text-base gap-8 text-center grid-cols-3">
            <li>
              <a
                className="flex flex-col text-center items-center justify-center"
                href="#home"
              >
                <span className="text-xl">
                  <FiHome />
                </span>
                {language === "pt-BR" ? data[0].home : data[1].home}
              </a>
            </li>
            <li>
              <a
                className="flex flex-col text-center items-center justify-center"
                href="#projects"
              >
                <span className="text-xl">
                  <MdOutlineWorkOutline />
                </span>
                {language === "pt-BR" ? data[0].projects : data[1].projects}
              </a>
            </li>
            <li>
              <a
                className="flex flex-col text-center items-center justify-center"
                href="#education"
              >
                <span className="text-xl">
                  <LiaGraduationCapSolid />
                </span>
                {language === "pt-BR" ? data[0].education : data[1].education}
              </a>
            </li>
            <li>
              <a
                className="flex flex-col text-center items-center justify-center"
                href="#contact"
                onClick={toggleNavbar}
              >
                <span className="text-xl">
                  <LiaPhoneSolid />
                </span>
                {language === "pt-BR" ? data[0].contact : data[1].contact}
              </a>
            </li>
            <li>
              <span className="flex flex-col text-center items-center justify-center">
                <button
                  className="hover:scale-125 text-xl transition-all"
                  onClick={toggleDarkMode}
                >
                  {darkMode ? <BsMoon /> : <BsSun />}
                </button>
                {darkMode
                  ? language === "pt-BR"
                    ? data[0].darkTheme
                    : data[1].darkTheme
                  : language === "pt-BR"
                  ? data[0].lightTheme
                  : data[1].lightTheme}
              </span>
            </li>
            <li>
              <span className="flex flex-col text-center items-center justify-center">
                <button
                  className="hover:scale-125 transition-all"
                  onClick={handleChangeLanguage}
                >
                  {language === "en-US" ? (
                    <GiBrazilFlag />
                  ) : (
                    <LiaFlagUsaSolid />
                  )}
                </button>
                {language === "en-US"
                  ? language === "en-US"
                    ? data[1].portuguese
                    : data[0].portuguese
                  : language === "en-US"
                  ? data[1].english
                  : data[0].english}
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
