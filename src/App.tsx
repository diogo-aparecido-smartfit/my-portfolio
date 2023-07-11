/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useEffect, useState } from "react";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

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

  function toggleDarkMode() {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
  }

  return (
    <html
      className={
        darkMode
          ? "bg-[#111010] text-[#fff] transition-all"
          : "bg-white text-[#111010] transition-all"
      }
    >
      <div className="flex flex-col justify-center my-0 mx-auto sm:w-[610px]">
        <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <main className="px-8 flex flex-col gap-28">
          <Home />
          <Projects />
          <Education />
          <Contact />
        </main>
      </div>
    </html>
  );
}
