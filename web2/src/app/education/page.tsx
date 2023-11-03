import EducationCard from "@/components/EducationCard";

export default function Page() {
  return (
    <main className="flex flex-col w-full p-8 sm:p-20 md:p-28 xl:p-36 2xl:p-52">
      <h1 className="text-4xl sm:text-5xl md:text-5xl font-semibold mb-1">
        Invest <br />
        in the <span className="text-zinc-500">future</span>, <br />
        <span className="text-zinc-500">study</span>.
      </h1>
      <div className="w-full p-4 bg-neutral-400/10 border-[1px] border-neutral-400 rounded-lg text-neutral-300 my-4">
        <p>
          <span>💡</span> Clique no curso em específico para ser redirecionado à
          pagina de informações adicionais do mesmo.
        </p>
      </div>

      <ul className="flex flex-col w-full rounded-xl overflow-hidden mt-4 gap-[1px]">
        <li>
          <EducationCard />
        </li>
        <li>
          <EducationCard />
        </li>
        <li>
          <EducationCard />
        </li>
      </ul>
    </main>
  );
}
