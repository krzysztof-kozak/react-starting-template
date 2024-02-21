import { useEffect, useRef, useState } from "react";
import "./zadanka.css";

function SygnalizacjaV3() {
  const [activeLight, setActiveLight] = useState("red");
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const trafficLightStyle = {
    width: 200,
    height: 200,
    borderRadius: "100%",
    border: "2px solid",
    marginBottom: "20px",
  };

  function handleClick() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current.value);
    }
    setIsRunning((prevIsRunning) => !prevIsRunning);
  }

  useEffect(() => {
    if (!isRunning) return;

    const intervalId = setInterval(() => {
      if (activeLight === "red") {
        setActiveLight("yellow");
        return;
      }
      if (activeLight === "yellow") {
        setActiveLight("green");
        return;
      }
      if (activeLight === "green") {
        setActiveLight("red");
        return;
      }
    }, 1000);

    intervalRef.current = intervalId;

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [activeLight, isRunning]);

  const isRedActive = activeLight === "red";
  const isYellowActive = activeLight === "yellow";
  const isGreenActive = activeLight === "green";

  return (
    <div>
      <div
        style={{
          ...trafficLightStyle,
          backgroundColor: isRedActive ? "red" : undefined,
        }}
      ></div>
      <div
        style={{
          ...trafficLightStyle,
          backgroundColor: isYellowActive ? "yellow" : undefined,
        }}
      ></div>
      <div
        style={{
          ...trafficLightStyle,
          backgroundColor: isGreenActive ? "green" : undefined,
        }}
      ></div>

      <button className={isRunning ? "red" : "green"} onClick={handleClick}>
        {isRunning ? "STOP" : "START"}
      </button>
    </div>
  );
}

export { SygnalizacjaV3 };
