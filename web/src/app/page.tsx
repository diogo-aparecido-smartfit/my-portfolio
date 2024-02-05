import { LuFileCode2 } from "react-icons/lu";
import { MdAlternateEmail, MdOutlineEmail } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import ProjectList from "@/components/ProjectList";
import Text from "@/components/Text";
import { FiDownloadCloud } from "react-icons/fi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Início | Diogo Marques",
};

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
          href="https://drive.google.com/file/d/1vZVLwhR8wokrPPX-qoePsqA3Mz0K_LJi/view?usp=sharing"
          target="_blank"
          className="flex items-center rounded-xl bg-white text-zinc-950 border-[1px] border-darkBorder p-3 w-full max-w-[160px] hover:bg-transparent hover:text-white transition-all justify-between font-semibold duration-700 gap-1 group/edit"
        >
          <LuFileCode2 /> Curriculo
          <div className="flex max-w-[16px] overflow-hidden transition-all duration-100 ease-in-out text-zinc-950 group-hover/edit:text-white">
            <div className="flex group-hover/edit:translate-x-0 -translate-x-7 transition-all duration-700 ease-in-out">
              <FiDownloadCloud />
              <IoIosArrowForward className="ml-3" />
            </div>
          </div>
        </a>
        <a
          href="mailto:diogo.amv19@gmail.com"
          className="flex items-center rounded-xl bg-darkBg border-[1px] border-darkBorder p-3 w-full max-w-[160px] hover:brightness-150 transition-all justify-between duration-300 group/edit"
        >
          <MdOutlineEmail /> Email
          <div className="flex max-w-[16px] overflow-hidden transition-all duration-100 ease-in-out">
            <div className="flex group-hover/edit:translate-x-0 -translate-x-7 transition-all duration-700 ease-in-out">
              <MdAlternateEmail />
              <IoIosArrowForward className="ml-3" />
            </div>
          </div>
        </a>
      </div>
      <ProjectList pageType="home" title="Últimos projetos" />
    </main>
  );
}
