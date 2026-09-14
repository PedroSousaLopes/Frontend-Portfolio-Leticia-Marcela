import weddings from "../assets/weedings.jpg";
import preWeddings from "../assets/pre-weedings.jpg";
import family from "../assets/family.jpg";
import aniversario from "../assets/aniversario.jpg";
import viagem from "../assets/viagem.jpg";
import gravida from "../assets/gravida.jpg";

export default function Jobs() {
  return (
    <div className="min-h-screen w-full px-6 py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {/* Weddings */}
        <div className="text-center">
          <h1 className="mb-3 text-3xl font-bold text-black">
            Weddings
          </h1>
          <img
            src={weddings}
            alt="Weddings"
            className="h-[300px] w-full object-cover"
          />
        </div>

        {/* Pre-Weddings */}
        <div className="text-center">
          <h1 className="mb-3 text-3xl font-bold text-black">
            Pre-Weddings
          </h1>
          <img
            src={preWeddings}
            alt="Pre-Weddings"
            className="h-[300px] w-full object-cover"
          />
        </div>

        {/* Family */}
        <div className="text-center">
          <h1 className="mb-3 text-3xl font-bold text-black">
            Family
          </h1>
          <img
            src={family}
            alt="Family"
            className="h-[300px] w-full object-cover"
          />
        </div>

        {/* Aniversário */}
        <div className="text-center lg:col-start-1 lg:ml-auto">
          <h1 className="mb-3 text-3xl font-bold text-black">
            Aniversário
          </h1>
          <img
            src={aniversario}
            alt="Aniversário"
            className="h-[300px] w-full object-cover"
          />
        </div>

        {/* Viagem */}
        <div className="text-center lg:mr-auto">
          <h1 className="mb-3 text-3xl font-bold text-black">
            Viagem
          </h1>
          <img
            src={viagem}
            alt="Viagem"
            className="h-[300px] w-full object-cover"
          />
        </div>

        {/* Gravida */}
        <div className="text-center lg:mr-auto">
          <h1 className="mb-3 text-3xl font-bold text-black">
            Gravida
          </h1>
          <img
            src={gravida}
            alt="Grávida"
            className="h-[300px] w-full object-cover"
          />
        </div>

      </div>
    </div>
  );
}
