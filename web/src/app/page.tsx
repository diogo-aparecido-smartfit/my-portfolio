import { LuFileCode2 } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import ProjectList from "@/components/ProjectList";
import Text from "@/components/Text";

export default function Home() {
  const phrase = "Use **technology**\n to make the **difference**.";

  return (
    <main className="flex flex-col p-8 sm:p-20 md:p-28 xl:p-36 2xl:p-52">
      <div className="w-full sm:w-2/3">
        <Text type="phrase">{phrase}</Text>
        <p className="text-base sm:text-xl text-zinc-300 mt-3">
          Olá, Diogo Marques ao seu dispor.{" "}
          <span className="text-zinc-500">
            Eu sou um desenvolvedor full-stack.
          </span>
        </p>
      </div>
      <div className="flex gap-2 mt-4 mb-12">
        <a
          href="/CV.pdf"
          target="_blank"
          download="CV.pdf"
          className="flex items-center rounded-xl bg-white text-zinc-950 border-[1px] border-darkBorder p-3 w-full max-w-[160px] hover:bg-transparent hover:text-white transition-all justify-between font-semibold duration-300 gap-1"
        >
          <LuFileCode2 /> Curriculo <IoIosArrowForward />
        </a>
        <a
          href="mailto:diogo.amv19@gmail.com"
          className="flex items-center rounded-xl bg-darkBg border-[1px] border-darkBorder p-3 w-full max-w-[160px] hover:brightness-150 transition-all justify-between duration-300"
        >
          <MdOutlineEmail /> Email <IoIosArrowForward />
        </a>
      </div>
      <ProjectList title="Últimos projetos" />
    </main>
  );
}
