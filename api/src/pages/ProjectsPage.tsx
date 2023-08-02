import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProjectList from "../components/ProjectList";

export default function ProjectsPage() {
  const [language, setLanguage] = useState("");
  const [renderNumber, setRenderNumber] = useState(3);
  const [darkMode, setDarkMode] = useState(false);

  const data = [
    {
      id: 1,
      title: "Alguns dos meus projetos",
      showMore: "Ver mais projetos",
      footer: "Voltar para o início",
    },
    {
      title: "Some of my projects",
      showMore: "Show more projects",
      footer: "Back to home",
    },
  ];

  // obtém a preferência de tema no localstorage
  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode) {
      setDarkMode(JSON.parse(storedDarkMode));
    } else {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkMode(prefersDarkMode);
    }
  }, []);

  // Função para obter o idioma do navegador
  useEffect(() => {
    const getBrowserLanguage = () => {
      const userLanguage = navigator.language || navigator.language;
      return userLanguage;
    };

    // Recupera o idioma salvo no Local Storage
    const savedLanguage = localStorage.getItem("language");

    if (savedLanguage) {
      setLanguage(savedLanguage);
    } else {
      // Obtém o idioma do navegador e atualiza o estado
      const browserLanguage = getBrowserLanguage();
      if (browserLanguage === "pt-BR" || browserLanguage === "pt") {
        setLanguage("pt-BR");
      } else if (browserLanguage === "en-US" || browserLanguage === "en") {
        setLanguage("en-US");
      } else {
        setLanguage("pt-BR");
      }
    }
  }, []);

  // lista mais 3 projetos ao clicar no botão
  const handleShowMoreProjects = () => {
    setRenderNumber(renderNumber + 3);
  };

  return (
    <body className={`${darkMode ? "dark" : "light"}`}>
      <div className="flex flex-col justify-center items-center my-0 mx-auto sm:w-[610px]">
        <section className="px-8 flex flex-col my-20 gap-8">
          <Link
            to="/"
            className="group/edit flex flex-row font-medium text-base max-w-fit hover:brightness-50 transition-all gap-2"
          >
            {language === "pt-BR" ? data[0].footer : data[1].footer}
            <span className="group-hover/edit:translate-x-1 transition-all">
              →
            </span>
          </Link>
          <ProjectList renderNumber={renderNumber} />
          <button
            onClick={handleShowMoreProjects}
            className="group/edit flex flex-row font-medium text-base max-w-fit hover:brightness-50 transition-all gap-2"
          >
            {language === "pt-BR" ? data[0].showMore : data[1].showMore}
            <span className="group-hover/edit:translate-x-1 transition-all">
              →
            </span>
          </button>
        </section>
      </div>
    </body>
  );
}
