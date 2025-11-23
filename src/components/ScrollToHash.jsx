// ScrollToHash.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Esperamos un poquito por si el contenido tarda en renderizar
    const timeout = setTimeout(() => {
      if (hash) {
        const id = hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        // Si cambiás de ruta sin hash, sube al inicio
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 50);

    return () => clearTimeout(timeout);
  }, [pathname, hash]);

  return null;
}

export default ScrollToHash;
