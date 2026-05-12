import { useEffect, useState } from "react";
import { Card, Loader, Badge } from "@repo/ui";

interface ForecastProps {
  latitude: number;
  longitude: number;
}

export function WeatherForecast({ latitude, longitude }: ForecastProps) {
  const [forecast, setForecast] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min&timezone=auto`,
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch forecast");
        return res.json();
      })
      .then((data) => {
        setForecast(data.daily);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [latitude, longitude]);

  if (loading)
    return (
      <Card style={{ textAlign: "center", minWidth: "300px" }}>
        <Loader size={30} />
        <p>Loading forecast...</p>
      </Card>
    );

  if (error)
    return (
      <Card style={{ textAlign: "center", minWidth: "300px", color: "red" }}>
        <p>{error}</p>
      </Card>
    );

  return (
    <Card style={{ minWidth: "300px", textAlign: "center" }}>
      <h3 style={{ marginBottom: "16px" }}>7-Day Forecast</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {forecast.time.map((date: string, index: number) => (
          <div
            key={date}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "8px",
              borderBottom: "1px solid #eee",
            }}
          >
            <span style={{ fontWeight: "bold" }}>
              {new Date(date).toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
              })}
            </span>
            <div style={{ display: "flex", gap: "8px" }}>
              <Badge variant="primary">
                {forecast.temperature_2m_max[index]}°C
              </Badge>
              <Badge variant="secondary">
                {forecast.temperature_2m_min[index]}°C
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
