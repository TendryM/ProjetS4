import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import Memory from "./pages/Memory";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/memory" element={<Memory />} />
      </Routes>
    </BrowserRouter>
  );
}