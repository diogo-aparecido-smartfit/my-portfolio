export default function Education() {
  return (
    <section className="flex flex-col text-left gap-8" id="education">
      <h1 className="font-medium text-lg">Minha educação</h1>

      <div className="flex flex-col gap-8">
        <article className="flex flex-col md:flex-row gap-4">
          <div className="hidden md:flex flex-col relative">
            <img
              className="w-[145px] h-[145px] rounded-2xl relative"
              src="../../public/uniube.png"
              alt="Imagem do projeto"
            />
          </div>
          <div className="flex flex-col gap-2 md:w-[380px]">
            <header>
              <p className="text-xs opacity-50">2023 - present</p>
              <h1 className="font-medium text-base">
                Análise e Desenvolvimento de Sistemas
              </h1>
            </header>
            <p className="font-normal text-base opacity-70">
              Fill your project brief here. It can be the outcome of the
              project, or some success metrics, or a cheesy tagline.
            </p>
          </div>
        </article>
        <article className="flex flex-col md:flex-row gap-4">
          <div className="hidden md:flex flex-col relative">
            <img
              className="w-[145px] h-[145px] rounded-2xl relative"
              src="../../public/jstack.png"
              alt="Imagem do projeto"
            />
          </div>
          <div className="flex flex-col gap-2 md:w-[380px]">
            <header>
              <p className="text-xs opacity-50">2023 - present</p>
              <h1 className="font-medium text-base">
                JStack - Curso FullStack
              </h1>
            </header>
            <p className="font-normal text-base opacity-70">
              Fill your project brief here. It can be the outcome of the
              project, or some success metrics, or a cheesy tagline.
            </p>
          </div>
        </article>
        <article className="flex flex-col md:flex-row gap-4">
          <div className="hidden md:flex flex-col relative">
            <img
              className="w-[145px] h-[145px] rounded-2xl relative"
              src="../../public/rocketseat.jpg"
              alt="Imagem do projeto"
            />
          </div>
          <div className="flex flex-col gap-2 md:w-[380px]">
            <header>
              <p className="text-xs opacity-50">2023 - present</p>
              <h1 className="font-medium text-base">
                Ignite ReactJS - RocketSeat
              </h1>
            </header>
            <p className="font-normal text-base opacity-70">
              Fill your project brief here. It can be the outcome of the
              project, or some success metrics, or a cheesy tagline.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
