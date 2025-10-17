import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 1. Importaciones de componentes de Layout
import { FloatingNavbar } from './components/layout/FloatingNavbar'; 
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/ui/ScrollToTop';

// 2. Importaciones de páginas
import Home from './pages/Home';
import Inventario from './pages/Inventario';
import Contacto from './pages/Contacto'; 
import DetalleVehiculo from './pages/DetalleVehiculo'; 

function App() {
  return (
    <Router>
      <ScrollToTop />
      <FloatingNavbar />
      <div className="pt-16 md:pt-24 min-h-screen bg-gray-50 dark:bg-black">g-black">
        <Routes>
          {/* Rutas principales */}
          <Route path="/" element={<Home />} />
          <Route path="/inventario" element={<Inventario />} />
          <Route path="/contacto" element={<Contacto />} />
          
          {/* Ruta de detalle del vehículo */}
          <Route path="/vehiculo/:id" element={<DetalleVehiculo />} />
        </Routes>
      </div>
      <Footer /> 
    </Router>
  );
}

export default App;