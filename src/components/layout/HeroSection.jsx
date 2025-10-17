// src/components/layout/HeroSection.jsx

import React from "react";
import { Link } from "react-router-dom";
// ¡ESTA ES LA IMPORTACIÓN!
import { motion } from "framer-motion"; 
import { Spotlight } from "../ui/Spotlight";
import logo from '../../assets/Maroautos.png'; // <-- agregada

export function HeroSection() {
  return (
    <div className="w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden h-[22rem] md:h-[36rem]">
      
      {/* Spotlight escalado pero dentro del contenedor (no provoca scroll) */}
      <Spotlight className="absolute inset-0 scale-125 opacity-30 pointer-events-none" fill="white" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-6 md:pt-0"
      >
        {/* EL LOGO */}
        <div className="flex justify-center mb-6">
          <img
            src={logo}
            alt="Maros Auto Sales Logo"
            className="w-auto h-14 sm:h-16 md:h-20 lg:h-28 object-contain"
          />
        </div>
        {/* EL RESTO DEL CONTENIDO */}
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Encuentra tu próximo vehiculo de ensueño con nosotros
        </h1>
        
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Ofrecemos la mejor selección de vehículos y de alto rendimiento. Calidad y transparencia garantizadas.
        </p>
        
        <div className="flex justify-center mt-8 space-x-4">
            <Link to="/inventario">
                <button className="px-6 py-2 rounded-full bg-blue-600 text-white text-lg font-semibold hover:bg-blue-700 transition duration-200 shadow-md">
                    Ver Inventario
                </button>
            </Link>
            <Link to="/contacto">
                <button className="px-6 py-2 rounded-full bg-transparent border border-neutral-600 text-neutral-300 text-lg font-semibold hover:bg-neutral-800 transition duration-200">
                    Pregunta a un experto
                </button>
            </Link>
        </div>
        
      </motion.div> 
    </div>
  );
}