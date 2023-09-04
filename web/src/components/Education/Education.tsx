import { useTranslation } from "react-i18next";
import EducationList from "./EducationList";

export default function Education() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col text-left gap-8" id="projects">
      <h1 className="font-medium text-lg">{t("education.title")}</h1>
      <EducationList />
    </section>
  );
}
