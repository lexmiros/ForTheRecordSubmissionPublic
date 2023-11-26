import "../index.css";
import React, { useEffect, useState, useCallback } from "react";
import useTimer from "easytimer-react-hook";

interface TimerProps {
  delayInSeconds: number;
  updateOutputFrequencies: () => void;
}

const Timer = ({ delayInSeconds, updateOutputFrequencies }: TimerProps) => {
  // Ensure delayInSeconds is never 0 to prevent issues with the timer
  const adjustedDelayInSeconds = delayInSeconds === 0 ? 0.1 : delayInSeconds;

  const [timer] = useTimer({
    startValues: { seconds: adjustedDelayInSeconds },
    target: { seconds: 0 },
    countdown: true,
  });

  const [isRunning, setIsRunning] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const timerStart = useCallback(() => {
    timer.start({
      startValues: { seconds: adjustedDelayInSeconds },
      target: { seconds: 0 },
      countdown: true,
    });
    setIsRunning(true);
    setHasStarted(true);
  }, [timer, adjustedDelayInSeconds]);

  const timerPause = () => {
    timer.pause();
    setIsRunning(false);
  };

  useEffect(() => {
    if (!hasStarted) {
      timerStart();
    }

    const handleTargetAchieved = () => {
      timer.reset();
      updateOutputFrequencies();
    };

    timer.addEventListener("targetAchieved", handleTargetAchieved);

    if (timer.getTimeValues().seconds === 0) {
      setIsRunning(false);
    }
    return () => {
      timer.removeEventListener("targetAchieved", handleTargetAchieved);
    };
  }, [timer, updateOutputFrequencies, hasStarted, timerStart]);

  const buttonStyle: React.CSSProperties = {
    width: "100px",
    color: "white",
    backgroundColor: isRunning ? "red" : "green",
    border: "1px solid #ccc",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="timer">
      <div className="centeredTimer">
        <div className="timerOutput">{timer.getTimeValues().toString()}</div>
      </div>
      <br />
      <button style={buttonStyle} onClick={isRunning ? timerPause : timerStart}>
        {isRunning ? "Halt" : "Resume"}
      </button>
      <br />
      <br />
    </div>
  );
};

export default Timer;
