import React from 'react';
import { motion } from 'framer-motion';
import { miImagen } from '../../assets';

const MiImagen = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}  // La imagen empieza fuera de pantalla (hacia abajo) y invisible
      animate={{ opacity: 1, y: 0 }}   // Se desvanece y sube hasta la vista
      transition={{ duration: 1, ease: "easeOut" }}  // Ajusta la duración y velocidad de la animación
      className="flex justify-center items-center"
    >
      <img
        src={miImagen}
        alt="Mi portafolio"
        className="w-20 h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      />
    </motion.div>
  );
};

export default MiImagen;
