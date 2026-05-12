import { useEffect, useState } from "react";
import { getGreeting } from "@repo/utils";
import { Card, Loader, Badge, Input, Button } from "@repo/ui";
import { WeatherForecast } from "./components/WeatherForecast";
function App() {
    const [weather, setWeather] = useState(null);
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
    return (<div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "100px", gap: "24px" }}>
      <Card style={{ textAlign: "center", minWidth: "350px" }}>
        <h1>🌤️ {getGreeting()}</h1>
        <Input placeholder="Enter city name (demo)" style={{ marginBottom: "16px" }}/>
        <Button style={{ marginBottom: "24px" }} onClick={() => alert("Search functionality to be implemented!")}>Search</Button>

        {weather ? (<div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center" }}>
            <h2>
              Temperature: <Badge variant="primary">{weather.temperature}°C</Badge>
            </h2>
            <p>
              Wind Speed: <Badge variant="secondary">{weather.windspeed} km/h</Badge>
            </p>
          </div>) : (<div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", marginTop: "20px" }}>
            <Loader size={30} color="#007bff"/>
            <p>Loading weather...</p>
          </div>)}
      </Card>
      <WeatherForecast latitude={9.03} longitude={38.74}/>
    </div>);
}
export default App;
