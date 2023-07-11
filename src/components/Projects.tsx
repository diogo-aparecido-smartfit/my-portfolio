import { PiEyeClosedBold, PiEyeBold } from "react-icons/pi";

export default function Projects() {
  return (
    <section className="flex flex-col text-left gap-8" id="projects">
      <h1 className="font-medium text-lg">Alguns dos meus projetos</h1>

      <div className="flex flex-col gap-8">
        <article className="flex flex-col md:flex-row gap-2">
          <div className="flex flex-col gap-2 md:w-[380px]">
            <header>
              <p className="text-xs opacity-50">2023 - present</p>
              <h1 className="font-medium text-base">
                Project Name! Nome legal...
              </h1>
            </header>
            <p className="font-normal text-base opacity-70">
              Fill your project brief here. It can be the outcome of the
              project, or some success metrics, or a cheesy tagline.
            </p>
            <footer>
              <a
                className="group/edit underline flex flex-row items-center gap-2 max-w-fit transition-all"
                target="_blank"
                href=""
              >
                Visualizar{" "}
                <span className="group-hover/edit:hidden">
                  <PiEyeClosedBold />
                </span>
                <span className="hidden group-hover/edit:flex">
                  <PiEyeBold />
                </span>
              </a>
            </footer>
          </div>

          <div className="flex flex-col relative">
            <img
              className="w-[145px] h-[145px] rounded-2xl relative"
              src="https://source.unsplash.com/random"
              alt="Imagem do projeto"
            />
          </div>
        </article>
      </div>

      <a
        href=""
        className="group/edit flex flex-row font-medium text-base max-w-fit hover:brightness-50 transition-all gap-2"
      >
        Ver todos os projetos
        <span className="group-hover/edit:translate-x-1 transition-all">→</span>
      </a>
    </section>
  );
}
