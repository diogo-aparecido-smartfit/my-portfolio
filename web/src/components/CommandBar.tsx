import { useRef, forwardRef } from "react";
import Lottie from "lottie-react";
import { GiBrazilFlag } from "react-icons/gi";
import { LiaFlagUsaSolid } from "react-icons/lia";

import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  useMatches,
  KBarResults,
  ActionImpl,
} from "kbar";

import copyLinkIcon from "../../public/icons/url-icon.json";
import homeIcon from "../../public/icons/home-icon.json";
import cvIcon from "../../public/icons/cv-icon.json";
import mailIcon from "../../public/icons/mail-icon.json";
import toolIcon from "../../public/icons/tool-icon.json";
import lightIcon from "../../public/icons/light-icon.json";
import nightIcon from "../../public/icons/night-icon.json";
import languageIcon from "../../public/icons/language-icon.json";
import themeIcon from "../../public/icons/theme-icon.json";
import projectsIcon from "../../public/icons/projects-icon.json";
import educationIcon from "../../public/icons/education-icon.json";
import contactIcon from "../../public/icons/contact-icon.json";
import React from "react";

interface CommandBarProps {
  handlePortugueseLanguage: () => void;
  handleEnglishLanguage: () => void;
  handleLightTheme: () => void;
  handleDarkTheme: () => void;
  toggleDarkMode: () => void;
  darkMode: boolean;
  children: React.ReactNode;
}

export default function CommandBar({
  darkMode,
  children,
  handleLightTheme,
  handleEnglishLanguage,
  handlePortugueseLanguage,
  handleDarkTheme,
}: CommandBarProps) {
  const copyLinkRef = useRef(null);
  const cvRef = useRef(null);
  const emailRef = useRef(null);
  const homeRef = useRef(null);
  const settingsRef = useRef(null);
  const themeRef = useRef(null);
  const lightRef = useRef(null);
  const darkRef = useRef(null);
  const languageRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const actions = [
    {
      id: "url",
      name: "Copiar URL",
      shortcut: ["U"],
      keywords: "link url",
      section: "GERAL",
      perform: () => copyLink(),
      icon: (
        <Lottie
          lottieRef={copyLinkRef}
          className="w-6 h-6"
          animationData={copyLinkIcon}
          loop={false}
          autoplay={false}
        />
      ),
    },
    {
      id: "email",
      name: "Mandar email",
      shortcut: ["M"],
      keywords: "mail email mailto",
      section: "GERAL",
      perform: () => window.open("mailto:contato.diogoamv@gmail.com", "_blank"),
      icon: (
        <Lottie
          lottieRef={emailRef}
          className="w-6 h-6"
          animationData={mailIcon}
          loop={false}
          autoplay={false}
        />
      ),
    },
    {
      id: "cv",
      name: "Baixar currículo",
      shortcut: ["C", "V"],
      keywords: "cv curriculo curriculum",
      section: "GERAL",
      perform: () => scrollToSection("projects"),
      icon: (
        <Lottie
          lottieRef={cvRef}
          className="w-6 h-6"
          animationData={cvIcon}
          loop={false}
          autoplay={false}
        />
      ),
    },
    {
      id: "home",
      name: "Home",
      shortcut: ["H"],
      keywords: "home index início inicio",
      section: "NAVEGAR",
      perform: () => (window.location.pathname = "/"),
      icon: (
        <Lottie
          lottieRef={homeRef}
          className="w-6 h-6"
          animationData={homeIcon}
          loop={false}
          autoplay={false}
        />
      ),
    },
    {
      id: "projects",
      name: "Projetos",
      shortcut: ["P"],
      keywords: "projetos projects",
      section: "NAVEGAR",
      perform: () => scrollToSection("projects"),
      icon: (
        <Lottie
          lottieRef={projectsRef}
          className="w-6 h-6"
          animationData={projectsIcon}
          loop={false}
          autoplay={false}
        />
      ),
    },
    {
      id: "education",
      name: "Educação",
      shortcut: ["E"],
      keywords: "education educação",
      section: "NAVEGAR",
      perform: () => scrollToSection("education"),
      icon: (
        <Lottie
          lottieRef={educationRef}
          className="w-6 h-6"
          animationData={educationIcon}
          loop={false}
          autoplay={false}
        />
      ),
    },
    {
      id: "contact",
      name: "Contato",
      shortcut: ["C", "M"],
      keywords: "contact contato",
      section: "NAVEGAR",
      perform: () => scrollToSection("contact"),
      icon: (
        <Lottie
          lottieRef={contactRef}
          className="w-6 h-6"
          animationData={contactIcon}
          loop={false}
          autoplay={false}
        />
      ),
    },
    {
      id: "settings",
      name: "Configurações",
      shortcut: ["T"],
      keywords: "preferences preferências configurações settings theme tema",
      section: "PREFERÊNCIAS",
      icon: (
        <Lottie
          lottieRef={settingsRef}
          className="w-6 h-6"
          animationData={toolIcon}
          loop={false}
          autoplay={false}
        />
      ),
    },
    {
      id: "theme",
      name: "Alterar tema",
      shortcut: ["C", "T"],
      keywords: "preferences preferências configurações settings theme tema",
      section: "PREFERÊNCIAS",
      icon: (
        <Lottie
          lottieRef={themeRef}
          className="w-6 h-6"
          animationData={themeIcon}
          loop={false}
          autoplay={false}
        />
      ),
      parent: "settings",
    },
    {
      id: "darkTheme",
      name: "Tema escuro",
      shortcut: ["T", "D"],
      keywords: "escuro dark",
      section: "PREFERÊNCIAS",
      perform: () => handleDarkTheme(),
      icon: (
        <Lottie
          lottieRef={darkRef}
          className="w-6 h-6"
          animationData={nightIcon}
          loop={false}
          autoplay={false}
        />
      ),
      parent: "theme",
    },
    {
      id: "darkTheme",
      name: "Tema claro",
      shortcut: ["T", "L"],
      keywords: "claro light",
      section: "PREFERÊNCIAS",
      perform: () => handleLightTheme(),
      icon: (
        <Lottie
          lottieRef={lightRef}
          className="w-6 h-6"
          animationData={lightIcon}
          loop={false}
          autoplay={false}
        />
      ),
      parent: "theme",
    },
    {
      id: "language",
      name: "Alterar Idioma",
      shortcut: ["T", "I"],
      keywords: "idioma language",
      section: "PREFERÊNCIAS",
      icon: (
        <Lottie
          lottieRef={languageRef}
          className="w-6 h-6"
          animationData={languageIcon}
          loop={false}
          autoplay={false}
        />
      ),
      parent: "settings",
    },
    {
      id: "english",
      name: "English",
      keywords: "english inglês",
      section: "PREFERÊNCIAS",
      perform: () => handleEnglishLanguage(),
      icon: <LiaFlagUsaSolid />,
      parent: "language",
    },
    {
      id: "portuguese",
      name: "Português",
      keywords: "portuguese português",
      section: "PREFERÊNCIAS",
      perform: () => handlePortugueseLanguage(),
      icon: <GiBrazilFlag />,
      parent: "language",
    },
  ];

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner
          className={`p-2 ${
            darkMode ? "bg-neutral-900/95" : "bg-zinc-700/95"
          } flex items-center bg-red`}
        >
          <KBarAnimator
            className={`max-w-xl w-full sm:w-3/6 rounded-lg ${
              darkMode
                ? "bg-[#2a2a2a]/70 text-zinc-400"
                : "bg-zinc-100/80 text-black"
            } overflow-hidden shadow-white backdrop-blur-sm`}
          >
            <KBarSearch
              className={`py-4 px-3 text-base w-full outline-none border-none ${
                darkMode
                  ? "bg-[#2a2a2a]/0 text-zinc-400"
                  : "bg-zinc-100/80 text-black"
              } backdrop-blur-sm`}
            />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  );

  function RenderResults() {
    const { results } = useMatches();

    return (
      <KBarResults
        items={results}
        onRender={({ item, active }) =>
          typeof item === "string" ? (
            <div className="px-2 py-3 text-xs uppercase #1a1c1e">{item}</div>
          ) : (
            <ResultItem action={item} active={active} />
          )
        }
      />
    );
  }
}

const ResultItem = forwardRef(function ResultItem(
  { action, active }: { action: ActionImpl; active: boolean },
  ref: React.Ref<HTMLDivElement>
) {
  return (
    <div
      ref={ref}
      onMouseEnter={() =>
        //@ts-ignore
        action.icon && action.icon.props.lottieRef?.current?.play()
      }
      onMouseLeave={() =>
        //@ts-ignore
        action.icon && action.icon.props.lottieRef?.current?.stop()
      }
      className={
        active
          ? `cursor-pointer px-3 py-2 leading-none text-violet11 flex items-center justify-between bg-zinc-600/30`
          : `px-3 py-2 leading-none text-violet11 flex items-center justify-between hover:bg-violet400`
      }
    >
      <header className="flex items-center text-center gap-2">
        {action.icon && action.icon}
        <div className="flex flex-col items-start justify-center relative select-none outline-none hover:bg-violet4">
          <h1 className="text-lg"> {action.name} </h1>
          <p className="text-md"> {action.subtitle} </p>
        </div>
      </header>
      <div className="text-[15px] leading-none rounded flex justify-between items-center relative select-none outline-none">
        {action.shortcut?.length ? (
          <div
            aria-hidden
            style={{ display: "grid", gridAutoFlow: "column", gap: "4px" }}
          >
            {action.shortcut.map((sc) => (
              <kbd
                key={sc}
                style={{
                  padding: "4px 6px",
                  background: "rgba(0 0 0 / .1)",
                  borderRadius: "4px",
                  fontSize: 14,
                }}
              >
                {sc}
              </kbd>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
});
