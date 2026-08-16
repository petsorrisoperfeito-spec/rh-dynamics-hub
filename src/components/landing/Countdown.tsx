import { useEffect, useState } from "react";
import { countdownMinutes } from "@/config/site";

const TOTAL = countdownMinutes * 60;

function pad(n: number) {
  return String(Math.max(0, n)).padStart(2, "0");
}

export function Countdown() {
  const [left, setLeft] = useState(TOTAL);

  useEffect(() => {
    const id = window.setInterval(() => {
      // Reinício controlado: ao chegar em zero, volta ao tempo cheio.
      setLeft((prev) => (prev <= 1 ? TOTAL : prev - 1));
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  const units = [
    { value: pad(Math.floor(left / 3600)), label: "Horas" },
    { value: pad(Math.floor((left % 3600) / 60)), label: "Minutos" },
    { value: pad(left % 60), label: "Segundos" },
  ];

  return (
    <div
      className="flex items-stretch justify-center gap-2 sm:gap-3"
      role="timer"
      aria-live="off"
      aria-label="Tempo restante desta condição"
    >
      {units.map((u) => (
        <div
          key={u.label}
          className="min-w-[4.5rem] rounded-2xl border border-brand-foreground/15 bg-brand-foreground/10 px-3 py-3 text-center backdrop-blur-sm sm:min-w-[5.5rem] sm:px-5"
        >
          <div className="font-display text-2xl font-extrabold tabular-nums text-brand-foreground sm:text-4xl">
            {u.value}
          </div>
          <div className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-brand-foreground/60">
            {u.label}
          </div>
        </div>
      ))}
    </div>
  );
}
