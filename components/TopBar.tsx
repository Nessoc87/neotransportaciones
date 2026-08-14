import { Phone, Mail, MessageCircle } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-slate-900 text-white text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 px-6 py-2">

        <div className="flex items-center gap-2">
          <Phone size={16} className="text-orange-500" />
          <span>+52 812 336 8621</span>
        </div>

        <div className="flex items-center gap-2">
          <Mail size={16} className="text-orange-500" />
          <span>logistica@neotransportaciones.com</span>
        </div>

        <div className="flex items-center gap-2 text-green-400">
          <MessageCircle size={16} />
          <span>Atención por WhatsApp</span>
        </div>

      </div>
    </div>
  );
}