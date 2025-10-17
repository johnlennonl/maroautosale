// tailwind.config.js (¡Asegúrate de que la extensión sea .js!)

/** @type {import('tailwindcss').Config} */
export default { // <--- CAMBIO CLAVE: Usamos export default
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      animation: {
        // Duración extendida a 4s para evitar que se vea cortada
        spotlight: "spotlight 4s ease .75s forwards", 
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-50%) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};