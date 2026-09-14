import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home";
import About from "../../Pages/About";
import Contact from "../../Pages/Contanct";
import PaginaDeFotos from "../PaginaDeFotos";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/fotos/:categoria/:item" element={<PaginaDeFotos />} />
    </Routes>
  );
}
