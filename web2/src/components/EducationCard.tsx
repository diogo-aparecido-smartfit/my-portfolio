import Image from "next/image";
import balta from "../../public/education-images/balta.jpg";
import { IoIosArrowForward } from "react-icons/io";

export default function EducationCard() {
  return (
    <div className="flex flex-col items-center justify-between w-full h-fit bg-zinc-900 overflow-hidden gap-1 cursor-pointer border-[1px] border-transparent hover:bg-transparent text-zinc-400 hover:text-white transition-all duration-300">
      <div className="flex w-full">
        <div>
          <Image
            className="w-20 sm:w-32"
            src={balta}
            alt="Imagem do curso/faculdade"
          />
        </div>
        <div className="flex w-full items-center justify-between p-2 sm:p-4">
          <div className="flex flex-col">
            <h1 className="font-semibold text-xs sm:text-lg">
              Título do curso
            </h1>
            <p className="text-zinc-400 text-xs font-normal sm:text-base">
              Categoria do curso
            </p>
          </div>
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
}
