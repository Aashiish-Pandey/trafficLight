import "./styles.css";
import TrafficLight from "./TrafficLight";

export default function App() {
  const config = {
    red: {
      duration: 4000,
      next: "green"
    },
    yellow: {
      duration: 500,
      next: "red"
    },
    green: {
      duration: 3000,
      next: "yellow"
    }
  };
  return (
    <div className="App">
      <TrafficLight light={config} />
    </div>
  );
}
