import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { mockVehicles } from "../data/mockVehicles";
import { VehicleGallery } from "../components/common/VehicleGallery";
import { FaCarSide, FaCalendarAlt, FaTachometerAlt, FaPalette, FaBarcode } from 'react-icons/fa';
import { FaKey } from 'react-icons/fa';

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
                {vehicle.descripcionCorta} 
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

            <div className="mt-6 bg-neutral-900 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-white">Ficha Técnica</h3>
              <dl className="text-sm text-neutral-300 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FaCarSide className="w-5 h-5 text-blue-400" />
                    <span className="text-neutral-300">Marca / Modelo</span>
                  </div>
                  <span className="font-medium text-white">{vehicle.marca} {vehicle.modelo}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FaCalendarAlt className="w-5 h-5 text-blue-400" />
                    <span className="text-neutral-300">Año</span>
                  </div>
                  <span className="text-neutral-200">{vehicle.año}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FaTachometerAlt className="w-5 h-5 text-blue-400" />
                    <span className="text-neutral-300">Kilometraje</span>
                  </div>
                  <span className="text-neutral-200">{vehicle.kilometraje?.toLocaleString('es-ES') ?? '-'} km</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FaBarcode className="w-5 h-5 text-blue-400" />
                    <span className="text-neutral-300">VIN</span>
                  </div>
                  <span className="font-mono text-neutral-200">{vehicle.vin ?? vehicle.VIN ?? "-"}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FaKey className="w-5 h-5 text-blue-400" />
                    <span className="text-neutral-300">Llaves</span>
                  </div>
                  <span className="text-neutral-200">{vehicle.llaves ?? vehicle.numeroLlaves ?? "-"}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FaPalette className="w-5 h-5 text-blue-400" />
                    <span className="text-neutral-300">Color</span>
                  </div>
                  <span className="text-neutral-200">{vehicle.color || "-"}</span>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetalleVehiculo;