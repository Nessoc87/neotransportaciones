import {
  ShieldCheck,
  Clock3,
  Truck,
  Headset,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Seguridad",
    description:
      "Cuidamos tu mercancía durante cada etapa del traslado, procurando que llegue en las mejores condiciones.",
  },
  {
    icon: Clock3,
    title: "Puntualidad",
    description:
      "Coordinamos cada servicio para cumplir con los tiempos acordados y mantenerte informado.",
  },
  {
    icon: Truck,
    title: "Cobertura nacional",
    description:
      "Realizamos fletes locales y foráneos para empresas, comercios, emprendedores y particulares.",
  },
  {
    icon: Headset,
    title: "Atención personalizada",
    description:
      "Te acompañamos desde la cotización hasta la entrega para que siempre tengas a quién acudir.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="nosotros"
      className="relative overflow-hidden bg-slate-100 border-b border-slate-200"
    >
      {/* Fondo decorativo */}

      <div className="absolute -top-40 right-[-100px] h-96 w-96 rounded-full bg-orange-400/10 blur-3xl" />

      <div className="absolute bottom-[-150px] left-[-100px] h-80 w-80 rounded-full bg-slate-400/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-24">

        {/* Encabezado */}

        <div className="max-w-3xl mb-16">

          <div className="flex items-center gap-4 mb-5">

            <div className="w-1 h-10 bg-orange-500 rounded-full" />

            <p className="uppercase tracking-[0.3em] text-sm font-bold text-orange-500">
              ¿Por qué elegirnos?
            </p>

          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Transporte con confianza de principio a fin.
          </h2>

          <p className="mt-6 text-lg lg:text-xl text-slate-600 leading-8">
            Sabemos que detrás de cada envío hay productos, proyectos,
            negocios y personas que necesitan que las cosas lleguen bien.
            Por eso cuidamos cada servicio con responsabilidad y atención.
          </p>

        </div>

        {/* Razones */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {reasons.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >

                <div className="w-14 h-14 rounded-xl bg-slate-900 flex items-center justify-center mb-7 group-hover:bg-orange-500 transition duration-300">

                  <Icon
                    size={27}
                    className="text-white"
                    strokeWidth={1.8}
                  />

                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}