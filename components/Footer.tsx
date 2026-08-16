import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-2xl font-bold text-orange-500">
            Neo Transportaciones
          </h2>

          <p className="mt-4 text-slate-400">
            Soluciones logísticas para empresas y particulares en todo México.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-4">
            Servicios
          </h3>

          <ul className="space-y-2 text-slate-400">
            <li>Fletes Locales</li>
            <li>Fletes Foráneos</li>
            <li>Mudanzas</li>
            <li>Maniobras</li>
            <li>Carga General</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">
            Contacto
          </h3>

          <div className="space-y-3">

            <div className="flex items-center gap-2">
              <Phone size={18}/>
              <span>+52 812 336 8621</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={18}/>
              <span>logistica@neotransportaciones.com</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={18}/>
              <span>Monterrey, Nuevo León</span>
            </div>

          </div>
        </div>

        
          <div>
  <h3 className="font-bold mb-4">
    Enlaces
  </h3>

  <ul className="space-y-2 text-slate-400">

    <li>
      <a href="#inicio" className="hover:text-orange-500 transition">
        Inicio
      </a>
    </li>

    <li>
      <a href="#servicios" className="hover:text-orange-500 transition">
        Servicios
      </a>
    </li>

    <li>
      <a href="https://wa.me/528123368621" target="_blank" className="hover:text-orange-500 transition">
        WhatsApp
      </a>
    </li>

    <li>
      <a href="mailto:logistica@neotransportaciones.com" className="hover:text-orange-500 transition">
        Correo
      </a>
    </li>

    <li>
      <a href="/privacy" className="hover:text-orange-500 transition">
        Política de Privacidad
      </a>
    </li>

  </ul>
</div>

      </div>

      <div className="border-t border-slate-800 text-center py-6 text-slate-500">

        © 2026 Neo Transportaciones. Todos los derechos reservados.

      </div>

    </footer>
  )
}