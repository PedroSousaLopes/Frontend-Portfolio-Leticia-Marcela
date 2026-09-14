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
        src="assets/weedings.jpg"
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
        src="assets/pre-weedings.jpg"
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
        src="assets/family.jpg"
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
        src="assets/aniversario.jpg"
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
        src="../public/assets/viagem.jpg"
        alt="Viagem"
        className="h-[300px] w-full object-cover"
      />
    </div>

    {/* gravida */}
    <div className="text-center lg:mr-auto">
      <h1 className="mb-3 text-3xl font-bold text-black">
        Gravida
      </h1>
      <img
        src="../public/assets/gravida.jpg"
        alt="Viagem"
        className="h-[300px] w-full object-cover"
      />
    </div>

  </div>
</div>
  )
}