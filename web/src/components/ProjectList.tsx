import Image from "next/image";
import example from "../../public/education-images/uniube.png";
import { IoIosArrowForward, IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";

interface ProjectListProps {
  title: string;
  projectsPage?: boolean;
}

export default function ProjectList({ projectsPage, title }: ProjectListProps) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center mb-4">
        <h1 className="text-xl sm:text-2xl font-semibold  text-zinc-200">
          {title}
        </h1>
        {projectsPage ? null : (
          <Link
            href="/experience"
            className="flex items-center rounded-lg bg-darkBg border-[1px] border-darkBorder px-5 py-1 w-fit gap-2 hover:brightness-150 transition-all justify-between duration-300"
          >
            Ver todos <IoIosArrowForward />
          </Link>
        )}
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full h-full max-w-full">
        <li className="flex flex-col gap-2 w-full">
          <Image
            alt="Imagem do projeto"
            src={example}
            className="rounded-xl w-full saturate-0 hover:saturate-100 transition-all duration-300 cursor-pointer"
          />
          <div>
            <a className="flex items-center gap-2 text-xl text-zinc-300 hover:brightness-125 transition-all cursor-pointer hover:underline">
              Título do projeto <IoIosArrowRoundForward />
            </a>
            <p className="text-base text-zinc-400">
              Desenvolvimento Web & Back-end
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
