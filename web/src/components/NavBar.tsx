import { useRef } from "react";
import { BsGrid } from "react-icons/bs";
import { useKBar } from "kbar";
import { BiCommand } from "react-icons/bi";

interface NavBarProps {
  toggleDarkMode: () => void;
  handleChangeLanguage?: () => void;
  darkMode: boolean;
}

export default function NavBar({ darkMode }: NavBarProps) {
  const navbarRef = useRef<HTMLDivElement | null>(null);

  const { query } = useKBar();

  return (
    <header>
      <nav className="hidden sm:flex px-8 mt-16 items-center justify-between flex-row gap-10">
        <a className="font-medium hover:underline" href="#home">
          Diogo Marques
        </a>
        <button
          onClick={query.toggle}
          className="flex flex-row font-medium text-xl max-w-fit transition-all gap-2 p-2 hover:bg-zinc-500/30 outline-none hover:border-zinc-500/50 border-transparent border-[1px] rounded-lg"
        >
          <BiCommand />
        </button>
      </nav>

      {/* mobile navbar */}
      <nav
        ref={navbarRef}
        className={`flex sm:hidden h-12 bottom-0 z-10 w-screen items-center justify-between  fixed shadow-navShadow ${
          darkMode ? "bg-[#2a2a2a] transition-all" : "bg-white  transition-all"
        }`}
      >
        <div className="flex flex-row items-center justify-between w-full z-20 p-4">
          <a href="" className="">
            Diogo Marques
          </a>

          <button onClick={query.toggle}>
            <BsGrid />
          </button>
        </div>
      </nav>
    </header>
  );
}
