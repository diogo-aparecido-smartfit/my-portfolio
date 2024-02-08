import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { MdArrowRightAlt } from "react-icons/md";

export default function ProjectsOverviewButton() {
  return (
    <Link
      href="/projects"
      className="flex items-center rounded-lg bg-darkBg border-[1px] border-darkBorder px-2 py-1 sm:px-5 sm:py-1 w-fit gap-1 sm:gap-2 hover:brightness-150 transition-all justify-between duration-300 group/edit"
    >
      <span className="hidden sm:flex">Ver todos</span>
      <div className="flex max-w-[16px] overflow-hidden transition-all duration-100 ease-in-out">
        <div className="flex group-hover/edit:translate-x-0 -translate-x-7 transition-all duration-700 ease-in-out">
          <MdArrowRightAlt />
          <IoIosArrowForward className="ml-3" />
        </div>
      </div>
    </Link>
  );
}
