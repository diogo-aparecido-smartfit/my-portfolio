export default function Projects() {
  return (
    <section className="flex flex-col text-left gap-8" id="projects">
      <h1 className=" font-medium text-lg">Alguns dos meus projetos</h1>

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
              <a className="underline" target="_blank" href="">
                Try it out
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

      <a href="" className="text-white font-medium text-base ">
        Ver todos os projetos →
      </a>
    </section>
  );
}
