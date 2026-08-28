import {
  ClipboardList,
  Truck,
  MapPinned,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Solicita tu cotización",
    description:
      "Cuéntanos qué necesitas transportar, desde dónde y hacia dónde. Te ayudamos a definir la mejor opción.",
  },
  {
    number: "02",
    icon: Truck,
    title: "Planeamos el servicio",
    description:
      "Analizamos tu solicitud y seleccionamos la unidad y logística adecuada para tu servicio.",
  },
  {
    number: "03",
    icon: MapPinned,
    title: "Realizamos el traslado",
    description:
      "Coordinamos la recolección y trasladamos tu carga procurando cumplir los tiempos acordados.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Entrega y seguimiento",
    description:
      "Damos seguimiento al servicio hasta confirmar que tu mercancía llegó a su destino.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="procesos"
      className="relative overflow-hidden bg-white border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* Encabezado */}

        <div className="max-w-3xl mb-16">

          <div className="flex items-center gap-4 mb-5">

            <div className="w-1 h-10 bg-orange-500 rounded-full" />

            <p className="uppercase tracking-[0.3em] text-sm font-bold text-orange-500">
              Nuestro proceso
            </p>

          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Un proceso sencillo, claro y confiable.
          </h2>

          <p className="mt-6 text-lg lg:text-xl text-slate-600 leading-8">
            Desde el primer contacto hasta la entrega, coordinamos cada etapa
            para que tengas claridad sobre tu servicio.
          </p>

        </div>

        {/* Pasos */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative rounded-2xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-1 hover:bg-white hover:border-slate-300 hover:shadow-xl"
              >

                {/* Número */}

                <div className="flex items-center justify-between mb-7">

                  <span className="text-sm font-bold tracking-widest text-slate-400">
                    {step.number}
                  </span>

                  <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center group-hover:bg-orange-500 transition duration-300">

                    <Icon
                      size={24}
                      className="text-white"
                      strokeWidth={1.8}
                    />

                  </div>

                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
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