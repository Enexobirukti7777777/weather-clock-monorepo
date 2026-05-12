import { getGreeting } from "@repo/utils";
import { WeatherForecast } from "./components/WeatherForecast";
import { WeatherSearch } from "./components/WeatherSearch";
import { WeatherByLocation } from "./components/WeatherByLocation";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
        gap: "24px",
      }}
    >
      <h1>🌤️ {getGreeting()}</h1>
      <WeatherSearch />
      <WeatherByLocation />
      <WeatherForecast latitude={9.03} longitude={38.74} />
    </div>
  );
}

export default App;
