import { useState } from "react";
import { Badge, Button, Card, Input, Loader } from "@repo/ui";

interface WeatherData {
  name: string;
  country: string;
  temperature: number;
  windspeed: number;
}

export function WeatherSearch() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!city.trim()) return;
    setLoading(true);
    setError(null);
    setWeather(null);

    try {
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`,
      );
      const geoData = await geoRes.json();
      if (!geoData.results || geoData.results.length === 0)
        throw new Error("City not found");

      const { latitude, longitude, name, country } = geoData.results[0];
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`,
      );
      const weatherData = await weatherRes.json();

      setWeather({ name, country, ...weatherData.current_weather });
    } catch (err: any) {
      setError(err.message || "Failed to fetch weather");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card style={{ minWidth: "350px", textAlign: "center" }}>
      <h2 style={{ marginBottom: "16px" }}>Weather Search</h2>
      <div style={{ display: "flex", gap: "8px", marginBottom: "24px" }}>
        <Input
          style={{ flexGrow: 1, marginBottom: 0 }}
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <Button onClick={handleSearch} disabled={loading}>
          {loading ? "..." : "Search"}
        </Button>
      </div>
      {loading && (
        <div style={{ padding: "20px" }}>
          <Loader size={30} color="#007bff" />
        </div>
      )}
      {error && <div style={{ color: "red", padding: "10px" }}>{error}</div>}
      {weather && !loading && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            alignItems: "center",
          }}
        >
          <h3>
            {weather.name}, {weather.country}
          </h3>
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
