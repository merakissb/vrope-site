import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Vrope | Mantenimiento y Trabajos en Altura en Chile",
  description: "Especialistas en limpieza de fachadas, instalación de líneas de vida, hidrolavado y seguridad industrial en altura. Servicio profesional en toda la Región Metropolitana.",
  keywords: ["limpieza de fachadas", "trabajos en altura Chile", "líneas de vida", "mantenimiento de edificios", "Vertical SpA", "Vrope"],
  authors: [{ name: "Vrope" }],

  openGraph: {
    title: "Vrope | Soluciones Integrales en Altura",
    description: "Servicios profesionales de mantenimiento y limpieza técnica de edificios.",
    url: "https://www.vrope.cl", // Tu dominio
    siteName: "Vrope",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/images/logo/LOGO_2.png", // Ruta a una imagen en tu carpeta public
        width: 1200,
        height: 630,
        alt: "Vrope - Trabajos en Altura",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Vrope | Vertical SpA",
            "image": "https://www.vrope.cl/images/logo/LOGO_2.png", // Usa una versión PNG/JPG si puedes
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Sargento Aldea #684",
              "addressLocality": "Buin",
              "addressRegion": "Región Metropolitana",
              "addressCountry": "CL"
            },
            "telephone": "+56973863091",
            "url": "https://www.vrope.cl"
          })
        }}
      />
      <main>
        <Hero />
        <Feature />
        {/* <About />
          <FeaturesTab />
          <FunFact />
          <Integration />
          <CTA />
          <FAQ />
          <Testimonial />
          <Pricing /> */}
        <FunFact />
        <Brands />
        <Contact />
        {/*<Blog /> */}
      </main>
    </>
  );
}
