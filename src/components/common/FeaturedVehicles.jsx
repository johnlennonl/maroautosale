// Archivo creado automáticamente. Por favor, pega el código correspondiente.
import React from 'react';
import { BentoGrid, BentoGridItem } from "../ui/BentoGrid";
import { mockVehicles } from "../../data/mockVehicles";

export function FeaturedVehicles() {
    
  const featured = mockVehicles.filter(v => v.esDestacado);

  return (
    <BentoGrid className="mx-auto">
      {featured.map((item, i) => {
        const headerContent = (
            <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 relative overflow-hidden">
                <img 
                    src={item.imagenUrl} 
                    alt={item.modelo}
                    className="object-cover w-full h-full rounded-xl transition duration-300 group-hover/bento:scale-105"
                    loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                    ${item.precio.toLocaleString('es-ES')}
                </div>
            </div>
        );

        return (
          <BentoGridItem
            key={item.id}
            id={item.id}
            title={`${item.marca} ${item.modelo}`}
            description={item.descripcionCorta}
            header={headerContent}
            className={i === 0 ? "md:col-span-2" : "md:col-span-1"}
          />
        );
      })}
    </BentoGrid>
  );
}