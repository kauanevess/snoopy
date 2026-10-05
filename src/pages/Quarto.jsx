import { useState } from "react";
import "./Quarto.css";
import Final from "./Final";

const snoopys = [
  "snoopy-1.png",
  "snoopy-2.png",
  "snoopy-3.png",
  "snoopy-4.png",
  "snoopy-5.png",
  "snoopy-6.png"
];

const fotos = [
  "casal-1.jpg",
  "casal-2.jpg",
  "casal-3.jpg",
  "casal-4.jpg",
  "casal-5.jpg",
  "casal-6.jpg",
  "casal-7.jpg",
  "casal-8.jpg",
  "casal-9.jpg",
  "casal-10.jpg",
  "casal-11.jpg",
  "casal-12.jpg",
  "casal-13.jpg"
];

const videos = [
  "casal-14.mp4",
  "casal-15.mp4",
  "casal-16.mp4"
];

function Quarto() {
  const [fotoAberta, setFotoAberta] = useState(null);
  const [videoAberto, setVideoAberto] = useState(null);
  const [snoopyAtivo, setSnoopyAtivo] = useState(null);

  function ativarSnoopy(index) {
    setSnoopyAtivo(index);

    setTimeout(() => {
      setSnoopyAtivo(null);
    }, 600);
  }

  return (
    <main className="quarto">
      <div className="mural">
        {snoopys.map((snoopy, index) => (
          <img
            key={snoopy}
            className={`imagem snoopy snoopy-${index + 1} ${
              snoopyAtivo === index ? "snoopy-ativo" : ""
            }`}
            src={`/imagens/${snoopy}`}
            alt="Snoopy"
            onClick={() => ativarSnoopy(index)}
          />
        ))}

        {fotos.map((foto, index) => (
          <img
            key={foto}
            className={`imagem foto foto-${index + 1}`}
            src={`/casal/${foto}`}
            alt={`Foto ${index + 1}`}
            onClick={() => setFotoAberta(foto)}
          />
        ))}

        {videos.map((video, index) => (
          <video
            key={video}
            className={`imagem video video-${index + 1}`}
            src={`/casal/${video}`}
            autoPlay
            muted
            loop
            playsInline
            onClick={() => setVideoAberto(video)}
          />
        ))}

        {fotoAberta && (
          <div
            className="foto-modal"
            onClick={() => setFotoAberta(null)}
          >
            <img
              src={`/casal/${fotoAberta}`}
              alt="Foto ampliada"
              onClick={(event) => event.stopPropagation()}
            />
          </div>
        )}

        {videoAberto && (
          <div
            className="foto-modal"
            onClick={() => setVideoAberto(null)}
          >
            <video
              src={`/casal/${videoAberto}`}
              autoPlay
              muted
              loop
              playsInline
              controls
              onClick={(event) => event.stopPropagation()}
            />
          </div>
        )}
      </div>

      <Final />
    </main>
  );
}

export default Quarto;