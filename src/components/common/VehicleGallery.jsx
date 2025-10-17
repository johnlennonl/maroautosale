// Archivo creado automáticamente. Por favor, pega el código correspondiente.
import React from 'react';

export function VehicleGallery({ mainImageUrl }) {
    return (
        <div className="space-y-4">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img
                    src={mainImageUrl}
                    alt="Imagen principal del vehículo"
                    className="w-full h-full object-cover aspect-video"
                    loading="eager" 
                />
            </div>

            <div className="flex space-x-3 overflow-x-auto">
                <div className="w-20 h-20 bg-gray-200 dark:bg-neutral-700 rounded-lg flex items-center justify-center text-xs dark:text-neutral-400 border-2 border-blue-500">
                    Foto 1
                </div>
                <div className="w-20 h-20 bg-gray-200 dark:bg-neutral-700 rounded-lg flex items-center justify-center text-xs dark:text-neutral-400">
                    Foto 2
                </div>
                <div className="w-20 h-20 bg-gray-200 dark:bg-neutral-700 rounded-lg flex items-center justify-center text-xs dark:text-neutral-400">
                    +4
                </div>
            </div>
        </div>
    );
}