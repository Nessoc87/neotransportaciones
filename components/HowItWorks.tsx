import { ClipboardList, Truck, MapPinned, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Solicita tu cotización",
    description:
      "Completa el formulario con la información de tu envío.",
  },
  {
    icon: Truck,
    title: "Planeamos el servicio",
    description:
      "Analizamos la mejor ruta y el tipo de unidad adecuada.",
  },
  {
    icon: MapPinned,
    title: "Realizamos el traslado",
    description:
      "Transportamos tu mercancía de forma segura y puntual.",
  },
  {
    icon: CheckCircle2,
    title: "Entrega exitosa",
    description:
      "Confirmamos la entrega y damos seguimiento hasta el final.",
  },
];

export default function HowItWorks() {
  return (
    <section id="procesos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900">
            ¿Cómo trabajamos?
          </h2>

          <p className="mt-4 text-slate-600">
            Un proceso sencillo, transparente y seguro.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 transition"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-orange-100 flex items-center justify-center mb-6">
                  <Icon
                    size={34}
                    className="text-orange-500"
                  />
                </div>

                <h3 className="font-bold text-xl mb-3">
                  {step.title}
                </h3>

                <p className="text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}