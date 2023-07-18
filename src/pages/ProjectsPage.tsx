/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../App";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";
import ProjectList from "../components/ProjectList";

export default function ProjectsPage() {
  const language = useContext(LanguageContext);
  const [darkMode, setDarkMode] = useState(false);

  const data = [
    {
      id: 1,
      title: "Alguns dos meus projetos",
      footer: "Voltar para o início",
    },
    {
      title: "Some of my projects",
      footer: "Back to home",
    },
  ];

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

  console.log(darkMode);

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
          <ProjectList renderNumber={projects.length} />
        </section>
      </div>
    </body>
  );
}
