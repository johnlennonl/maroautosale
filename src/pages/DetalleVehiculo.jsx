import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { mockVehicles } from "../data/mockVehicles";
import { VehicleGallery } from "../components/common/VehicleGallery";

function DetalleVehiculo() {
  const { id } = useParams();
  const vehicle = mockVehicles.find((v) => v.id === id);
  const images =
    vehicle?.images && vehicle.images.length
      ? vehicle.images
      : [vehicle?.imagenUrl || "/assets/placeholder.jpg"];
  const [index, setIndex] = useState(0);

  if (!vehicle) {
    return (
      <div className="min-h-screen pt-24 text-center dark:text-white bg-black p-8">
        <h1 className="text-3xl font-bold mb-4">Vehículo No Encontrado</h1>
        <p className="text-lg text-neutral-400">
          El ID {id} no corresponde a ningún vehículo en nuestro inventario.
        </p>
        <Link
          to="/inventario"
          className="mt-6 inline-block text-blue-500 hover:text-blue-400"
        >
          ← Volver al Inventario
        </Link>
      </div>
    );
  }

  const formatPrice = (price) => `$${price.toLocaleString("es-ES")}`;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Link
          to="/inventario"
          className="text-blue-500 hover:text-blue-400 font-semibold mb-6 inline-block"
        >
          ← Volver a la Lista
        </Link>

        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-8">
          {vehicle.marca} {vehicle.modelo} ({vehicle.año})
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="relative bg-black/60 rounded-lg p-4 flex items-center justify-center">
              <img
                src={images[index]}
                alt={`${vehicle.marca} ${vehicle.modelo}`}
                className="w-full max-h-[520px] object-contain rounded-lg"
                style={{ backgroundColor: "#0b0b0b" }}
              />
            </div>

            <div className="mt-3 flex gap-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`border rounded overflow-hidden ${
                    i === index ? "ring-2 ring-blue-500" : ""
                  }`}
                  aria-label={`Imagen ${i + 1}`}
                >
                  <img
                    src={img}
                    alt={`thumb-${i}`}
                    className="w-24 h-16 object-cover"
                  />
                </button>
              ))}
            </div>

            <div className="mt-8 p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-lg dark:shadow-none border dark:border-neutral-700">
              <h2 className="text-2xl font-bold dark:text-white mb-4">
                Descripción General
              </h2>
              <p className="text-gray-700 dark:text-neutral-300">
                {vehicle.descripcionCorta} (Aquí iría una descripción mucho más
                detallada sobre el motor, historial y estado del vehículo).
              </p>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <div className="p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-2xl border-l-4 border-blue-600 dark:border-blue-400">
              <p className="text-sm font-semibold text-gray-600 dark:text-neutral-400">
                Precio de Venta
              </p>
              <p className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 mt-1 mb-4">
                {formatPrice(vehicle.precio)}
              </p>

              <button className="w-full py-3 rounded-lg bg-green-500 text-white font-bold text-lg hover:bg-green-600 transition duration-200 shadow-md">
                ¡Lo Quiero! Contactar Vendedor
              </button>

              <Link
                to="/contacto"
                className="block text-center mt-3 text-sm text-gray-600 dark:text-neutral-400 hover:text-gray-800 dark:hover:text-neutral-200"
              >
                Solicitar prueba de manejo
              </Link>
            </div>

            <div className="p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-lg dark:shadow-none border dark:border-neutral-700">
              <h2 className="text-2xl font-bold dark:text-white mb-4">
                Ficha Técnica
              </h2>
              <ul className="space-y-3 dark:text-neutral-300">
                <li className="flex justify-between border-b border-neutral-200 dark:border-neutral-700 pb-2">
                  <span className="font-medium">Marca / Modelo:</span>{" "}
                  <span>
                    {vehicle.marca} {vehicle.modelo}
                  </span>
                </li>
                <li className="flex justify-between border-b border-neutral-200 dark:border-neutral-700 pb-2">
                  <span className="font-medium">Año:</span> <span>{vehicle.año}</span>
                </li>
                <li className="flex justify-between border-b border-neutral-200 dark:border-neutral-700 pb-2">
                  <span className="font-medium">Kilometraje:</span>{" "}
                  <span>
                    {vehicle.kilometraje.toLocaleString("es-ES")} km
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Color:</span> <span>{vehicle.color}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetalleVehiculo;