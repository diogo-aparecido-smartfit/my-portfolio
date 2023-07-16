import { useContext } from "react";
import { Link, useRouteError } from "react-router-dom";
import { LanguageContext } from "../App";

export default function ErrorPage() {
  const data = [
    {
      message: "Voltar para o início",
    },
    {
      message: "Back to home",
    },
  ];

  const language = useContext(LanguageContext);

  const error: any = useRouteError();
  console.error(error);

  return (
    <>
      <section
        id="home"
        className="flex flex-col h-screen items-center justify-center text-left gap-1"
      >
        <h1 className="font-medium text-lg">
          Ops... {error.statusText || error.message}
        </h1>

        <Link to={`/`}>
          <a className="group/edit flex flex-row font-medium text-base max-w-fit hover:brightness-50 transition-all gap-2">
            {language === "pt-BR" ? data[0].message : data[1].message}
            <span className="group-hover/edit:translate-x-1 transition-all">
              →
            </span>
          </a>
        </Link>
      </section>
    </>
  );
}
