import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [time, setTime] = useState(0);
  const intervalId = useRef(null);
  useEffect(() => {
    if (time >= 2) {
      if (confirm("Press a button!") == true) {
        clearInterval(intervalId.current);
        intervalId.current = null;
        setTime(0);
      }
    }
  }, [time]);
  const handleStart = () => {
    if (intervalId.current) return; // Prevent multiple intervals
    intervalId.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  return (
    <div className="App">
      <button onClick={handleStart}>Start</button>
      <button>Stop</button>
      <div>Time:{time}</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
