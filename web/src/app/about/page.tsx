import ToolCard from "@/components/ToolCard";
import { BiLogoReact, BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import crown from "../../../public/logo.png";
import Image from "next/image";
import { GlowCapture, Glow } from "@codaworks/react-glow";

export default function Page() {
  const phrase = (
    <h1 className="text-4xl sm:text-5xl md:text-5xl font-semibold mb-1">
      Turn <span className="text-zinc-500">coffee</span> <br /> into{" "}
      <span className="text-zinc-500">code</span>.
    </h1>
  );

  const aboutMe = (
    <p className="text-zinc-500 text-base sm:text-lg">
      <span className="text-white">
        Eu me chamo Diogo, tenho 18 anos e sou um desenvolvedor Full-Stack!
      </span>{" "}
      Moro em Uberlândia - MG{" "}
      <span className="text-white">
        e atualmente estou cursando Análise e Desenvolvimento de Sistemas pela
        UNIUBE,{" "}
      </span>
      além de estar estudando C# e .NET em cursos por fora. <br /> <br />
      Comecei a programar ainda criança,{" "}
      <span className="text-white">
        editando plugins para servidores online de Minecraft,{" "}
      </span>
      mas foi apenas em 2021 que descobri através de vídeos que isso poderia se
      tornar a minha profissão
      <span className="text-white">
        , desde então venho estudando e praticando com o objetivo de aperfeiçoar
        minhas skills como desenvolvedor.
      </span>
      .
      <br /> <br />
    </p>
  );

  const technologies = [
    {
      icon: <BiLogoTypescript />,
      technology: "TypeScript",
      tag: "Language",
    },
    {
      icon: <BiLogoReact />,
      technology: "React",
      tag: "Front-end",
    },
    {
      icon: <SiNextdotjs />,
      technology: "NextJS",
      tag: "Front-end",
    },
    {
      icon: <FaNodeJs />,
      technology: "Node",
      tag: "Back-end",
    },
  ];

  return (
    <GlowCapture>
      <main className="flex flex-col p-8 sm:p-20 md:p-28 xl:p-36 2xl:p-52">
        <div className="flex flex-col gap-2 w-full xl:w-3/5">
          <div className="flex justify-between items-center">
            {phrase}
            <Image className="hidden sm:flex w-1/5" src={crown} alt="Coroa" />
          </div>
          {aboutMe}
        </div>

        <Glow
          color=""
          className=""
          style={{ transition: "all .2s" }}
          debug={false}
        >
          <ul className="mt-4 grid sm:grid-cols-2 gap-2 xl:w-3/4 2xl:w-3/5">
            {technologies.map((technology) => (
              <ToolCard
                className="glow:bg-neutral-400/20 glow:border-neutral-100 border-[1px] border-transparent"
                key={technology.tag}
                icon={technology.icon}
                technology={technology.technology}
                tag={technology.tag}
              />
            ))}
          </ul>
        </Glow>
      </main>
    </GlowCapture>
  );
}
