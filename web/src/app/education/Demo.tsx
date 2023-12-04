"use client";
import EducationCard from "@/components/EducationCard";
import { CourseProps, education } from "../data";
import Text from "@/components/Text";
import { useState, useEffect } from "react";

export default function Demo() {
  const [coursesData, setCoursesData] = useState<CourseProps[]>();

  useEffect(() => {
    const data = education;
    setCoursesData(data);
  }, []);

  const phrase = "Invest\n in the **future**,\n **study**.";

  return (
    <main className="flex flex-col w-full p-8 sm:p-20 md:p-28 xl:p-36 2xl:p-52">
      <Text type="phrase">{phrase}</Text>
      <div className="w-full p-4 bg-neutral-400/10 border-[1px] border-neutral-400 rounded-lg text-neutral-300 my-4">
        <p>
          <span>💡</span> Clique no curso em específico para ser redirecionado à
          pagina de informações adicionais do mesmo.
        </p>
      </div>

      <ul className="flex flex-col w-full rounded-xl overflow-hidden mt-4 gap-[1px]">
        {coursesData &&
          coursesData.map((course) => (
            <li key={course.id}>
              <EducationCard
                id={course.id}
                title={course.title}
                subtitle={course.subtitle}
                image={course.image}
              />
            </li>
          ))}
      </ul>
    </main>
  );
}
