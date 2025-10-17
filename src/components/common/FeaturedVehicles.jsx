// Archivo creado automáticamente. Por favor, pega el código correspondiente.
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { mockVehicles } from "../../data/mockVehicles";

export function FeaturedVehicles() {
  const normalized = mockVehicles.map((v) => ({
    id: v.id,
    marca: v.marca ?? v.make ?? "",
    modelo: v.modelo ?? v.model ?? "",
    precio: Number(v.precio ?? v.price ?? 0),
    descripcionCorta: v.descripcionCorta ?? v.description ?? "",
    imagenUrl: (v.images && v.images[0]) ?? v.imagenUrl ?? v.image ?? "",
    esDestacado: v.esDestacado ?? v.destacado ?? v.featured ?? false,
    ...v,
  }));

  const featured = normalized.filter((f) => f.esDestacado);
  const items = featured.length ? featured.slice(0, 3) : normalized.slice(0, 3);

  if (items.length === 0) return null;

  const container = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.12, ease: "easeOut", duration: 0.45 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 18, scale: 0.995 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="max-w-7xl mx-auto px-4 -mt-4 md:-mt-8"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, idx) => {
          const isLarge = idx === 0;
          return (
            <motion.article
              key={item.id}
              variants={card}
              whileHover={{ scale: 1.02 }}
              className={`${isLarge ? "md:col-span-2" : "md:col-span-1"} bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 shadow-sm transform will-change-transform`}
            >
              <Link to={`/vehiculo/${item.id}`} className="block group">
                <div className={`${isLarge ? "h-56 md:h-96" : "h-44 md:h-56"} relative w-full bg-black/40`}>
                  <img
                    src={item.imagenUrl}
                    alt={`${item.marca} ${item.modelo}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    style={{ objectPosition: "center center" }}
                  />
                  <div className="absolute top-3 left-3 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow">
                    ${item.precio.toLocaleString("es-ES")}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-2">{item.marca} {item.modelo}</h3>
                  <p className="text-sm text-neutral-400 line-clamp-3 mb-4">{item.descripcionCorta}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-blue-400 font-semibold">{item.precio ? `$${item.precio.toLocaleString("es-ES")}` : "-"}</span>
                    <span className="inline-flex items-center px-3 py-2 bg-transparent border border-neutral-700 text-sm text-blue-500 rounded-full hover:bg-neutral-800 transition">
                      Ver Detalles →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          );
        })}
      </div>
    </motion.section>
  );
}