import ToolCard from "@/components/ToolCard";
import crown from "../../../public/logo.png";
import Image from "next/image";
import { GlowCapture, Glow } from "@codaworks/react-glow";
import { technologies } from "../data";
import Markdown from "react-markdown";
import Text from "@/components/Text";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre | Diogo Marques",
};

export default function Page() {
  const phrase = `Turn **coffee** \n into **code**.`;

  const aboutMe =
    "*Eu me chamo Diogo, tenho 18 anos e sou um desenvolvedor Full-Stack*! Moro em Uberlândia - MG *e atualmente estou cursando Análise e Desenvolvimento de Sistemas pela UNIUBE*, além de estar estudando C# e .NET em cursos por fora. Comecei a programar ainda criança, *editando plugins para servidores online de Minecraft*, mas foi apenas em 2021 que descobri através de vídeos que isso poderia se tornar a minha profissão, *desde então venho estudando e praticando com o objetivo de aperfeiçoar minhas skills como desenvolvedor*.";

  return (
    <GlowCapture>
      <main className="flex flex-col w-jfull p-8 sm:p-20 md:p-28 xl:p-36 2xl:p-52">
        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between xl:justify-start xl:gap-10 items-center">
            <Text type="phrase">{phrase}</Text>
            <Image
              className="w-1/5 xl:w-1/6 2xl:w-1/12 sm:flex"
              src={crown}
              alt="Coroa"
            />
          </div>
          <Text type="paragraph">{aboutMe}</Text>
        </div>

        <Glow
          color=""
          className=""
          style={{ transition: "all .2s" }}
          debug={false}
        >
          <ul className="mt-4 grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2 ">
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
