import { useState, useEffect } from "react";
import { formatTime, getGreeting } from "@repo/utils";
import { Button, Card } from "@repo/ui";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
      <Card style={{ textAlign: "center", minWidth: "300px" }}>
        <h1>{getGreeting()}</h1>
        <h2 style={{ fontSize: "50px" }}>
          {formatTime(time)}
        </h2>
        <Button onClick={() => alert("Clock clicked!")}>Click Me</Button>
      </Card>
    </div>
  );
}

export default App;