import Image, { StaticImageData } from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  image: StaticImageData;
}

export default function ProjectCard({
  title,
  subtitle,
  image,
}: ProjectCardProps) {
  return (
    <li className="flex flex-col gap-2 w-full">
      <div className="flex bg-zinc-800 rounded-xl aspect-square items-center justify-center">
        <Image
          alt="Imagem do projeto"
          src={image}
          className="rounded-xl w-full saturate-0 hover:saturate-100 transition-all duration-300 cursor-pointer"
        />
      </div>
      <div>
        <a className="flex items-center gap-2 text-xl text-zinc-300 hover:brightness-125 transition-all cursor-pointer hover:underline">
          {title}
          {/* <IoIosArrowRoundForward /> */}
        </a>
        <p className="text-base text-zinc-400">{subtitle}</p>
      </div>
    </li>
  );
}
