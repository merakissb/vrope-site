"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Contact = () => {
  /**
   * Source: https://www.joshwcomeau.com/react/the-perils-of-rehydration/
   * Reason: To fix rehydration error
   */
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.currentTarget;
  const formData = new FormData(form);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  };

  try {
    const res = await fetch("/api/sender", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    if (res.ok) {
      alert("Email sent successfully!");
      form.reset();
    } else {
      alert(result.error || "Failed to send email.");
    }
  } catch (err) {
    console.error(err);
    alert("Something went wrong.");
  }
};


  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <section id="support" className="px-4 md:px-8 2xl:px-0">
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-linear-to-t from-transparent to-[#dee7ff47] dark:bg-linear-to-t dark:to-[#252A42]"></div>
          <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <Image
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="./images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15"
            >
              <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Contactanos
              </h2>

              <form
                action="https://formbold.com/s/unique_form_id"
                method="POST"
                onSubmit={handleSubmit}
              >
                <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    name="name"
                    placeholder="Como te llamamos"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />
                </div>

                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Asunto"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />

                  <input
                    type="text"
                    name="phone"
                    placeholder="Celular"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />
                </div>

                <div className="mb-11.5 flex">
                  <textarea
                    placeholder="Mensaje"
                    name="message"
                    rows={4}
                    className="w-full border-b border-stroke bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                  ></textarea>
                </div>

                <div className="flex flex-wrap items-center gap-4 xl:justify-between">
                  {/* Botón de envío */}
                  <button
                    type="submit"
                    aria-label="send message"
                    className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white transition-all duration-300 ease-in-out hover:bg-blackho hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/20 active:scale-95 dark:bg-btndark dark:hover:bg-btndark/90"
                  >
                    Send Message
                    <svg
                      className="fill-white transition-transform duration-300 group-hover:translate-x-1"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                        fill=""
                      />
                    </svg>
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
                Find us
              </h2>

              <div className="5 mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Our Loaction
                </h3>
                <p>290 Maryam Springs 260, Courbevoie, Paris, France</p>
              </div>
              <div className="5 mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Email Address
                </h3>
                <p>
                  <a href="#">yourmail@domainname.com</a>
                </p>
              </div>
              <div>
                <h4 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Phone Number
                </h4>
                <p>
                  <a href="#">+009 42334 6343 843</a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Contact;
