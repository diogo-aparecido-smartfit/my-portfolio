import { Link } from "react-router-dom";
import ProjectList from "./ProjectList";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col text-left gap-8" id="projects">
      <h1 className="font-medium text-lg">{t("projects.title")}</h1>
      <ProjectList renderNumber={2} />
      <Link
        to="projects"
        className="group/edit flex flex-row font-medium text-base max-w-fit hover:brightness-50 transition-all gap-2"
      >
        {t("projects.footer")}
        <span className="group-hover/edit:translate-x-1 transition-all">→</span>
      </Link>
    </section>
  );
}
