import { useRef } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Quarto from "./pages/Quarto";

function Rotas() {
  const audioRef = useRef(null);
  const navigate = useNavigate();

  function entrar() {
    if (!audioRef.current) {
      audioRef.current = new Audio("/musica.mp3");
      audioRef.current.volume = 0.08;
      audioRef.current.loop = true;
    }

    audioRef.current.play();
    navigate("/quarto");
  }

  return (
    <Routes>
      <Route path="/" element={<Home onEntrar={entrar} />} />
      <Route path="/quarto" element={<Quarto />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  );
}

export default App;