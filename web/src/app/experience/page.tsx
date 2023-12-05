import ExperienceList from "@/components/ExperienceList";
import ProjectList from "@/components/ProjectList";
import Text from "@/components/Text";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiência | Diogo Marques",
};

export default function Page() {
  const phrase = "The **life**\n is a collection of\n **experiences**.";

  return (
    <main className="flex flex-col w-full p-8 sm:p-20 md:p-28 xl:p-36 2xl:p-52">
      <Text type="phrase">{phrase}</Text>
      <div className="hidden lg:flex w-full p-4 bg-neutral-400/10 border-[1px] border-neutral-400 rounded-lg text-neutral-300 my-4">
        <p>
          💡 Passe o mouse por cima da experiência em específico para receber
          mais opções de interação.
        </p>
      </div>

      <div className="flex flex-col text-zinc-500 my-6">
        <h2 className="font-semibold text-2xl sm:text-3xl">Projetos</h2>
        <ProjectList projectsPage />
      </div>
      <div className="flex flex-col text-zinc-500 my-6">
        <h2 className="font-semibold text-2xl sm:text-3xl mb-6">Experiência</h2>
        <ExperienceList />
      </div>
    </main>
  );
}
