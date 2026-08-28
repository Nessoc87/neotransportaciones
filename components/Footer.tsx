import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Empresa */}

          <div>

            <h2 className="text-2xl font-bold">
              Neo Transportaciones
            </h2>

            <div className="w-12 h-1 bg-orange-500 rounded-full mt-4" />

            <p className="mt-5 text-slate-400 leading-7">
              Soluciones logísticas para empresas, comercios,
              emprendedores y particulares en todo México.
            </p>

            <p className="mt-5 text-sm text-slate-500">
              Movemos lo que más importa para ti,
              con la confianza que mereces.
            </p>

          </div>

          {/* Servicios */}

          <div>

            <h3 className="font-bold text-lg mb-5">
              Servicios
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>Fletes Locales</li>

              <li>Fletes Foráneos</li>

              <li>Mudanzas</li>

              <li>Maniobras</li>

              <li>Carga General</li>

              <li>Recolección y Entrega</li>

            </ul>

          </div>

          {/* Contacto */}

          <div>

            <h3 className="font-bold text-lg mb-5">
              Contacto
            </h3>

            <div className="space-y-5 text-slate-400">

              <a
                href="https://wa.me/5218180845338?text=Hola,%20me%20gustaría%20solicitar%20información%20sobre%20un%20servicio."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-white transition"
              >

                <MessageCircle
                  size={20}
                  className="text-orange-500 mt-0.5 shrink-0"
                />

                <span>
                  WhatsApp 24/7
                  <br />
                  <span className="text-slate-500">
                    81 8084 5338
                  </span>
                </span>

              </a>

              <a
                href="tel:+528123368621"
                className="flex items-start gap-3 hover:text-white transition"
              >

                <Phone
                  size={20}
                  className="text-orange-500 mt-0.5 shrink-0"
                />

                <span>
                  Atención personalizada
                  <br />
                  <span className="text-slate-500">
                    81 2336 8621
                  </span>
                </span>

              </a>

              <a
                href="mailto:logistica@neotransportaciones.com"
                className="flex items-start gap-3 hover:text-white transition"
              >

                <Mail
                  size={20}
                  className="text-orange-500 mt-0.5 shrink-0"
                />

                <span>
                  logistica@neotransportaciones.com
                </span>

              </a>

              <div className="flex items-start gap-3">

                <MapPin
                  size={20}
                  className="text-orange-500 mt-0.5 shrink-0"
                />

                <span>
                  Monterrey, Nuevo León
                </span>

              </div>

            </div>

          </div>

          {/* Enlaces */}

          <div>

            <h3 className="font-bold text-lg mb-5">
              Enlaces
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>
                <a
                  href="#inicio"
                  className="hover:text-orange-500 transition"
                >
                  Inicio
                </a>
              </li>

              <li>
                <a
                  href="#servicios"
                  className="hover:text-orange-500 transition"
                >
                  Servicios
                </a>
              </li>

              <li>
                <a
                  href="#nosotros"
                  className="hover:text-orange-500 transition"
                >
                  Nosotros
                </a>
              </li>

              <li>
                <a
                  href="#procesos"
                  className="hover:text-orange-500 transition"
                >
                  Nuestro proceso
                </a>
              </li>

              <li>
                <a
                  href="#cotizacion"
                  className="hover:text-orange-500 transition"
                >
                  Solicitar cotización
                </a>
              </li>

              <li>
                <a
                  href="/privacy"
                  className="hover:text-orange-500 transition"
                >
                  Política de Privacidad
                </a>
              </li>

            </ul>

          </div>

        </div>

      </div>

      {/* Copyright */}

      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-500">

          <p>
            © 2026 Neo Transportaciones. Todos los derechos reservados.
          </p>

          <p>
            Soluciones Logísticas
          </p>

        </div>

      </div>

    </footer>
  );
}