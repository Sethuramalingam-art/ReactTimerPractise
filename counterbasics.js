import { useEffect, useState, useRef } from "react";

const Counter = () => {
  const [time, setTime] = useState(0);
  const id = useRef();

  useEffect(() => {
    handleStart();
    return () => clearInterval(id.current);
  });

  const handleStart = () => {
    id.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };
  return (
    <div>
      <span>{time}</span>
      <button onClick={handleStart}>Start</button>
      <button onClick={() => clearInterval(id.current)}>Pause</button>
      <button
        onClick={() => {
          clearInterval(id.current);
          setTime(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
