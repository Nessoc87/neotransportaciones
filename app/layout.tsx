import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neo Transportaciones | Soluciones Logísticas en Monterrey",

  description:
    "Empresa especializada en fletes locales, foráneos, mudanzas y soluciones logísticas para empresas y comercios.",

  keywords: [
    "fletes Monterrey",
    "transporte de carga",
    "mudanzas",
    "fletes foráneos",
    "Neo Transportaciones",
    "logística",
    "transporte de mercancías",
  ],

  authors: [
    {
      name: "Neo Transportaciones",
    },
  ],

  creator: "Neo Transportaciones",

  applicationName: "Neo Transportaciones",

  openGraph: {
    title: "Neo Transportaciones",
    description:
      "Especialistas en soluciones logísticas, fletes y transporte de mercancías.",

    siteName: "Neo Transportaciones",

    locale: "es_MX",

    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body>{children}</body>
    </html>
  );
}