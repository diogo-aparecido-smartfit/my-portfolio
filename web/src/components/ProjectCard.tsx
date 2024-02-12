import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { FiExternalLink } from "react-icons/fi";
import { BsInfoLg } from "react-icons/bs";
import { RiGithubLine } from "react-icons/ri";
import Button from "./Button";
import { redirect } from "@/utils/redirect";
import { useRouter } from "next/navigation";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  id: string;
  github?: string;
  image: StaticImageData;
}

export default function ProjectCard({
  title,
  subtitle,
  image,
  id,
  github,
}: ProjectCardProps) {
  const router = useRouter();

  return (
    <li className="flex flex-col gap-2 w-full">
      <article className="flex flex-col rounded-xl items-center justify-center border-[1px] cursor-pointer border-zinc-800 bg-zinc-950 transition-all duration-300 group overflow-hidden">
        <div className="flex">
          <Image
            alt="Imagem do projeto"
            src={image}
            className="w-full h-full aspect-video group-hover:blur-none sm:group-hover:blur-sm group-hover:opacity-60 transition-all duration-300 object-cover"
          />
        </div>

        {/* mobile */}
        <div className="flex lg:hidden flex-col text-white p-4 w-full">
          <div className="flex flex-col w-full">
            <h1 className="text-base sm:text-lg xl:text-xl font-semibold">
              {title}
            </h1>
            <p className="text-sm sm:text-base lg:text-base text-zinc-400">
              {subtitle}
            </p>
          </div>
          <div className="flex flex-col gap-2 w-full mt-6">
            <Link
              href={`/projects/${id}`}
              className="flex items-center rounded-xl bg-darkBg border-[1px] border-darkBorder p-3 w-full hover:brightness-150  justify-center gap-4 text-sm sm:text-base"
            >
              <HiOutlineDocumentSearch /> Detalhes
            </Link>
            <a
              href={github}
              target="_blank"
              className="flex items-center rounded-xl bg-transparent border-[1px] border-darkBorder p-3 w-full hover:brightness-150  justify-center gap-4 text-sm sm:text-base"
            >
              <FiExternalLink /> GitHub
            </a>
          </div>
        </div>

        {/* PC */}
        <div className="hidden lg:flex flex-col w-full bg-zinc-950 duration-300 group-hover:-translate-y-[80%] border-t-[1px] border-zinc-800 text-white">
          <div className="w-full p-6 h-[110px] xl:h-[100px]">
            <div className="flex flex-col w-full">
              <h1 className="text-sm sm:text-base xl:text-xl font-semibold">
                {title}
              </h1>
              <p className="text-xs sm:text-sm lg:text-base text-zinc-400">
                {subtitle}
              </p>
            </div>
            <div className="flex flex-row gap-2 w-full mt-6">
              <Button
                className="scale-0 group-hover:scale-100"
                onClick={() => router.push(`/projects/${id}`)}
                buttonAction="LINK"
                icon={<HiOutlineDocumentSearch />}
              >
                Detalhes
              </Button>
              <Button
                className="scale-0 group-hover:scale-100 bg-transparent "
                onClick={() => redirect(github)}
                buttonAction="LINK"
                icon={<RiGithubLine />}
              >
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </article>
    </li>
  );
}
