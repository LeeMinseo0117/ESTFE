import { useState, useRef } from "react";

export default function StopwatchFixed() {
  // 시작한 시간
  const startTime = useRef(0);

  // 인터벌함수의 id
  const intervalId = useRef(null);

  // 경과 시간
  const [secondsPassed, setSecondsPassed] = useState(0);

  function handleStart() {
    // 현재 시간 설정. 흘러간 시간을 빼서 멈췄던 상황에서 다시 시작하도록 합니다.
    startTime.current = Date.now() - secondsPassed;

    intervalId.current = setInterval(() => {
      // 흘러간 시간을 계산합니다.
      setSecondsPassed(Date.now() - startTime.current);
      console.log(secondsPassed);
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalId.current);
  }

  function handleReset() {
    clearInterval(intervalId.current);
    setSecondsPassed(0);
  }

  return (
    <>
      <h1>Time passed: {(secondsPassed / 1000).toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>reset</button>
    </>
  );
}
