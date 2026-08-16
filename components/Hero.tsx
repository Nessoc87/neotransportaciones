export default function Hero() {
  return (
    <section id="inicio" className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

        {/* Texto */}
        <div>
          <p className="text-orange-500 font-semibold uppercase tracking-widest">
            Neo Transportaciones
          </p>

          <h1 className="mt-4 text-5xl md:text-6xl font-extrabold leading-tight">
            Transporte seguro para tu mercancía.
          </h1>

          <p className="mt-6 text-xl text-slate-300">
            Especialistas en fletes locales, foráneos, mudanzas,
            maniobras y carga general con cobertura en todo México.
          </p>

           <div className="mt-10 flex flex-wrap gap-4">
            {/*<button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold transition">
              Solicitar Cotización
            </button> */}

            <a
             href="#cotizacion"
            className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold transition">
              Solicitar Cotización
            </a> 
          </div>
        </div>

        {/* Imagen */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=900"
            alt="Camión de carga"
            className="rounded-2xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}