import ProjectList from "@/components/ProjectList";
import Text from "@/components/Text";

export default function Page() {
  const phrase = "The **life**\n is a collection of\n **experiences**.";

  return (
    <main className="flex flex-col w-full p-8 sm:p-20 md:p-28 xl:p-36 2xl:p-52">
      <Text type="phrase">{phrase}</Text>
      <div className="w-full p-4 bg-neutral-400/10 border-[1px] border-neutral-400 rounded-lg text-neutral-300 my-4">
        <p>
          💡 Clique na imagem para ser redirecionado à pagina de informações
          adicionais da experiência.
        </p>
      </div>

      <div className="flex flex-col text-zinc-500 my-6">
        <h2 className="font-semibold text-2xl sm:text-3xl">Projetos</h2>
        <ProjectList projectsPage />
      </div>
      <div className="flex flex-col text-zinc-500 my-6">
        <h2 className="font-semibold text-2xl sm:text-3xl">Experiência</h2>
      </div>
    </main>
  );
}
