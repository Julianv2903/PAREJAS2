"use client";
import { useState } from "react";

export default function BreakGlassPage() {
  const [hits, setHits] = useState(0);
  const [broken, setBroken] = useState(false);

  const handleHit = () => {
    if (broken) return;

    const newHits = hits + 1;
    setHits(newHits);

    if (newHits >= 6) {
      setBroken(true);
    }
  };

  return (
    <main
      onClick={handleHit}
      className="relative min-h-screen flex flex-col items-center justify-center text-center select-none cursor-pointer overflow-hidden bg-black text-white"
    >
      {!broken ? (
        <>
          <h1 className="text-3xl font-bold z-10">Golpea el vidrio para romperlo 💥</h1>
          <p className="mt-3 z-10 opacity-80">
            Clics: {hits} / 6
          </p>

          {/* Capa del vidrio */}
          <div
            className="absolute inset-0 bg-white opacity-10 backdrop-blur-md transition-all duration-300"
            style={{
              backgroundImage:
                hits > 0
                  ? `url("https://png.pngtree.com/png-vector/20230920/ourmid/pngtree-shattered-glass-png-image_9929127.png")`
                  : "none",
              backgroundSize: "cover",
              filter: `blur(${6 - hits}px)`,
            }}
          />

          {/* Grietas visuales progresivas */}
          <div
            className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
              hits >= 3 ? "opacity-60" : "opacity-0"
            }`}
            style={{
              backgroundImage:
                `url("https://png.pngtree.com/png-vector/20240203/ourmid/pngtree-cracked-glass-texture-png-image_11532332.png")`,
              backgroundSize: "cover",
            }}
          />
        </>
      ) : (
        <>
          {/* Contenido revelado */}
          <h1 className="text-4xl font-bold animate-fadeIn">🎉 ¡Vidrio roto! 🎉</h1>
          <p className="mt-4 text-xl animate-fadeIn">
            Has desbloqueado el mensaje secreto.
          </p>
          <p className="opacity-70 mt-2 animate-fadeIn">
            Si puedes imaginarlo, puedes programarlo ✨
          </p>
        </>
      )}
    </main>
  );
}
