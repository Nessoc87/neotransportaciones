import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import TopBar from "../components/TopBar";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Footer from "../components/Footer";
import QuoteForm from "../components/QuoteForm";
import HowItWorks from "../components/HowItWorks";

export default function Home() {
  return (
    <>
      <TopBar />

      <Navbar />

      <main className="min-h-screen bg-slate-100">

        {/* Presentación */}
        <Hero />

        {/* Servicios */}
        <Services />

        {/* Confianza */}
        <WhyUs />

        {/* Proceso */}
        <HowItWorks />

        {/* Cotización */}
        <QuoteForm />

      </main>

      {/* WhatsApp */}
      <FloatingWhatsApp />

      {/* Pie de página */}
      <Footer />
    </>
  );
}