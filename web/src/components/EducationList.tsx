import { educations } from "../../data/data";
import EducationCard from "./EducationCard";

export default function EducationList() {
  return (
    <article className="flex flex-col gap-8">
      {educations?.map((education) => (
        <EducationCard key={education.id} education={education} />
      ))}
    </article>
  );
}
