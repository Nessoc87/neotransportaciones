"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { MapPin, FileText, Clock3, Truck } from "lucide-react";

const images = [
  "/hero/hero1.jpg",
  "/hero/hero2.jpg",
  "/hero/hero3.jpg",
  "/hero/hero4.jpg",
  "/hero/hero5.jpg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-slate-200 via-slate-100 to-slate-300"
    >
      {/* Detalles de fondo */}

      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-orange-400/10 blur-3xl" />

      <div className="absolute -bottom-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-slate-500/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-16 items-center">

        {/* Texto */}

        <div>

          <div className="flex items-center gap-6">

            <div className="w-1 h-12 bg-orange-500 rounded-full" />

            <p className="uppercase tracking-[0.45em] text-xl lg:text-2xl font-bold text-slate-700">
              SOLUCIONES LOGÍSTICAS
            </p>

          </div>

          <h1 className="mt-10 text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
            Movemos lo que más importa para ti.
          </h1>

          <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-orange-500">
            Confianza en cada servicio.
          </h2>

          <p className="mt-8 text-xl leading-9 text-slate-600">
            Especialistas en fletes locales, foráneos, mudanzas, maniobras y
            soluciones logísticas para empresas, comercios y particulares en
            todo México.
          </p>

          {/* Beneficios */}

          <div className="mt-12 grid grid-cols-2 gap-5">

            <div className="flex items-center gap-3 rounded-xl bg-white/70 backdrop-blur-sm p-4 border border-white/80 shadow-sm">
              <MapPin className="text-orange-500" size={22} />
              <span className="font-semibold text-slate-800">
                Cobertura Nacional
              </span>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-white/70 backdrop-blur-sm p-4 border border-white/80 shadow-sm">
              <Clock3 className="text-orange-500" size={22} />
              <span className="font-semibold text-slate-800">
                Atención 24/7
              </span>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-white/70 backdrop-blur-sm p-4 border border-white/80 shadow-sm">
              <FileText className="text-orange-500" size={22} />
              <span className="font-semibold text-slate-800">
                Facturación
              </span>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-white/70 backdrop-blur-sm p-4 border border-white/80 shadow-sm">
              <Truck className="text-orange-500" size={22} />
              <span className="font-semibold text-slate-800">
                Seguimiento del servicio
              </span>
            </div>

          </div>

        </div>

        {/* Slider */}

        <div>

          <div className="relative h-[500px] overflow-hidden rounded-3xl border border-slate-300 bg-slate-200 p-3 shadow-[0_25px_70px_rgba(15,23,42,0.20)]">

            {images.map((image, index) => (

              <div
                key={index}
                className={`absolute inset-3 transition-opacity duration-1000 ${
                  current === index ? "opacity-100" : "opacity-0"
                }`}
              >

                <Image
                  src={image}
                  alt="Neo Transportaciones"
                  fill
                  priority={index === 0}
                  className="rounded-2xl object-cover"
                />

              </div>

            ))}

          </div>

          {/* Tarjeta de confianza */}

          <div className="mt-6 rounded-2xl bg-slate-900 p-6 shadow-xl">

            <div className="text-amber-400 text-xl tracking-widest">
              ★★★★★
            </div>

            <h3 className="mt-2 text-lg font-bold text-white">
              Empresas y particulares confían en Neo Transportaciones
            </h3>

            <p className="mt-2 text-slate-300">
              Compromiso, puntualidad y seguimiento en cada servicio.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}