import { useState } from "react";
import { Card, Button, Badge, Loader } from "@repo/ui";

interface Weather {
  temperature: number;
  windspeed: number;
}

export function WeatherByLocation() {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDetect = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }
    setLoading(true);
    setError(null);
    setWeather(null);

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        try {
          const res = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`,
          );
          const data = await res.json();
          setWeather(data.current_weather);
        } catch {
          setError("Failed to fetch weather");
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError("Location access denied");
        setLoading(false);
      },
    );
  };

  return (
    <Card style={{ minWidth: "350px", textAlign: "center" }}>
      <h2 style={{ marginBottom: "16px" }}>📍 My Location Weather</h2>
      <Button onClick={handleDetect} disabled={loading}>
        {loading ? "Detecting..." : "Detect My Location"}
      </Button>
      {loading && (
        <div style={{ marginTop: "16px" }}>
          <Loader size={30} color="#007bff" />
        </div>
      )}
      {error && <p style={{ color: "red", marginTop: "16px" }}>{error}</p>}
      {weather && !loading && (
        <div
          style={{
            marginTop: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            alignItems: "center",
          }}
        >
          <h2>
            Temp: <Badge variant="primary">{weather.temperature}°C</Badge>
          </h2>
          <p>
            Wind: <Badge variant="secondary">{weather.windspeed} km/h</Badge>
          </p>
        </div>
      )}
    </Card>
  );
}
