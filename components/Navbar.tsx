import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Neo Transportaciones"
            width={200}
            height={200}
            priority
          />    

          <div>
            <h1 className="text-xl font-bold text-slate-900">
            Neo Transportaciones
            </h1>

            <p className="text-sm text-gray-500">
                   Soluciones Logísticas
            </p>
          </div>
        </div>

        {/* Menú */}
        <nav className="hidden md:flex items-center gap-8 font-medium">

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

  {/*<a href="#cotizacion" className="hover:text-orange-500 transition">
    Cotizar
  </a> */}

</nav>

        <button
  onClick={() => {
    document
      .getElementById("cotizacion")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl"
>
  Solicitar Cotización
</button>

      </div>
    </header>
  );
}