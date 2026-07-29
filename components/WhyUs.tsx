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
      "Protegemos tu mercancía durante todo el traslado.",
  },
  {
    icon: Clock3,
    title: "Puntualidad",
    description:
      "Cumplimos los tiempos acordados para cada servicio.",
  },
  {
    icon: Truck,
    title: "Cobertura",
    description:
      "Realizamos servicios locales y foráneos en todo México.",
  },
  {
    icon: Headset,
    title: "Atención personalizada",
    description:
      "Te acompañamos desde la cotización hasta la entrega.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="nosotros"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-slate-900">
            ¿Por qué elegir Neo Transportaciones?
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Trabajamos para que cada envío llegue con seguridad,
            puntualidad y la atención que nuestros clientes merecen.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {reasons.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition"
              >
                <div className="w-16 h-16 rounded-full bg-orange-100 mx-auto flex items-center justify-center mb-6">
                  <Icon
                    size={32}
                    className="text-orange-500"
                  />
                </div>

                <h3 className="font-bold text-xl mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-600">
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