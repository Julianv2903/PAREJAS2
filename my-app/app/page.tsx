"use client";
import { useState } from "react";

const TEXT = [
  "La creatividad es la inteligencia divirtiéndose.",
  "Cada línea puede ser una oportunidad.",
  "La interacción transforma la experiencia.",
  "Haz clic para revelar más 🌟",
  "¡Nunca sabes qué frase aparecerá después!",
];

export default function RevealClickPage() {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);

  const revealNext = () => {
    if (visibleLines.length === TEXT.length) return;

    // Escoge una frase que aún no haya salido
    const remaining = TEXT.filter((line) => !visibleLines.includes(line));
    const nextLine = remaining[Math.floor(Math.random() * remaining.length)];

    setVisibleLines([...visibleLines, nextLine]);
  };

  return (
    <main
      onClick={revealNext}
      className="min-h-screen p-10 flex flex-col items-center justify-center text-center gap-6 cursor-pointer select-none"
    >
      <h1 className="text-2xl font-bold mb-6">
        Toca o haz clic para revelar mensajes ✨
      </h1>

      {visibleLines.map((line, index) => (
        <p
          key={index}
          className="text-xl animate-fadeInUp"
        >
          {line}
        </p>
      ))}

      {visibleLines.length < TEXT.length && (
        <p className="mt-4 text-sm opacity-60">Haz clic para mostrar una frase nueva 💡</p>
      )}
    </main>
  );
}
