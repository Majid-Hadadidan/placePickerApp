import { useEffect, useState } from "react";

export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);
  useEffect(() => {
    const Interval = setInterval(() => {
      console.log("remainingTime");
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);
    return () => {
      console.log("interval");
      clearInterval(Interval);
    };
  }, []);
  return <progress value={remainingTime} max={timer}></progress>;
}
