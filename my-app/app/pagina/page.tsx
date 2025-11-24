"use client";
import { useEffect, useState } from "react";

const SHAKE_THRESHOLD = 18; // Sensibilidad del movimiento

export default function ShakeUndo() {
  const [lastAction, setLastAction] = useState<string>("");

  const handleUndo = () => {
    alert("¡Acción deshecha con shake! 🎉");
    setLastAction("");
  };

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;
    let lastZ = 0;

    const handleMotion = (event: DeviceMotionEvent) => {
      const { x = 0, y = 0, z = 0 } = event.accelerationIncludingGravity ?? {};
      const speed = Math.abs(x + y + z - lastX - lastY - lastZ);

      if (speed > SHAKE_THRESHOLD) {
        handleUndo();
      }

      lastX = x;
      lastY = y;
      lastZ = z;
    };

    window.addEventListener("devicemotion", handleMotion);
    return () => window.removeEventListener("devicemotion", handleMotion);
  }, []);

  return (
    <div className="p-6 text-center">
      <h2 className="text-xl font-bold">Agita el teléfono para deshacer</h2>
      <button
        onClick={() => setLastAction("something")}
        className="mt-4 p-3 bg-blue-600 text-white rounded-lg"
      >
        Realizar acción
      </button>
    </div>
  );
}
