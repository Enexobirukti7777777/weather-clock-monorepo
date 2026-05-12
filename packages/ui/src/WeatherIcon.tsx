import React from "react";

interface WeatherIconProps {
  code: number;
  size?: number;
}

export const WeatherIcon = ({ code, size = 64 }: WeatherIconProps) => {
  const icons: Record<number, string> = {
    0: "☀️", 1: "🌤", 2: "⛅️", 3: "☁️",
    45: "🌫", 51: "🌧", 61: "🌦", 71: "❄️", 95: "⛈"
  };
  return <span style={{ fontSize: size }}>{icons[code] || "🌥"}</span>;
};