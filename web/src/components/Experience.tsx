import { useTranslation } from "react-i18next";

import { experience } from "../../data/data";

export default function Experience() {
  const { i18n, t } = useTranslation();

  return (
    <section className="flex flex-col text-left gap-8" id="education">
      <h1 className="font-medium text-lg">{t("experience.title")}</h1>

      <div className="flex flex-col gap-8">
        {experience.map((experience, index) => (
          <article key={index} className="flex flex-col md:flex-row gap-4">
            <div className="hidden md:flex flex-col relative">
              <img
                className="w-[145px] h-[145px] rounded-2xl relative bg-white"
                src={experience.image}
                alt="Logo da instiuição"
              />
            </div>
            <div className="flex flex-col gap-2 md:w-[380px]">
              <header>
                <p className="text-xs opacity-50">
                  {i18n.language === "pt-BR"
                    ? experience.date
                    : experience.enDate}
                </p>
                <h1 className="font-medium text-base">
                  {i18n.language === "pt-BR"
                    ? experience.name
                    : experience.enName}
                </h1>
              </header>
              <p className="font-normal text-base opacity-70">
                {i18n.language === "pt-BR"
                  ? experience.description
                  : experience.enDescription}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
