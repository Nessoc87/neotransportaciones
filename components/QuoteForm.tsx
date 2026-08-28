"use client";

import { useState } from "react";
import {
  Send,
  MessageCircle,
  Mail,
  Phone,
  Truck,
  Users,
} from "lucide-react";

export default function QuoteForm() {
  const [enviando, setEnviando] = useState(false);
  const [mensajeExito, setMensajeExito] = useState("");
  const [servicio, setServicio] = useState("");

  const enviarFormulario = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setEnviando(true);
    setMensajeExito("");

    const form = e.currentTarget;

    const nombre = (
      form.elements.namedItem("nombre") as HTMLInputElement
    ).value;

    const empresa = (
      form.elements.namedItem("empresa") as HTMLInputElement
    ).value;

    const telefono = (
      form.elements.namedItem("telefono") as HTMLInputElement
    ).value;

    const email = (
      form.elements.namedItem("email") as HTMLInputElement
    ).value;

    const tipoServicio = (
      form.elements.namedItem("servicio") as HTMLSelectElement
    ).value;

    const origen = (
      form.elements.namedItem("origen") as HTMLInputElement | null
    )?.value || "";

    const destino = (
      form.elements.namedItem("destino") as HTMLInputElement | null
    )?.value || "";

    const tipoUnidad = (
      form.elements.namedItem("unidad") as HTMLSelectElement | null
    )?.value || "";

    const cantidadPersonal = (
      form.elements.namedItem("personal") as HTMLSelectElement | null
    )?.value || "";

    const metodo = (
      form.elements.namedItem("metodo") as RadioNodeList
    ).value;

    const datos = {
      nombre,
      empresa,
      telefono,
      email,
      servicio: tipoServicio,
      origen,
      destino,
      unidad: tipoUnidad,
      personal: cantidadPersonal,
      metodo,
    };

    try {
      const respuesta = await fetch(
        "https://n8n.srv1300038.hstgr.cloud/webhook/whatsapp3",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(datos),
        }
      );

      if (!respuesta.ok) {
        throw new Error("Error al enviar la solicitud");
      }

      if (metodo === "whatsapp") {
        const mensaje = `Hola, me gustaría solicitar una cotización con Neo Transportaciones.

Nombre: ${nombre}
Empresa: ${empresa || "No especificada"}
Teléfono: ${telefono}
Correo: ${email}

Servicio: ${tipoServicio}
${tipoServicio === "Maniobras"
  ? `Cantidad de personal: ${cantidadPersonal}`
  : `Origen: ${origen}
Destino: ${destino}
Tipo de unidad: ${tipoUnidad}`}`;

        setMensajeExito(
          "Tu solicitud fue enviada correctamente. También abrimos WhatsApp para continuar con tu cotización."
        );
      } else if (metodo === "correo") {
        setMensajeExito(
          "Tu solicitud fue recibida. Te enviaremos la información de tu cotización por correo."
        );
      } else {
        setMensajeExito(
          "Tu solicitud fue recibida. Uno de nuestros asesores se pondrá en contacto contigo."
        );
      }

      form.reset();
      setServicio("");
    } catch (error) {
      console.error(error);

      setMensajeExito(
        "No pudimos enviar tu solicitud. Por favor intenta nuevamente."
      );
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section
      id="cotizacion"
      className="relative overflow-hidden bg-slate-100 border-b border-slate-200"
    >
      {/* Fondo */}

      <div className="absolute -top-40 -right-40 h-[30rem] w-[30rem] rounded-full bg-orange-400/10 blur-3xl" />

      <div className="absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-slate-400/20 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 py-24">

        {/* Encabezado */}

        <div className="max-w-3xl mx-auto text-center mb-14">

          <div className="flex items-center justify-center gap-4 mb-5">

            <div className="w-1 h-10 bg-orange-500 rounded-full" />

            <p className="uppercase tracking-[0.3em] text-sm font-bold text-orange-500">
              Solicita tu Cotización 
            </p>

            <div className="w-1 h-10 bg-orange-500 rounded-full" />

          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Cuéntanos qué necesitas.
          </h2>

          <p className="mt-5 text-lg text-slate-600 leading-8">
            Proporciona algunos datos y te ayudaremos a encontrar la
            solución adecuada para tu servicio.
          </p>

        </div>

        {/* Formulario */}

        <form
          onSubmit={enviarFormulario}
          className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 md:p-10 grid md:grid-cols-2 gap-6"
        >

          {/* Nombre */}

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Nombre completo *
            </label>

            <input
              name="nombre"
              placeholder="Tu nombre"
              required
              className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 focus:outline-none transition"
            />
          </div>

          {/* Empresa */}

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Empresa
            </label>

            <input
              name="empresa"
              placeholder="Nombre de tu empresa (opcional)"
              className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 focus:outline-none transition"
            />
          </div>

          {/* Teléfono */}

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Teléfono / WhatsApp *
            </label>

            <input
              name="telefono"
              type="tel"
              placeholder="81 0000 0000"
              required
              className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 focus:outline-none transition"
            />
          </div>

          {/* Correo */}

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Correo electrónico *
            </label>

            <input
              name="email"
              type="email"
              placeholder="correo@empresa.com"
              required
              className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 focus:outline-none transition"
            />
          </div>

          {/* Tipo de servicio */}

          <div className="md:col-span-2">

            <label className="block text-sm font-semibold text-slate-700 mb-2">
              ¿Qué servicio necesitas? *
            </label>

            <select
              name="servicio"
              value={servicio}
              onChange={(e) => setServicio(e.target.value)}
              required
              className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-slate-900 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 focus:outline-none transition"
            >
              <option value="">
                Selecciona un servicio
              </option>

              <option value="Flete local">
                1 - Flete local
              </option>

              <option value="Flete foráneo">
                2 - Flete foráneo
              </option>

              <option value="Maniobras">
                3 - Maniobras
              </option>
            </select>

          </div>

          {/* DATOS PARA FLETES */}

          {(servicio === "Flete local" ||
            servicio === "Flete foráneo") && (

            <>
              {/* Origen */}

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Origen *
                </label>

                <input
                  name="origen"
                  placeholder="Ciudad y estado"
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 focus:outline-none transition"
                />
              </div>

              {/* Destino */}

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Destino *
                </label>

                <input
                  name="destino"
                  placeholder="Ciudad y estado"
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 focus:outline-none transition"
                />
              </div>

              {/* Tipo de unidad */}

              <div className="md:col-span-2">

                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Tipo de unidad *
                </label>

                <div className="relative">

                  <Truck
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500"
                  />

                  <select
                    name="unidad"
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white pl-12 pr-5 py-4 text-slate-900 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 focus:outline-none transition"
                  >
                    <option value="">
                      Selecciona el tipo de unidad
                    </option>

                    <option value="Camioneta">
                      Camioneta
                    </option>

                    <option value="3.5 toneladas">
                      3.5 toneladas
                    </option>

                    <option value="Rabón">
                      Rabón
                    </option>

                    <option value="Torton">
                      Torton
                    </option>

                    <option value="Tráiler">
                      Tráiler
                    </option>

                  </select>

                </div>

              </div>
            </>
          )}

          {/* DATOS PARA MANIOBRAS */}

          {servicio === "Maniobras" && (

            <div className="md:col-span-2">

              <label className="block text-sm font-semibold text-slate-700 mb-2">
                ¿Cuántas personas necesitas? *
              </label>

              <div className="relative">

                <Users
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500"
                />

                <select
                  name="personal"
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white pl-12 pr-5 py-4 text-slate-900 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 focus:outline-none transition"
                >
                  <option value="">
                    Selecciona la cantidad de personal
                  </option>

                  <option value="1 persona">
                    1 persona
                  </option>

                  <option value="2 personas">
                    2 personas
                  </option>

                  <option value="3 personas">
                    3 personas
                  </option>

                  <option value="4 personas">
                    4 personas
                  </option>

                  <option value="5 personas">
                    5 personas
                  </option>

                  <option value="6 o más personas">
                    6 o más personas
                  </option>

                </select>

              </div>

            </div>
          )}

          {/* Método de contacto */}

          <div className="md:col-span-2 pt-4">

            <p className="font-semibold text-slate-900 mb-4">
              ¿Cómo prefieres recibir tu cotización?
            </p>

            <div className="grid sm:grid-cols-3 gap-4">

              {/* WhatsApp */}

              <label className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 cursor-pointer hover:border-orange-400 transition">

                <input
                  type="radio"
                  name="metodo"
                  value="whatsapp"
                  defaultChecked
                  className="accent-orange-500"
                />

                <MessageCircle
                  size={20}
                  className="text-orange-500"
                />

                <span className="font-medium">
                  WhatsApp
                </span>

              </label>

              {/* Correo */}

              <label className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 cursor-pointer hover:border-orange-400 transition">

                <input
                  type="radio"
                  name="metodo"
                  value="correo"
                  className="accent-orange-500"
                />

                <Mail
                  size={20}
                  className="text-orange-500"
                />

                <span className="font-medium">
                  Correo
                </span>

              </label>

              {/* Llamada */}

              <label className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 cursor-pointer hover:border-orange-400 transition">

                <input
                  type="radio"
                  name="metodo"
                  value="llamada"
                  className="accent-orange-500"
                />

                <Phone
                  size={20}
                  className="text-orange-500"
                />

                <span className="font-medium">
                  Llamada
                </span>

              </label>

            </div>

          </div>

          {/* Botón */}

          <button
            type="submit"
            disabled={enviando}
            className="md:col-span-2 mt-4 flex items-center justify-center gap-3 bg-slate-900 hover:bg-orange-500 disabled:bg-slate-400 text-white font-bold text-lg py-5 rounded-xl transition duration-300 shadow-lg hover:shadow-xl"
          >

            <Send size={20} />

            {enviando
              ? "Enviando solicitud..."
              : "Solicitar cotización"}

          </button>

          {/* Mensaje */}

          {mensajeExito && (
            <div className="md:col-span-2 rounded-xl bg-slate-100 border border-slate-200 p-5 text-center text-slate-700">
              {mensajeExito}
            </div>
          )}

        </form>

        <p className="text-center text-sm text-slate-500 mt-6">
          Tus datos serán utilizados únicamente para atender tu solicitud de
          servicio.
        </p>

      </div>
    </section>
  );
}