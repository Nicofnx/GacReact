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



function App() {
  return (
    
    <Router>
        <GlobalStyles/>
        <Header/>    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planes" element={<Planes />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/cobertura" element={<Cobertura />} />
          <Route path="/trabaja-con-nosotros" element={<TrabajaConNosotros />} />
          <Route path="/contacto" element={<Contacto />} />


      </Routes>
    </Router>
  );
}

export default App;