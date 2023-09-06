import { useEffect, useState, createContext } from "react";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import StartLoading from "./components/StartLoading";
import CommandBar from "./components/CommandBar";

import { useTranslation } from "react-i18next";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";

export const DarkModeContext = createContext(false);

export default function App() {
  const { i18n } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);

  // Altera o tema da aplicação
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

  // Altera o idioma da aplicação
  useEffect(() => {
    // Função para obter o idioma do navegador
    const getBrowserLanguage = () => {
      const userLanguage = navigator.language || navigator.language;
      return userLanguage;
    };

    // Recupera o idioma salvo no Local Storage
    const savedLanguage = localStorage.getItem("language");

    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    } else {
      // Obtém o idioma do navegador e atualiza o estado
      const browserLanguage = getBrowserLanguage();
      if (browserLanguage === "pt-BR" || browserLanguage === "pt") {
        i18n.changeLanguage("pt-BR");
      } else if (browserLanguage === "en-US" || browserLanguage === "en") {
        i18n.changeLanguage("en-US");
      } else {
        i18n.changeLanguage("pt-BR");
      }
    }
  }, [i18n]);

  function toggleDarkMode() {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
  }

  function handleLightTheme() {
    const newDarkMode = false;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
    window.location.reload();
  }

  function handleDarkTheme() {
    const newDarkMode = true;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
    window.location.reload();
  }

  return (
    <DarkModeContext.Provider value={darkMode}>
      <CommandBar
        language={i18n.language}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        handleLightTheme={handleLightTheme}
        handleDarkTheme={handleDarkTheme}
      >
        <html className={darkMode ? "dark" : "light"}>
          <StartLoading darkMode={darkMode} />
          <div className="flex flex-col justify-center my-0 mx-auto sm:w-[610px] ">
            <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            <main className="px-8 flex flex-col gap-28">
              <Home />
              <Experience />
              <Projects />
              <Education />
              <Contact />
            </main>
          </div>
        </html>
      </CommandBar>
    </DarkModeContext.Provider>
  );
}
