import { Phone, Mail, MessageCircle } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-slate-950 text-slate-300 text-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-2.5 flex flex-col md:flex-row items-center justify-center md:justify-between gap-2">

        {/* Teléfono */}
        <a
          href="tel:+528123368621"
          className="flex items-center gap-2 hover:text-white transition"
        >
          <Phone size={15} className="text-orange-500" />

          <span>
            (81) 2336 8621
          </span>
        </a>

        {/* Correo */}
        <a
          href="mailto:logistica@neotransportaciones.com"
          className="flex items-center gap-2 hover:text-white transition"
        >
          <Mail size={15} className="text-orange-500" />

          <span>
            logistica@neotransportaciones.com
          </span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/5218180845338?text=Hola,%20me%20gustaría%20solicitar%20información%20sobre%20un%20servicio."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-slate-300 hover:text-white transition"
        >
          <MessageCircle size={15} className="text-orange-500" />

          <span>
            (81) 8084 5338
          </span>
        </a>

      </div>
    </div>
  );
}