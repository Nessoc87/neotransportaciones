import ServiceSelector from "./ServiceSelector";
export default function QuoteForm() {
  return (
    <section
      id="cotizacion"
      className="bg-slate-100 py-20"
    >
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900">
            Solicita tu cotización
          </h2>

          <p className="mt-4 text-slate-600">
            Completa el formulario y nos pondremos en contacto contigo lo antes posible.
          </p>
        </div>

        <form className="bg-white rounded-2xl shadow-xl p-8 grid md:grid-cols-2 gap-6">

  <input
    type="text"
    placeholder="Nombre"
    className="border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
  />

  <input
    type="text"
    placeholder="Empresa"
    className="border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
  />

  <input
    type="tel"
    placeholder="Teléfono"
    className="border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
  />

  <input
    type="email"
    placeholder="Correo electrónico"
    className="border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
  />

  <input
    type="text"
    placeholder="Origen"
    className="border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
  />

  <input
    type="text"
    placeholder="Destino"
    className="border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
  />

  {/*<ServiceSelector />*/}

  <button
    type="submit"
    className="md:col-span-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition"
  >
    Solicitar cotización
  </button>

        </form>

      </div>
    </section>
  );
}