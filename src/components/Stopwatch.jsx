import { useRef } from "react";
import { useState } from "react";

export default function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  const timeIntervalId = useRef(null);

  const startStopwatch = () => {
    if (isRunning) {
      clearInterval(timeIntervalId.current);
    } else {
      clearInterval(timeIntervalId.current);
      timeIntervalId.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    setIsRunning(!isRunning);
  };

  const resetStopwatch = () => {
    clearInterval(timeIntervalId.current);
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (time) => {
    console.log(time);
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes.toString()}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div>
      <p style={{ textAlign: "center" }}>Time: {formatTime(time)}</p>
      <button className="startBtn" onClick={startStopwatch}>
        {isRunning ? "Stop" : "Start"}
      </button>
      <button className="resetBtn" onClick={resetStopwatch}>
        Reset
      </button>
    </div>
  );
}
