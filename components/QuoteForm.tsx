"use client";

export default function QuoteForm() {
  const enviarWhatsApp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const nombre = (form.elements.namedItem("nombre") as HTMLInputElement).value;
    const empresa = (form.elements.namedItem("empresa") as HTMLInputElement).value;
    const telefono = (form.elements.namedItem("telefono") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const origen = (form.elements.namedItem("origen") as HTMLInputElement).value;
    const destino = (form.elements.namedItem("destino") as HTMLInputElement).value;

    try {
      await fetch(
        "https://n8n.srv1300038.hstgr.cloud/webhook/neo-cotizacion",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombre,
            empresa,
            telefono,
            email,
            origen,
            destino,
          }),
        }
      );
    } catch (error) {
      console.error("Error enviando a n8n:", error);
    }

    const mensaje = `🚚 NUEVA SOLICITUD DE COTIZACIÓN

👤 Nombre: ${nombre}
🏢 Empresa: ${empresa}
📞 Teléfono: ${telefono}
📧 Correo: ${email}

📍 Origen: ${origen}
📍 Destino: ${destino}`;

    window.open(
      `https://wa.me/528123368621?text=${encodeURIComponent(mensaje)}`,
      "_blank"
    );
  };

  return (
    <section id="cotizacion" className="py-20 bg-slate-100">
      <div className="container mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900">
            Solicita tu cotización
          </h2>

          <p className="mt-4 text-slate-600">
            Completa el formulario y nos pondremos en contacto contigo lo antes posible.
          </p>
        </div>

        <form
          onSubmit={enviarWhatsApp}
          className="bg-white rounded-2xl shadow-xl p-8 grid md:grid-cols-2 gap-6"
        >

          <input
            name="nombre"
            type="text"
            placeholder="Nombre"
            required
            className="border rounded-lg p-4"
          />

          <input
            name="empresa"
            type="text"
            placeholder="Empresa"
            className="border rounded-lg p-4"
          />

          <input
            name="telefono"
            type="tel"
            placeholder="Teléfono"
            required
            className="border rounded-lg p-4"
          />

          <input
            name="email"
            type="email"
            placeholder="Correo electrónico"
            required
            className="border rounded-lg p-4"
          />

          <input
            name="origen"
            type="text"
            placeholder="Origen"
            required
            className="border rounded-lg p-4"
          />

          <input
            name="destino"
            type="text"
            placeholder="Destino"
            required
            className="border rounded-lg p-4"
          />

          <button
            type="submit"
            className="md:col-span-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition"
          >
            Solicitar cotización
          </button>

        </form>

      </div>
    </section>
  );
}