import ProjectList from "@/components/ProjectList";
import Section from "@/components/Section";
import SectionSubtitle from "@/components/SectionSubtitle";
import Text from "@/components/Text";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiência | Diogo Marques",
};

export default function Page() {
  const phrase = "The **life**\n is a collection of\n **experiences**.";

  return (
    <Section>
      <Text type="phrase">{phrase}</Text>
      <div className="hidden lg:flex w-full p-4 bg-neutral-400/10 border-[1px] border-neutral-400 rounded-lg text-neutral-300 my-4">
        <p>
          💡 Passe o mouse por cima da experiência em específico para receber
          mais opções de interação.
        </p>
      </div>

      <div className="flex flex-col gap-4 text-zinc-500 my-16">
        <SectionSubtitle title="Projetos" />
        <ProjectList pageType="projects" />
      </div>
    </Section>
  );
}
