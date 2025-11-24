"use client";
import { useState } from "react";

export default function AvatarReaction() {
  const [mood, setMood] = useState("neutral");

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h2 className="text-xl font-bold">Avatar Reactivo</h2>

      <div className="text-6xl transition-all duration-300">
        {mood === "happy" && "😄"}
        {mood === "sad" && "😢"}
        {mood === "neutral" && "😐"}
      </div>

      <div className="flex gap-3">
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg"
                onClick={() => setMood("happy")}>
          Completar tarea
        </button>

        <button className="px-4 py-2 bg-red-600 text-white rounded-lg"
                onClick={() => setMood("sad")}>
          Fallar
        </button>

        <button className="px-4 py-2 bg-gray-600 text-white rounded-lg"
                onClick={() => setMood("neutral")}>
          Reset
        </button>
      </div>
    </div>
  );
}
