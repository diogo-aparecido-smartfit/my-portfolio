import exp from "constants";

interface ExperienceCardProps {
  experience: {
    title: string;
    company: string;
    period: string;
    description: string;
  };
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="flex flex-col justify-start lg:flex-row">
      <div className="flex w-full max-w-fit mr-10 font-medium text-lg text-zinc-400">
        {experience.period}
      </div>
      <div className="flex flex-col gap-1 text-zinc-400">
        <h1 className="text-white text-2xl font-semibold">
          {experience.company}
        </h1>
        <h2 className="font-medium text-lg ">{experience.title}</h2>
        <p className="mt-4 text-lg">{experience.description}</p>
      </div>
    </div>
  );
}
