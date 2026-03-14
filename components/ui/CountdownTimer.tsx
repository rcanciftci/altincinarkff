"use client";

import { useEffect, useState } from "react";
import { formatCountdown, padZero } from "@/lib/utils";

const FESTIVAL_DATE = new Date("2026-05-08T10:00:00+03:00").getTime();

export default function CountdownTimer() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(formatCountdown(0));

  useEffect(() => {
    setMounted(true);
    const tick = () => setTimeLeft(formatCountdown(FESTIVAL_DATE - Date.now()));
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: "Gün", value: timeLeft.days },
    { label: "Saat", value: timeLeft.hours },
    { label: "Dakika", value: timeLeft.minutes },
    { label: "Saniye", value: timeLeft.seconds },
  ];

  if (!mounted) {
    return (
      <div
        className="flex items-center gap-4 sm:gap-8"
        role="timer"
        aria-label="Festival başlangıcına kalan süre"
      >
        {["Gün", "Saat", "Dakika", "Saniye"].map((label, i) => (
          <div key={label} className="flex items-center gap-4 sm:gap-8">
            <div className="flex flex-col items-center">
              <span className="countdown-unit" suppressHydrationWarning>--</span>
              <span className="text-[0.6rem] sm:text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[#6B6B6B] mt-2">
                {label}
              </span>
            </div>
            {i < 3 && (
              <span className="countdown-unit text-[#2A2A2A] pb-4" aria-hidden="true">:</span>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className="flex items-center gap-4 sm:gap-8"
      role="timer"
      aria-label="Festival başlangıcına kalan süre"
    >
      {units.map((unit, i) => (
        <div key={unit.label} className="flex items-center gap-4 sm:gap-8">
          <div className="flex flex-col items-center">
            <span className="countdown-unit" aria-live="polite">
              {padZero(unit.value)}
            </span>
            <span className="text-[0.6rem] sm:text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[#6B6B6B] mt-2">
              {unit.label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span className="countdown-unit text-[#2A2A2A] pb-4" aria-hidden="true">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
