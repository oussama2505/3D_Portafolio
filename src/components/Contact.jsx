import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const { t } = useTranslation();
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Muestra un estado de "cargando" mientras se envía el correo.
  
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID, // Service ID desde tu .env
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, // Template ID desde tu .env
        {
          from_name: form.name, // Nombre del remitente desde el formulario
          to_name: "Tu Nombre o Empresa", // El destinatario, que serás tú
          from_email: form.email, // Correo del remitente desde el formulario
          to_email: "tuemail@ejemplo.com", // Aquí pones tu correo de destino donde recibes el mensaje
          message: form.message, // El mensaje del remitente desde el formulario
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY // Clave pública desde tu .env
      )
      .then(
        () => {
          setLoading(false); // Deja de mostrar el estado de "cargando"
          alert(t('contact.success')); // Muestra una alerta de éxito
  
          // Limpia el formulario después de enviarlo
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false); // Deja de mostrar el estado de "cargando"
          console.error(error); // Muestra el error en la consola
  
          alert(t('contact.error')); // Muestra una alerta de error
        }
      );
  };

  

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>{t('contact.subText')}</p>
        <h3 className={styles.sectionHeadText}>{t('contact.headText')}</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">{t('contact.nameLabel')}</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={t('contact.namePlaceholder')}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">{t('contact.emailLabel')}</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t('contact.emailPlaceholder')}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">{t('contact.messageLabel')}</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={t('contact.messagePlaceholder')}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? t('contact.sending') : t('contact.send')}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
