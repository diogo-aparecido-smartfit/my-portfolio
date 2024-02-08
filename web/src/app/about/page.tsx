import ToolCard from "@/components/ToolCard";
import crown from "../../../public/logo.png";
import Image from "next/image";
import { GlowCapture, Glow } from "@codaworks/react-glow";
import { experiences, technologies } from "../data";
import Markdown from "react-markdown";
import Text from "@/components/Text";
import { Metadata } from "next";
import Marquee from "react-fast-marquee";
import ExperienceCard from "@/components/ExperienceCard";
import Section from "@/components/Section";
import SectionSubtitle from "@/components/SectionSubtitle";

export const metadata: Metadata = {
  title: "Sobre | Diogo Marques",
};

export default function Page() {
  const phrase = `Turn **coffee** \n into **code**.`;

  const aboutMe =
    "*Eu me chamo Diogo, tenho 18 anos e sou um desenvolvedor Full-Stack*! Moro em Uberlândia - MG *e atualmente estou cursando Análise e Desenvolvimento de Sistemas pela UNIUBE*, além de estar estudando C# e .NET em cursos por fora. Comecei a programar ainda criança, *editando plugins para servidores online de Minecraft*, mas foi apenas em 2021 que descobri através de vídeos que isso poderia se tornar a minha profissão, *desde então venho estudando e praticando com o objetivo de aperfeiçoar minhas skills como desenvolvedor*.";

  return (
    <GlowCapture>
      <Section>
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
          className="mt-16"
          style={{ transition: "all .2s" }}
          debug={false}
        >
          <SectionSubtitle title="Ferramentas" />
          Ferramentas
          <ul className="grid grid-cols-1 sm:grid-cols-2 mt-4 flex-col w-full gap-1 sm:text-white rounded-xl  overflow-auto glow:border-neutral-100 border-[1px] border-transparent">
            {technologies.map((item, i) => (
              <li
                className="flex items-center p-4 text-lg gap-3 bg-zinc-900 glow:bg-zinc-800/70 glow:border-neutral-100 border-[1px] border-transparent"
                key={i}
              >
                <span className="text-5xl text-zinc-600">{item.icon}</span>
                {item.technology}
              </li>
            ))}
          </ul>
        </Glow>
        <div className="flex flex-col mt-16 gap-6">
          <SectionSubtitle title="Experiência" />

          <ul className="flex flex-col gap-6">
            {experiences.map((item, i) => (
              <li className="flex flex-col" key={i}>
                <ExperienceCard experience={item} />
                {experiences.length - 1 !== i && (
                  <div className="flex mt-6 h-[1px] w-full bg-zinc-800" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </GlowCapture>
  );
}
