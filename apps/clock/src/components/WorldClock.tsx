import { useState, useEffect } from "react";
import { Card, Badge } from "@repo/ui";

interface WorldClockProps {
  city: string;
  timeZone: string;
}

export function WorldClock({ city, timeZone }: WorldClockProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  return (
    <Card style={{ minWidth: "250px", textAlign: "center" }}>
      <h3 style={{ margin: "0 0 12px 0" }}>{city}</h3>
      <h2 style={{ fontSize: "36px", margin: "0 0 16px 0" }}>
        {formatter.format(time)}
      </h2>
      <Badge variant="secondary">{timeZone}</Badge>
    </Card>
  );
}
