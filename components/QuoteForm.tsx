"use client";

import { useState } from "react";

export default function QuoteForm() {
  const [enviando, setEnviando] = useState(false);
  const [mensajeExito, setMensajeExito] = useState("");

  const enviarFormulario = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnviando(true);
    setMensajeExito("");

    const form = e.currentTarget;
    const nombre = (form.elements.namedItem("nombre") as HTMLInputElement).value;
    const empresa = (form.elements.namedItem("empresa") as HTMLInputElement).value;
    const telefono = (form.elements.namedItem("telefono") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const origen = (form.elements.namedItem("origen") as HTMLInputElement).value;
    const destino = (form.elements.namedItem("destino") as HTMLInputElement).value;
    const metodo = (form.elements.namedItem("metodo") as RadioNodeList).value;

    try {
      await fetch("https://n8n.srv1300038.hstgr.cloud/webhook/neo-cotizacion", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({nombre,empresa,telefono,email,origen,destino,metodo})
      });

      if (metodo === "whatsapp") {
        const mensaje = `🚚 NUEVA SOLICITUD DE COTIZACIÓN

👤 Nombre: ${nombre}
🏢 Empresa: ${empresa}
📞 Teléfono: ${telefono}
📧 Correo: ${email}

📍 Origen: ${origen}
📍 Destino: ${destino}`;

        window.open(`https://wa.me/528123368621?text=${encodeURIComponent(mensaje)}`,"_blank");
      } else if (metodo === "correo") {
        setMensajeExito("✅ Hemos recibido tu solicitud. Te enviaremos la cotización por correo.");
      } else {
        setMensajeExito("✅ Hemos recibido tu solicitud. Uno de nuestros asesores te llamará.");
      }

      form.reset();
    } catch {
      alert("Ocurrió un error al enviar la solicitud.");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section id="cotizacion" className="py-20 bg-slate-100">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">Solicita tu cotización</h2>
          <p className="mt-4 text-slate-600">Completa el formulario y un asesor te atenderá.</p>
        </div>

        <form onSubmit={enviarFormulario} className="bg-white rounded-2xl shadow-xl p-8 grid md:grid-cols-2 gap-6">
          <input name="nombre" placeholder="Nombre" required className="border rounded-lg p-4"/>
          <input name="empresa" placeholder="Empresa" className="border rounded-lg p-4"/>
          <input name="telefono" placeholder="Teléfono" required className="border rounded-lg p-4"/>
          <input name="email" type="email" placeholder="Correo electrónico" required className="border rounded-lg p-4"/>
          <input name="origen" placeholder="Origen" required className="border rounded-lg p-4"/>
          <input name="destino" placeholder="Destino" required className="border rounded-lg p-4"/>

          <div className="md:col-span-2">
            <p className="font-semibold mb-3">¿Cómo deseas recibir tu cotización?</p>
            <label><input type="radio" name="metodo" value="whatsapp" defaultChecked/> WhatsApp</label><br/>
            <label><input type="radio" name="metodo" value="correo"/> Correo electrónico</label><br/>
            <label><input type="radio" name="metodo" value="llamada"/> Llamada telefónica</label>
          </div>

          <button type="submit" disabled={enviando} className="md:col-span-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl">
            {enviando ? "Enviando..." : "Solicitar cotización"}
          </button>

          {mensajeExito && (
            <div className="md:col-span-2 bg-green-100 text-green-700 p-4 rounded-lg">
              {mensajeExito}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
