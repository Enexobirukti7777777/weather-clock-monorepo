import { useState, useEffect } from "react";
import { formatTime, getGreeting } from "@repo/utils";
import { Button, Card } from "@repo/ui";
import { WorldClock } from "./components/WorldClock";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px", gap: "24px" }}>
      <Card style={{ textAlign: "center", minWidth: "300px" }}>
        <h1>{getGreeting()}</h1>
        <h2 style={{ fontSize: "50px" }}>
          {formatTime(time)}
        </h2>
        <Button onClick={() => alert("Clock clicked!")}>Click Me</Button>
      </Card>

      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
        <WorldClock city="Tokyo" timeZone="Asia/Tokyo" />
        <WorldClock city="New York" timeZone="America/New_York" />
      </div>
    </div>
  );
}

export default App;