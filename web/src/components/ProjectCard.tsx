import eyeIcon from "../../public/icons/eye-icon.json";
import { FaReact, FaNodeJs, FaMobileAlt, FaJsSquare } from "react-icons/fa";
import Lottie from "lottie-react";
import { useRef } from "react";
interface ProjectCardProps {
  language: string;
  projects: {
    id: string;
    portugueseDate: string;
    portugueseName: string;
    portugueseDescription: string;
    portugueseView: string;
    image: string;
    date: string;
    name: string;
    description: string;
    view: string;
    deploy: string;
    technologies: [];
  };
}

export default function ProjectCard({ language, projects }: ProjectCardProps) {
  const lottieRef = useRef(null);

  function getTechnologyIcon(techName: string): React.ReactNode {
    if (techName === "reactjs") {
      return <FaReact />;
    } else if (techName === "reactnative") {
      return <FaMobileAlt />;
    } else if (techName === "javascript") {
      return <FaJsSquare />;
    } else if (techName === "nodejs") {
      return <FaNodeJs />;
    } else {
      return null;
    }
  }

  return (
    <article className="flex flex-col md:flex-row gap-2">
      <div className="flex flex-col gap-2 md:w-[380px]">
        <header>
          <p className="text-xs opacity-50">
            {language === "pt-BR" ? projects.portugueseDate : projects.date}
          </p>
          <h1 className="font-medium text-base">
            {language === "pt-BR" ? projects.portugueseName : projects.name}
          </h1>
        </header>
        <p className="font-normal text-base opacity-70">
          {language === "pt-BR"
            ? projects.portugueseDescription
            : projects.description}
        </p>
        <footer className="flex flex-col gap-2">
          <ul className="flex flex-row list-none text-xl gap-4 ">
            {" "}
            {projects.technologies.map((icon, index) => (
              <li
                className={`hover:scale-150 hover:text-zinc-500 opacity-70 hover:opacity-100 hover:cursor-pointer transition-all`}
                key={index}
              >
                {getTechnologyIcon(icon)}
              </li>
            ))}
          </ul>
          <a
            className="group/edit hover:underline flex flex-row items-center gap-2 max-w-fit transition-all cursor-pointer"
            target="_blank"
            onMouseEnter={() => (lottieRef as any)?.current?.play()}
            onMouseLeave={() => (lottieRef as any)?.current?.stop()}
            href={projects.deploy}
          >
            {language === "pt-BR" ? "Visualizar" : "View"}
            <span
              className={`${
                localStorage.getItem("darkMode") === "true"
                  ? "brightness-200" // Classe de estilo para o modo escuro
                  : "brightness-50" // Classe de estilo para o modo claro
              }`}
            >
              <Lottie
                lottieRef={lottieRef}
                className="w-6 h-6"
                animationData={eyeIcon}
                loop={false}
                autoplay={false}
              />
            </span>
          </a>
        </footer>
      </div>

      <div className="flex flex-col relative">
        <img
          className="w-[145px] h-[145px] rounded-2xl relative"
          src={projects.image}
          alt="Imagem do projeto"
        />
      </div>
    </article>
  );
}
