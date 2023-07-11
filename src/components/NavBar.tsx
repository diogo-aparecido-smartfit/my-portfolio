import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

interface NavBarProps {
  toggleDarkMode: () => void;
  darkMode: boolean;
}

export default function NavBar({ toggleDarkMode, darkMode }: NavBarProps) {
  return (
    <header>
      <nav className="hidden md:flex px-8 mt-16 items-center flex-row gap-10">
        <a href="#home">Diogo Marques</a>
        <a className="opacity-50 hover:opacity-80" href="#projects">
          Projetos
        </a>
        <a className="opacity-50 hover:opacity-80" href="#education">
          Educação
        </a>
        <a className="opacity-50 hover:opacity-80" href="#contact">
          Contato
        </a>
        <button className="transition-all" onClick={toggleDarkMode}>
          {darkMode ? <BsFillMoonFill /> : <BsFillSunFill />}
        </button>
      </nav>
    </header>
  );
}
