import ProjectList from "./ProjectList";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col text-left gap-8" id="projects">
      <h1 className="font-medium text-lg">{t("projects.title")}</h1>
      <ProjectList />
    </section>
  );
}
