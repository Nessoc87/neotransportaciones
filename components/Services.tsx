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
      descripcion: "Transporte seguro y puntual dentro de la ciudad.",
    },
    {
      icono: MapPinned,
      titulo: "Fletes Foráneos",
      descripcion: "Cobertura nacional con seguimiento de carga.",
    },
    {
      icono: Package,
      titulo: "Mudanzas",
      descripcion: "Servicio residencial y empresarial.",
    },
    {
      icono: Building2,
      titulo: "Maniobras",
      descripcion: "Personal capacitado para maniobras especializadas.",
    },
    {
      icono: Boxes,
      titulo: "Carga General",
      descripcion: "Transporte para empresas y particulares.",
    },
    {
      icono: MapPin,
      titulo: "Recolección y Entrega",
      descripcion: "Servicio puerta a puerta con puntualidad.",
    },
  ];

  return (
    <section
      id="servicios"
      className="max-w-7xl mx-auto py-20 px-6"
    >
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold">
          Nuestros Servicios
        </h2>

        <p className="text-gray-600 mt-4">
          Soluciones logísticas para personas y empresas.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {servicios.map((servicio) => (
          <div
            key={servicio.titulo}
            className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
          >
            <div className="mb-6">
              <servicio.icono
                size={48}
                className="text-orange-500"
                strokeWidth={2}
              />
            </div>

            <h3 className="text-2xl font-bold">
              {servicio.titulo}
            </h3>

            <p className="text-gray-600 mt-4">
              {servicio.descripcion}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}