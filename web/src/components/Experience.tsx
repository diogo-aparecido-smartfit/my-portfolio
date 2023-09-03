import { useTranslation } from "react-i18next";
import eyeIcon from "../../public/icons/eye-icon.json";

import { experience } from "../../data/data";
import Lottie from "lottie-react";
import { useState, useRef } from "react";
import ExperienceDetailsModal from "./ExperienceDetailsModal";

export default function Experience() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const lottieRef = useRef(null);
  const { i18n, t } = useTranslation();
  const language = i18n.language;

  const handleVisualize = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="flex flex-col text-left gap-8" id="education">
        <h1 className="font-medium text-lg">{t("experience.title")}</h1>

        <div className="flex flex-col gap-8">
          {experience.map((experience, index) => (
            <>
              <article
                key={index}
                className="flex flex-col md:flex-row gap-4 hover:bg-zinc-500/30 outline-none hover:border-zinc-500/50 border-transparent border-[1px] rounded-lg p-2 transition-all"
              >
                <div className="hidden md:flex flex-col relative">
                  <img
                    className="min-w-[145px] w-[145px] h-[145px] rounded-2xl relative bg-white"
                    src={experience.image}
                    alt="Logo da instiuição"
                  />
                </div>
                <div className="flex flex-col gap-2">
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
                        ? experience.shortDescription
                        : experience.enShortDescription}
                    </p>
                  </div>
                  <div className="flex flex-row gap-3">
                    <button
                      className="group/edit hover:underline flex flex-row items-center gap-2 max-w-fit transition-all cursor-pointer"
                      onMouseEnter={() => (lottieRef as any)?.current?.play()}
                      onMouseLeave={() => (lottieRef as any)?.current?.stop()}
                      onClick={handleVisualize}
                    >
                      {language === "pt-BR" ? "Mais detalhes" : "More details"}
                      <span
                        className={`${
                          localStorage.getItem("darkMode") === "true"
                            ? "brightness-150"
                            : "brightness-50"
                        }`}
                      >
                        <Lottie
                          lottieRef={lottieRef}
                          className="w-6 h-6"
                          animationData={eyeIcon}
                          loop={false}
                          autoplay={false}
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </article>
              {isModalOpen ? (
                <ExperienceDetailsModal
                  setIsModalOpen={setIsModalOpen}
                  experience={experience}
                />
              ) : null}
            </>
          ))}
        </div>
      </section>
    </>
  );
}
