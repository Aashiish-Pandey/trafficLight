import { useState, useEffect } from "react";
function TrafficLight({ light }) {
  const [activeLight, setActiveLight] = useState("green");

  useEffect(() => {
    const { duration, next } = light[activeLight];
    setTimeout(() => {
      setActiveLight(next);
    }, duration);
  }, [light, activeLight]);
  return (
    <div className="light-container">
      {Object.keys(light).map((tLight) => (
        <div
          className="tLight"
          style={{ backgroundColor: tLight === activeLight ? tLight : "grey" }}
        ></div>
      ))}
    </div>
  );
}

export default TrafficLight;
