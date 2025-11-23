import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ScrollToHash from "./components/ScrollToHash";

// Estilos globales
import GlobalStyles from "./styles/GlobalStyles";

// Componentes
import Header from "./components/Header";
import Footer from "./components/Footer";

// Páginas
import Home from "./pages/Home";
import Planes from "./pages/Planes";
import Nosotros from "./pages/Nosotros";
import Cobertura from "./pages/Cobertura";
import TrabajaConNosotros from "./pages/TrabajaConNosotros";
import Contacto from "./pages/Contacto";
import FinalDeObra from "./pages/FinalDeObra";
import LimpiezaIndustrial from "./pages/LimpiezaIndustrial";
import LimpiezaComercial from "./pages/Comercios";
import LimpiezaOficinas from "./pages/LimpiezaOficinas";
import LimpiezaDepositos from "./pages/LimpiezaDepositos";
import LimpiezaEventos from "./pages/LimpiezaEventos";

// 🔹 Componente auxiliar para volver arriba en cada navegación
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <GlobalStyles />
      <ScrollToTop />
      <ScrollToHash />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planes" element={<Planes />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/cobertura" element={<Cobertura />} />
        <Route path="/trabaja-con-nosotros" element={<TrabajaConNosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/finaldeobra" element={<FinalDeObra />} />
        <Route path="/limpiezaindustrial" element={<LimpiezaIndustrial />} />
        <Route path="/comercios" element={<LimpiezaComercial />} />
        <Route path="/oficinas" element={<LimpiezaOficinas />} />
        <Route path="/depositos" element={<LimpiezaDepositos />} />
        <Route path="/eventos" element={<LimpiezaEventos />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;