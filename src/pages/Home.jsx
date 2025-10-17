import React from 'react';
import { HeroSection } from '../components/layout/HeroSection';
import { FeaturedVehicles } from '../components/common/FeaturedVehicles'; 
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // <-- agregada

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      
      <HeroSection />

      <section className="py-20 max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-10 dark:text-white text-gray-900"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Nuestra Colección Destacada
        </motion.h2>

        <FeaturedVehicles /> 
        <div className="text-center mt-12">
            <Link to="/inventario">
                  <button className="px-8 py-3 rounded-full bg-blue-500 text-white text-lg font-semibold hover:bg-blue-600 transition duration-300 shadow-xl">
                    Ver Inventario Completo
                </button>
            </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;