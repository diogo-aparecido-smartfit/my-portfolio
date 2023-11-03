import { LuFileCode2 } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import ProjectList from "@/components/ProjectList";

export default function Home() {
  return (
    <main className="flex flex-col p-8 sm:p-20 md:p-28 xl:p-36 2xl:p-52">
      <div className="w-full sm:w-2/3">
        <h1 className="text-4xl sm:text-5xl font-semibold mb-3">
          Use <span className="text-zinc-500">technology</span> <br /> to make
          the <span className="text-zinc-500">difference</span>.
        </h1>
        <p className="text-base sm:text-xl text-zinc-300">
          Olá, Diogo Marques ao seu dispor.{" "}
          <span className="text-zinc-500">
            Eu sou um desenvolvedor full-stack.
          </span>
        </p>
      </div>
      <div className="flex gap-2 mt-4 mb-12">
        <button className="flex items-center rounded-xl bg-white text-zinc-950 border-[1px] border-darkBorder p-3 w-full max-w-[160px] hover:bg-transparent hover:text-white transition-all justify-between font-semibold duration-300 gap-1">
          <LuFileCode2 /> Curriculo <IoIosArrowForward />
        </button>
        <button className="flex items-center rounded-xl bg-darkBg border-[1px] border-darkBorder p-3 w-full max-w-[160px] hover:brightness-150 transition-all justify-between duration-300">
          <MdOutlineEmail /> Email <IoIosArrowForward />
        </button>
      </div>
      <ProjectList title="Últimos projetos" />
    </main>
  );
}
