import React from "react";
import { BackgroundBeams } from "../components/ui/BackgroundBeams";

function Contacto() {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Mensaje enviado! Nos pondremos en contacto pronto.");
  };

  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Hablemos de tu próximo auto.
        </h1>
        
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            
            <input
              type="email"
              placeholder="tu@email.com"
              required
              className="w-full rounded-lg border border-neutral-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-neutral-900 placeholder:text-neutral-700 text-white p-4 transition duration-200"
            />

            <div className="flex space-x-4">
                 <input
                    type="text"
                    placeholder="Tu Nombre"
                    required
                    className="w-1/2 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-neutral-900 placeholder:text-neutral-700 text-white p-4 transition duration-200"
                />
                 <input
                    type="tel"
                    placeholder="Teléfono (opcional)"
                    className="w-1/2 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-neutral-900 placeholder:text-neutral-700 text-white p-4 transition duration-200"
                />
            </div>

            <textarea
                placeholder="Estoy interesado en el [Modelo] y me gustaría saber..."
                required
                rows="4"
                className="w-full rounded-lg border border-neutral-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-neutral-900 placeholder:text-neutral-700 text-white p-4 transition duration-200"
            ></textarea>
            
            <button
                type="submit"
                className="w-full py-3 rounded-lg bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition duration-200 shadow-md"
            >
                Enviar Solicitud
            </button>
        </form>
      </div>
      
      <BackgroundBeams />
    </div>
  );
}

export default Contacto;