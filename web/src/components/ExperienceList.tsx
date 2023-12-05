import { experiences } from "@/app/data";

export default function ExperienceList() {
  return (
    <div>
      <div className="flex h-full gap-10">
        {experiences.length > 1 && (
          <div className="flex justify-center">
            <div className="w-[1px] h-full bg-white"></div>
          </div>
        )}
        <ul className="flex flex-col gap-6">
          {experiences
            .slice()
            .reverse()
            .map((experience, i) => (
              <li className="flex flex-col group cursor-pointer" key={i}>
                <h1 className="font-bold text-white text-lg sm:text-xl lg:text-2xl group-hover:text-purple-400 transition-all duration-300">
                  {experience.title}
                </h1>
                {experiences.length > 1 && (
                  <div className="absolute bg-zinc-500 rounded-full w-4 h-4 left-6 sm:left-[72px] md:left-[168px] lg:left-[168px] xl:left-[200px] 2xl:left-[264px] group-hover:bg-purple-400 transition-all duration-300"></div>
                )}
                <h2 className="mb-1 underline sm:text-lg lg:text-xl text-zinc-400">
                  {experience.company}
                </h2>
                <p className="sm:text-lg lg:text-xl text-zinc-400">
                  {experience.period}
                </p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
