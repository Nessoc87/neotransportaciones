import {
  Truck,
  MapPinned,
  Package,
  Building2,
  Boxes,
  MapPin,
} from "lucide-react";

export default function Services() {
  const servicios = [
    {
      icono: Truck,
      titulo: "Fletes Locales",
      descripcion:
        "Transporte confiable dentro de Monterrey y su área metropolitana, con atención puntual y seguimiento del servicio.",
    },
    {
      icono: MapPinned,
      titulo: "Fletes Foráneos",
      descripcion:
        "Movemos tu mercancía entre ciudades y estados de México, con atención y seguimiento durante el servicio.",
    },
    {
      icono: Package,
      titulo: "Mudanzas",
      descripcion:
        "Soluciones para mudanzas residenciales, oficinas y comercios, adaptadas a las necesidades de cada cliente.",
    },
    {
      icono: Building2,
      titulo: "Maniobras",
      descripcion:
        "Apoyo para carga, descarga y movimiento de mercancía cuando necesitas algo más que transporte.",
    },
    {
      icono: Boxes,
      titulo: "Carga General",
      descripcion:
        "Transporte de mercancías para empresas, comercios, emprendedores y particulares.",
    },
    {
      icono: MapPin,
      titulo: "Recolección y Entrega",
      descripcion:
        "Recogemos y entregamos tu mercancía en el punto que necesitas, con atención durante todo el servicio.",
    },
  ];

  return (
    <section
      id="servicios"
      className="bg-white border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* Encabezado */}

        <div className="max-w-3xl mb-16">

          <div className="flex items-center gap-4 mb-5">

            <div className="w-1 h-10 bg-orange-500 rounded-full" />

            <p className="uppercase tracking-[0.3em] text-sm font-bold text-orange-500">
              Nuestros servicios
            </p>

          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Soluciones de transporte para cada necesidad.
          </h2>

          <p className="mt-6 text-lg lg:text-xl text-slate-600 leading-8">
            Desde un envío local hasta el traslado de mercancía entre estados,
            ponemos a tu disposición soluciones logísticas para empresas,
            comercios, emprendedores y particulares.
          </p>

        </div>

        {/* Servicios */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {servicios.map((servicio) => {
            const Icono = servicio.icono;

            return (
              <div
                key={servicio.titulo}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-1 hover:bg-white hover:border-slate-300 hover:shadow-xl"
              >

                {/* Icono */}

                <div className="w-14 h-14 rounded-xl bg-slate-900 flex items-center justify-center transition duration-300 group-hover:bg-orange-500">

                  <Icono
                    size={27}
                    className="text-white"
                    strokeWidth={1.8}
                  />

                </div>

                {/* Contenido */}

                <h3 className="mt-7 text-2xl font-bold text-slate-900">
                  {servicio.titulo}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {servicio.descripcion}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}