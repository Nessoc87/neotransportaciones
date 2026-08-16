"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Neo Transportaciones"
            width={120}
            height={120}
            priority
          />

          <div className="hidden sm:block">
            <h1 className="text-2xl font-bold text-slate-900">
              Neo Transportaciones
            </h1>

            <p className="text-sm text-gray-500">
              Soluciones Logísticas
            </p>
          </div>
        </div>

        {/* Menú escritorio */}
        <nav className="hidden lg:flex items-center gap-8 font-medium">

          <a href="#inicio" className="hover:text-orange-500 transition">
            Inicio
          </a>

          <a href="#servicios" className="hover:text-orange-500 transition">
            Servicios
          </a>

          <a href="#nosotros" className="hover:text-orange-500 transition">
            Nosotros
          </a>

          <a href="#proceso" className="hover:text-orange-500 transition">
            Proceso
          </a>

          <a
            href="https://wa.me/528123368621"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
          >
            WhatsApp
          </a>

          <a
            href="mailto:logistica@neotransportaciones.com"
            className="hover:text-orange-500 transition"
          >
            Correo
          </a>

          <a
            href="#cotizacion"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl transition"
          >
            Solicitar Cotización
          </a>

        </nav>

        {/* Botón menú celular */}
        <button
          className="lg:hidden"
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          {menuAbierto ? (
            <X size={30} />
          ) : (
            <Menu size={30} />
          )}
        </button>
      </div>

      {/* Menú móvil */}
      {menuAbierto && (
        <div className="lg:hidden bg-white border-t shadow-md">

          <nav className="flex flex-col p-6 gap-5 text-lg">

            <a href="#inicio" onClick={() => setMenuAbierto(false)}>
              Inicio
            </a>

            <a href="#servicios" onClick={() => setMenuAbierto(false)}>
              Servicios
            </a>

            <a href="#nosotros" onClick={() => setMenuAbierto(false)}>
              Nosotros
            </a>

            <a href="#proceso" onClick={() => setMenuAbierto(false)}>
              Proceso
            </a>

            <a
              href="https://wa.me/528123368621"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuAbierto(false)}
            >
              WhatsApp
            </a>

            <a
              href="mailto:logistica@neotransportaciones.com"
              onClick={() => setMenuAbierto(false)}
            >
              Correo
            </a>

            <a
              href="#cotizacion"
              onClick={() => setMenuAbierto(false)}
              className="bg-orange-500 text-white text-center py-3 rounded-xl font-bold"
            >
              Solicitar Cotización
            </a>

          </nav>

        </div>
      )}
    </header>
  );
}