// Archivo creado automáticamente. Por favor, pega el código correspondiente.
import React from 'react';
import { Link } from 'react-router-dom';

export function VehicleCard({ vehicle }) {
    
    const formatPrice = (price) => {
        return `$${price.toLocaleString('es-ES')}`;
    };

    return (
        <Link 
            to={`/vehiculo/${vehicle.id}`} 
            className="block overflow-hidden rounded-xl shadow-2xl hover:shadow-blue-500/50 transition duration-300 transform hover:-translate-y-1 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700"
        >
            <div className="relative h-48 sm:h-64 overflow-hidden">
                <img
                    src={vehicle.imagenUrl}
                    alt={`${vehicle.marca} ${vehicle.modelo}`}
                    className="w-full h-44 md:h-56 lg:h-64 object-cover md:object-contain object-center transition-all duration-2005"
                    loading="lazy"
                />
                <div className="absolute top-0 right-0 p-2 bg-black bg-opacity-70 text-white text-xs rounded-bl-xl font-medium">
                    {vehicle.año} | {vehicle.kilometraje.toLocaleString('es-ES')} km
                </div>
            </div>

            <div className="p-4 sm:p-6">
                
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {vehicle.marca} {vehicle.modelo}
                </h3>

                <p className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 mb-3">
                    {formatPrice(vehicle.precio)}
                </p>

                <p className="mt-2 text-sm text-gray-500 dark:text-neutral-400 h-10 overflow-hidden">
                    {vehicle.descripcionCorta}
                </p>

                <span className="mt-4 inline-block w-full text-center rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-600">
                    Ver Detalles
                </span>
            </div>
        </Link>
    );
}