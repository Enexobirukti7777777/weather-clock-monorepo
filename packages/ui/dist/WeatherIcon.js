import { jsx as _jsx } from "react/jsx-runtime";
export const WeatherIcon = ({ code, size = 64 }) => {
    const icons = {
        0: "☀️", 1: "🌤", 2: "⛅️", 3: "☁️",
        45: "🌫", 51: "🌧", 61: "🌦", 71: "❄️", 95: "⛈"
    };
    return _jsx("span", { style: { fontSize: size }, children: icons[code] || "🌥" });
};
