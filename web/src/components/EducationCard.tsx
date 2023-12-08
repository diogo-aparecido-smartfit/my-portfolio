import Image, { StaticImageData } from "next/image";
import { IoIosArrowForward } from "react-icons/io";

interface EducationCardProps {
  id: string;
  title: string;
  subtitle: string;
  image: StaticImageData;
}

export default function EducationCard({
  id,
  title,
  image,
  subtitle,
}: EducationCardProps) {
  return (
    <div className="flex flex-col items-center justify-between w-full h-fit bg-zinc-900 overflow-hidden gap-1 border-[1px] border-transparent hover:bg-transparent text-zinc-400 hover:text-white transition-all duration-300 group">
      <div className="flex w-full h-full">
        <div className="bg-neutral-800/40 group-hover:bg-white transition-all duration-300">
          <Image
            className="w-20 sm:w-32 grayscale group-hover:grayscale-0 transition-all duration-300 invert group-hover:invert-0"
            src={image}
            alt="Imagem do curso/faculdade"
          />
        </div>
        <div className="flex w-full items-center justify-between px-2 sm:px-4">
          <div className="flex flex-col">
            <h1 className="font-semibold text-xs sm:text-lg text-white">
              {title}
            </h1>
            <p className="text-zinc-400 text-xs font-normal sm:text-base">
              {subtitle}
            </p>
          </div>
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
}
