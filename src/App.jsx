import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 1. Importaciones de componentes de Layout
import { FloatingNavbar } from './components/layout/FloatingNavbar'; 
import { Footer } from './components/layout/Footer';

// 2. Importaciones de páginas
import Home from './pages/Home';
import Inventario from './pages/Inventario';
import Contacto from './pages/Contacto'; 
import DetalleVehiculo from './pages/DetalleVehiculo'; 

function App() {
  return (
    <Router>
      
      {/* HEADER: Visible en todas las páginas */}
      <FloatingNavbar />
      
      {/* Contenedor principal que da espacio al header flotante */}
      <div className="pt-24 min-h-screen bg-gray-50 dark:bg-black">
        <Routes>
          {/* Rutas principales */}
          <Route path="/" element={<Home />} />
          <Route path="/inventario" element={<Inventario />} />
          <Route path="/contacto" element={<Contacto />} />
          
          {/* Ruta de detalle del vehículo */}
          <Route path="/vehiculo/:id" element={<DetalleVehiculo />} />
        </Routes>
      </div>

      {/* FOOTER: Visible en todas las páginas */}
      <Footer /> 
    </Router>
  );
}

export default App;