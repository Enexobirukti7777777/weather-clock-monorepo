import { useState, useEffect } from "react";
import { formatTime, getGreeting } from "@repo/utils";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>{getGreeting()}</h1>
      <h2 style={{ fontSize: "50px" }}>
        {formatTime(time)}
      </h2>
    </div>
  );
}

export default App;