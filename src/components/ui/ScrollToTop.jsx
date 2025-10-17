import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  // Desactivar restauración automática del historial del navegador
  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      const prev = window.history.scrollRestoration;
      window.history.scrollRestoration = "manual";
      return () => {
        window.history.scrollRestoration = prev;
      };
    }
  }, []);

  // Forzar scroll al top al cambiar de ruta
  useLayoutEffect(() => {
    // intento inmediato sincronizado con el layout paint
    window.scrollTo(0, 0);
    // asegurar en distintos navegadores/document types
    document.documentElement && (document.documentElement.scrollTop = 0);
    document.body && (document.body.scrollTop = 0);

    // doble protección: ejecutar en próximo tick si algo lo vuelve a cambiar
    const id = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement && (document.documentElement.scrollTop = 0);
      document.body && (document.body.scrollTop = 0);
    }, 0);

    return () => clearTimeout(id);
  }, [pathname]);

  return null;
}