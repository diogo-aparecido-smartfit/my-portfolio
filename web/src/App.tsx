import { useEffect, useState, createContext } from "react";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import StartLoading from "./components/StartLoading";
import CommandBar from "./components/CommandBar";

export const LanguageContext = createContext("");

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("");

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

  useEffect(() => {
    // Função para obter o idioma do navegador
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

  function handleChangeLanguage() {
    if (language === "en-US") {
      setLanguage("pt-BR");
    } else {
      setLanguage("en-US");
    }

    const newLanguage = language === "pt-BR" ? "en-US" : "pt-BR";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  }

  function toggleDarkMode() {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
  }

  function handleLightTheme() {
    const newDarkMode = false;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
  }

  function handleDarkTheme() {
    const newDarkMode = true;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
  }

  return (
    <LanguageContext.Provider value={language}>
      <CommandBar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        handleLightTheme={handleLightTheme}
        handleDarkTheme={handleDarkTheme}
      >
        <html className={darkMode ? "dark" : "light"}>
          <StartLoading darkMode={darkMode} />
          <div className="flex flex-col justify-center my-0 mx-auto sm:w-[610px]">
            <NavBar
              toggleDarkMode={toggleDarkMode}
              handleChangeLanguage={handleChangeLanguage}
              darkMode={darkMode}
            />
            <main className="px-8 flex flex-col gap-28">
              <Home />
              <Projects />
              <Education />
              <Contact />
            </main>
          </div>
        </html>
      </CommandBar>
    </LanguageContext.Provider>
  );
}
