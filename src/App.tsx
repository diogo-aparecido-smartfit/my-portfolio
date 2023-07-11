import { useState } from "react";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  return (
    <html
      className={
        darkMode ? "bg-[#111010] text-[#d4d4d4]" : "bg-white text-[#111010]"
      }
    >
      <div className="flex flex-col justify-center my-0 mx-auto sm:w-[610px]">
        <NavBar />
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
