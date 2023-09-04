import { useState } from "react";
import { useTranslation } from "react-i18next";
import MoreDetailsButton from "../MoreDetailsButton";
import EducationDetailsModal from "./EducationDetailsModal";

interface EducationCardProps {
  education: {
    id: string;
    date: string;
    enDate: string;
    name: string;
    enName: string;
    description: JSX.Element;
    enDescription: JSX.Element;
    shortDescription: string;
    enShortDescription: string;
    exampleUrl: string;
    image: string;
  };
}

export default function EducationCard({ education }: EducationCardProps) {
  const { i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVisualize = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <article className="flex flex-col md:flex-row gap-4 hover:bg-zinc-500/30 outline-none hover:border-zinc-500/50 border-transparent border-[1px] rounded-lg p-2 transition-all">
        <div className="hidden md:flex flex-col relative">
          <img
            className="min-w-[145px] w-[145px] h-[145px] rounded-2xl relative bg-white"
            src={education.image}
            alt="Logo da instiuição"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2 md:w-[380px]">
            <header>
              <p className="text-xs opacity-50">
                {i18n.language === "pt-BR" ? education.date : education.enDate}
              </p>
              <h1 className="font-medium text-base">
                {i18n.language === "pt-BR" ? education.name : education.enName}
              </h1>
            </header>
            <p className="font-normal text-base opacity-70">
              {i18n.language === "pt-BR"
                ? education.shortDescription
                : education.enShortDescription}
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <MoreDetailsButton handleFunction={handleVisualize} />
          </div>
        </div>
      </article>

      {isModalOpen ? (
        <EducationDetailsModal
          setIsModalOpen={setIsModalOpen}
          education={education}
        />
      ) : null}
    </>
  );
}
