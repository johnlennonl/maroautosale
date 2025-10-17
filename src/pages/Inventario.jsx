import React, { useMemo, useState } from 'react';
import { mockVehicles } from '../data/mockVehicles';
import { VehicleCard } from '../components/common/VehicleCard';

function Inventario() {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [query, setQuery] = useState('');

  const allVehicles = useMemo(() => {
    return mockVehicles.map(v => ({
      id: v.id,
      make: v.marca || v.make,
      model: v.modelo || v.model,
      year: v.año || v.year,
      price: Number(v.precio ?? v.price ?? 0),
      title: v.title || `${v.marca || v.make} ${v.modelo || v.model}`,
      description: v.descripcionCorta || v.description || '',
      image: v.imagenUrl || v.image || '',
      ...v
    }));
  }, [mockVehicles]);

  // únicos de marca y modelos (modelo depende opcionalmente de la marca seleccionada)
  const brands = useMemo(() => {
    return Array.from(new Set(allVehicles.map(v => v.make))).sort();
  }, [allVehicles]);

  const models = useMemo(() => {
    const list = brand
      ? allVehicles.filter(v => v.make === brand).map(v => v.model)
      : allVehicles.map(v => v.model);
    return Array.from(new Set(list)).sort();
  }, [allVehicles, brand]);

  const filtered = useMemo(() => {
    return allVehicles.filter(v => {
      if (brand && v.make !== brand) return false;
      if (model && v.model !== model) return false;
      if (minPrice && Number(v.price) < Number(minPrice)) return false;
      if (maxPrice && Number(v.price) > Number(maxPrice)) return false;
      if (query) {
        const q = query.toLowerCase();
        const inTitle = (v.title || `${v.make} ${v.model}`).toLowerCase().includes(q);
        const inDesc = (v.description || '').toLowerCase().includes(q);
        if (!inTitle && !inDesc) return false;
      }
      return true;
    });
  }, [allVehicles, brand, model, minPrice, maxPrice, query]);

  const resetFilters = () => {
    setBrand('');
    setModel('');
    setMinPrice('');
    setMaxPrice('');
    setQuery('');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-4">
          Inventario de Vehículos
        </h1>
        <p className="text-center text-lg text-gray-600 dark:text-neutral-400 mb-6">
          Explora nuestra colección completa de autos disponibles para entrega inmediata.
        </p>

        {/* Filtros */}
        <div className="mb-8 p-4 bg-white dark:bg-neutral-900 rounded-lg shadow-lg dark:shadow-none border border-neutral-200 dark:border-neutral-700">
          <div className="flex flex-col md:flex-row md:items-end md:space-x-4 gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1">Buscar</label>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Marca, modelo o palabras clave"
                className="w-full px-3 py-2 rounded-md border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-sm text-gray-900 dark:text-neutral-100"
              />
            </div>

            <div className="w-40">
              <label className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1">Marca</label>
              <select
                value={brand}
                onChange={(e) => { setBrand(e.target.value); setModel(''); }}
                className="w-full px-3 py-2 rounded-md border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-sm text-gray-900 dark:text-neutral-100"
              >
                <option value="">Todas</option>
                {brands.map(b => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>

            <div className="w-40">
              <label className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1">Modelo</label>
              <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="w-full px-3 py-2 rounded-md border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-sm text-gray-900 dark:text-neutral-100"
              >
                <option value="">Todos</option>
                {models.map(m => <option key={m} value={m}>{m}</option>)}
              </select>
            </div>

            <div className="w-28">
              <label className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1">Precio min</label>
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                placeholder="0"
                className="w-full px-3 py-2 rounded-md border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-sm text-gray-900 dark:text-neutral-100"
              />
            </div>

            <div className="w-28">
              <label className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1">Precio max</label>
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                placeholder="999999"
                className="w-full px-3 py-2 rounded-md border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-sm text-gray-900 dark:text-neutral-100"
              />
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={resetFilters}
                className="mt-4 md:mt-0 px-4 py-2 rounded-md bg-neutral-200 dark:bg-neutral-800 text-sm font-medium text-gray-800 dark:text-neutral-100 hover:bg-neutral-300 transition"
              >
                Reset
              </button>
              <div className="text-sm text-neutral-500 dark:text-neutral-400 mt-3 md:mt-0">
                {filtered.length} resultados
              </div>
            </div>
          </div>
        </div>

        {/* Grid de resultados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filtered.map(vehicle => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-xl text-gray-500 dark:text-neutral-400 mt-12">
            Lo sentimos, no hay vehículos que coincidan con la búsqueda.
          </p>
        )}
      </div>
    </div>
  );
}

export default Inventario;