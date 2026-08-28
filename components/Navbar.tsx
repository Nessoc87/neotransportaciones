"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  const whatsappBot =
    "https://wa.me/5218180845338?text=Hola,%20vi%20la%20página%20de%20Neo%20Transportaciones%20y%20me%20gustaría%20cotizar%20un%20servicio.";

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">

      <div className="max-w-7xl mx-auto px-6">

        <div className="min-h-28 flex items-center justify-between gap-10">

          {/* LOGO / IDENTIDAD */}

          <a
            href="#inicio"
            onClick={cerrarMenu}
            className="flex items-center gap-5 shrink-0"
          >

            <div className="flex items-center justify-center">

              <Image
                src="/logo.png"
                alt="Neo Transportaciones"
                width={125}
                height={125}
                priority
                className="w-[125px] h-[125px] object-contain"
              />

            </div>

            <div className="hidden md:block border-l border-slate-200 pl-5">

              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                Neo Transportaciones
              </h1>

              <p className="mt-1 text-base text-slate-500">
                Soluciones Logísticas
              </p>

            </div>

          </a>

          {/* MENÚ */}

          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-slate-700">

            <a
              href="#inicio"
              className="hover:text-orange-500 transition"
            >
              Inicio
            </a>

            <a
              href="#servicios"
              className="hover:text-orange-500 transition"
            >
              Servicios
            </a>

            <a
              href="#nosotros"
              className="hover:text-orange-500 transition"
            >
              Nosotros
            </a>

            <a
              href="#procesos"
              className="hover:text-orange-500 transition"
            >
              Cómo trabajamos
            </a>

          </nav>

          {/* COTIZACIÓN */}

          <a
            href={whatsappBot}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center justify-center bg-slate-900 hover:bg-orange-500 text-white px-7 py-3.5 rounded-lg font-semibold transition duration-300 shadow-sm whitespace-nowrap"
          >
            Cotización 24/7
          </a>

          {/* MENÚ MÓVIL */}

          <button
            type="button"
            aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuAbierto}
            className="lg:hidden text-slate-900"
            onClick={() => setMenuAbierto(!menuAbierto)}
          >
            {menuAbierto ? (
              <X size={30} />
            ) : (
              <Menu size={30} />
            )}
          </button>

        </div>

      </div>

      {/* MENÚ MÓVIL */}

      {menuAbierto && (
        <div className="lg:hidden bg-white border-t border-slate-200 shadow-lg">

          <div className="flex items-center gap-4 px-6 py-5 border-b border-slate-200">

            <Image
              src="/logo.png"
              alt="Neo Transportaciones"
              width={75}
              height={75}
              className="w-[75px] h-[75px] object-contain"
            />

            <div>

              <p className="font-bold text-slate-900">
                Neo Transportaciones
              </p>

              <p className="text-sm text-slate-500">
                Soluciones Logísticas
              </p>

            </div>

          </div>

          <nav className="flex flex-col gap-2 p-6">

            <a
              href="#inicio"
              onClick={cerrarMenu}
              className="rounded-lg px-4 py-3 font-medium text-slate-700 hover:bg-slate-100 transition"
            >
              Inicio
            </a>

            <a
              href="#servicios"
              onClick={cerrarMenu}
              className="rounded-lg px-4 py-3 font-medium text-slate-700 hover:bg-slate-100 transition"
            >
              Servicios
            </a>

            <a
              href="#nosotros"
              onClick={cerrarMenu}
              className="rounded-lg px-4 py-3 font-medium text-slate-700 hover:bg-slate-100 transition"
            >
              Nosotros
            </a>

            <a
              href="#procesos"
              onClick={cerrarMenu}
              className="rounded-lg px-4 py-3 font-medium text-slate-700 hover:bg-slate-100 transition"
            >
              Cómo trabajamos
            </a>

            <a
              href="#cotizacion"
              onClick={cerrarMenu}
              className="rounded-lg px-4 py-3 font-medium text-slate-700 hover:bg-slate-100 transition"
            >
              Cotización
            </a>

            <a
              href={whatsappBot}
              target="_blank"
              rel="noopener noreferrer"
              onClick={cerrarMenu}
              className="mt-3 rounded-lg bg-slate-900 hover:bg-orange-500 text-white text-center py-4 font-semibold transition"
            >
              Cotización 24/7
            </a>

          </nav>

        </div>
      )}

    </header>
  );
}