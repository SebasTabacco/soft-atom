import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';

import Contacto from "./pages/Contacto";
import Descargas from "./pages/Descargas";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Novedades from "./pages/Novedades";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="novedades" element={<Novedades />} />
          <Route path="descargas" element={<Descargas />} />
          <Route path="contacto"element={<Contacto/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
