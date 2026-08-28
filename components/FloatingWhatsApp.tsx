import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/528123368621?text=Hola,%20vi%20la%20página%20de%20Neo%20Transportaciones%20y%20me%20gustaría%20solicitar%20información."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white shadow-xl transition-all duration-300 hover:bg-green-700 hover:scale-105"
    >
      <MessageCircle size={32} strokeWidth={2} />
    </a>
  );
}