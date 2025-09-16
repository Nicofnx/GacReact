import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";

// Páginas
import Home from "./pages/Home";
import Planes from "./pages/Planes";
import Nosotros from "./pages/Nosotros";
import Cobertura from "./pages/Cobertura";
import TrabajaConNosotros from "./pages/TrabajaConNosotros";
import Contacto from "./pages/Contacto";
import GlobalStyles from "./styles/GlobalStyles";
import Footer from "./components/Footer";
import FinalDeObra from "./pages/FinalDeObra";
import LimpiezaIndustrial from "./pages/LimpiezaIndustrial";
import LimpiezaComercial from "./pages/Comercios";
import LimpiezaOficinas from "./pages/LimpiezaOficinas";
import LimpiezaDepositos from "./pages/LimpiezaDepositos";
import LimpiezaEventos from "./pages/LimpiezaEventos";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function App() {



  function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [pathname]);

  return null;
}


  return (
    
    <Router>
        <ScrollToTop />
        <GlobalStyles/>
        <Header/>    
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
        <Footer/>
    </Router>
  );
}

export default App;