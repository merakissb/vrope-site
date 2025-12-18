"use client";
import { motion, AnimatePresence } from "framer-motion"; // Añadimos AnimatePresence
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Contact = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false); // Estado para el modal
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Efecto para cerrar el modal automáticamente tras 3 segundos
  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  if (!hasMounted) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid = formData.name && formData.email && formData.message && formData.subject;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/sender", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setShowSuccess(true); // Mostrar el aviso de éxito
        setFormData({ name: "", email: "", subject: "", phone: "", message: "" });
      } else {
        alert("Error al enviar"); // Aquí podrías hacer otro modal de error
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* MODAL DE ÉXITO (Auto-cierre) */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-10 right-10 z-99999 flex items-center gap-3 rounded-lg bg-black p-5 shadow-2xl dark:bg-btndark border border-strokedark"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
              <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-white">¡Enviado con éxito!</p>
              <p className="text-sm text-gray-400">Te contactaremos pronto.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="contact" className="px-4 py-20 md:px-8 2xl:px-0">
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          
          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
            <motion.div className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15">
              <h1 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Contáctanos
              </h1>

              <form onSubmit={handleSubmit}>
                {/* Inputs con value y onChange (Igual que el ejemplo anterior) */}
                <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu Nombre"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee lg:w-1/2"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Tu Email"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee lg:w-1/2"
                  />
                </div>

                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Asunto"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee lg:w-1/2"
                  />
                  <input
                    type="tel"
                    pattern="[0-9]*"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Celular"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee lg:w-1/2"
                  />
                </div>

                <div className="mb-11.5 flex">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mensaje"
                    rows={4}
                    className="w-full border-b border-stroke bg-transparent focus:border-waterloo focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee"
                  ></textarea>
                </div>

                <div className="flex flex-wrap items-center gap-4 xl:justify-between">
                  <button
                    type="submit"
                    disabled={!isFormValid || loading}
                    className={`inline-flex items-center gap-2.5 rounded-full px-6 py-3 font-medium text-white transition-all duration-300 ease-in-out 
                      ${!isFormValid || loading 
                        ? "opacity-50 cursor-not-allowed bg-gray-600" 
                        : "bg-black hover:shadow-lg active:scale-95 dark:bg-btndark"}`}
                  >
                    {loading ? "Enviando..." : "Send Message"}
                    {loading && (
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
            
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
            >
              <h2 className="mb-12.5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Encuentranos
              </h2>

              <div className="5 mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Nuestra Ubicación
                </h3>
                <p>Sargento Aldea #684, Buin, Región Metropolitana, Chile.</p>
              </div>
              <div className="5 mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Correo Electrónico
                </h3>
                <p>
                  <a>contacto@verticalspa.cl</a>
                </p>
              </div>
              <div>
                <h4 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Número de Teléfono
                </h4>
                <p>
                  <a>+56 9 7386 3091</a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;