import turquia from "../assets/turquia.jpg";
import about from "../assets/about.jpg";

export default function AboutDescricao() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 py-20">
      {/* Background */}
      <img
        src="./assets/back.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70" />

      {/* Conteúdo */}
      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center text-center">
        {/* Foto */}
        <div className="mb-10 h-52 w-52 overflow-hidden rounded-full shadow-xl">
          <img
            src={about}
            alt="Leticia Marcela"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Título */}
        <h2 className="mb-6 text-4xl font-semibold tracking-wide text-gray-900 md:text-5xl">
          Olá, eu sou Leticia Marcela
        </h2>

        {/* Descrição */}
        <p className="max-w-2xl text-lg leading-8 text-gray-700">
          Sou fotógrafa brasileira vivendo na França, apaixonada por transformar
          momentos especiais em imagens que contam histórias. Acredito que cada
          pessoa, cada casal e cada família possui uma história única — e meu
          trabalho é capturar esses momentos de forma autêntica, delicada e
          atemporal.
        </p>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-700">
          Entre a França e novos lugares, busco registrar emoções, detalhes e
          conexões que permanecem muito além daquele instante.
        </p>

        {/* Linha */}
        <div className="mt-10 h-px w-20 bg-gray-500" />

        {/* Países */}
        <div className="mt-10">
          <h3 className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-gray-600">
            Lugares que já visitei
          </h3>

          {/* Países lado a lado */}
          <div className="flex items-center justify-center gap-8 whitespace-nowrap">
            <div className="group flex flex-col items-center">
              <span className="text-4xl transition-transform duration-300 group-hover:-translate-y-1">
                🇬🇧
              </span>
              <span className="mt-2 text-xs uppercase tracking-wider text-gray-600">
                Inglaterra
              </span>
              <img
                src="../public/assets/turquia.jpg"
                alt="Turquia"
                className="mt-2 max-h-[600px] w-auto rounded-lg shadow-md object-contain transition-transform duration-500 ease-out
             hover:scale-105"
              />
            </div>

            <div className="group flex flex-col items-center">
              <span className="text-4xl transition-transform duration-300 group-hover:-translate-y-1">
                🇭🇷
              </span>
              <span className="mt-2 text-xs uppercase tracking-wider text-gray-600">
                Croácia
              </span>
              <img
                src="../public/assets/turquia.jpg"
                alt="Turquia"
                className="mt-2 max-h-[600px] w-auto rounded-lg shadow-md object-contain transition-transform duration-500 ease-out
             hover:scale-105"
              />
            </div>

            <div className="group flex flex-col items-center">
              <span className="text-4xl transition-transform duration-300 group-hover:-translate-y-1">
                🇻🇦
              </span>
              <span className="mt-2 text-xs uppercase tracking-wider text-gray-600">
                Vaticano
              </span>
              <img
                src="../public/assets/turquia.jpg"
                alt="Turquia"
                className="mt-2 max-h-[600px] w-auto rounded-lg shadow-md object-contain transition-transform duration-500 ease-out
             hover:scale-105"
              />
            </div>

            <div className="group flex flex-col items-center">
              <span className="text-4xl transition-transform duration-300 group-hover:-translate-y-1">
                🇹🇷
              </span>
              <span className="mt-2 text-xs uppercase tracking-wider text-gray-600">
                Turquia
              </span>
              <img
                src=  {turquia}
                alt="Turquia"
                className="mt-2 max-h-[600px] w-auto rounded-lg object-contain shadow-md
             transition-transform duration-500 ease-out
             hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
