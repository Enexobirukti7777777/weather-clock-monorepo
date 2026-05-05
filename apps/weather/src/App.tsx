import { useEffect, useState } from "react";
import { getGreeting } from "@repo/utils";

function App() {
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=9.03&longitude=38.74&current_weather=true")
      .then((res) => res.json())
      .then((data) => {
        setWeather(data.current_weather);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>🌤️ {getGreeting()}</h1>

      {weather ? (
        <>
          <h2>Temperature: {weather.temperature}°C</h2>
          <p>Wind Speed: {weather.windspeed} km/h</p>
        </>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
}

export default App;