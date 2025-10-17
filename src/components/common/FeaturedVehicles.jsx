// Archivo creado automáticamente. Por favor, pega el código correspondiente.
import React from "react";
import { Link } from "react-router-dom";
import { mockVehicles } from "../../data/mockVehicles";

export function FeaturedVehicles() {
  // normalizar campos para evitar problemas con claves en español/inglés
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

  // tomar los destacados; si no hay, fallback con los primeros 2
  const featured = normalized.filter((f) => f.esDestacado);
  const items = featured.length ? featured.slice(0, 2) : normalized.slice(0, 2);

  if (items.length === 0) {
    return null;
  }

  return (
    <section className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, idx) => {
          const isLarge = idx === 0;
          return (
            <article
              key={item.id}
              className={`${isLarge ? "md:col-span-2" : "md:col-span-1"} bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 shadow-sm`}
            >
              <Link to={`/vehiculo/${item.id}`} className="block group">
                <div className={`relative ${isLarge ? "h-56 md:h-96" : "h-44 md:h-56"} w-full bg-black/40`}>
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
            </article>
          );
        })}
      </div>
    </section>
  );
}