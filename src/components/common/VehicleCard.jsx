// Archivo creado automáticamente. Por favor, pega el código correspondiente.
import React from "react";
import { Link } from "react-router-dom";

export function VehicleCard({ vehicle }) {
  const formatPrice = (price) => {
    if (!price && price !== 0) return "-";
    return `$${Number(price).toLocaleString("es-ES")}`;
  };

  const vin = vehicle.vin ?? vehicle.VIN ?? "";
  const src = vehicle.images?.[0] || vehicle.imagenUrl || vehicle.image || "/assets/placeholder.jpg";
  const id = vehicle.id ?? vehicle.ID ?? vehicle._id;

  return (
    <article className="bg-neutral-900 rounded-lg overflow-hidden shadow-md">
      {/* Parte clicable (imagen + título) */}
      <Link to={`/vehiculo/${id}`} className="block">
        <div className="w-full bg-black/40">
          <img
            src={src}
            alt={vehicle.modelo || vehicle.model}
            className="w-full h-44 md:h-56 lg:h-64 object-cover md:object-contain object-center transition-all duration-200"
          />
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-lg text-white">{vehicle.marca || vehicle.make} {vehicle.modelo || vehicle.model}</h3>

          {vin && (
            <div className="text-xs text-neutral-400 mt-1">
              <span className="font-medium text-neutral-300">VIN: </span>
              <span className="font-mono">{vin}</span>
            </div>
          )}

          <p className="text-sm text-neutral-400 mt-2">
            {vehicle.descripcionCorta || vehicle.description || ""}
          </p>
        </div>
      </Link>

      {/* Botón de detalles separado (no anidado) */}
      <div className="p-4 pt-0 flex items-center justify-between">
        <div className="text-blue-400 font-semibold">
          {formatPrice(vehicle.precio ?? vehicle.price)}
        </div>

        <Link
          to={`/vehiculo/${id}`}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition"
          aria-label={`Ver detalles de ${vehicle.marca} ${vehicle.modelo}`}
        >
          Ver Detalles →
        </Link>
      </div>
    </article>
  );
}