import React, { useState, useEffect } from "react"; //useEffect추가

function Counter() {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount(count + 1);
  };
  //count가 변했을때 동작할 행동을 useEffect를 이용해 구현
  useEffect(() => {
    if (count % 2) {
      console.log("홀수입니다");
    } else if (count !== 0 || count % 2 === true) {
      console.log("짝수입니다");
    }
  }, [count]);
  return (
    <>
      <div>{count}</div>
      <button onClick={countUp}>up!</button>
    </>
  );
}

function Time(props) {
  const [today, setToday] = useState(new Date());
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();
  console.log("렌더링이 됩니다..?"); //렌더링이 잘 되는지 확인용! 꼭 넣고 진행해주세요.

  useEffect(() => {
    if (today !== setToday) {
      console.log("시간 변경");
    }
  }, [today]);
  return (
    <div>
      <h1>
        시간 : {hour}시 {min}분 {sec}초
      </h1>
    </div>
  );
}
function App() {
  return (
    <div>
      <Counter />
      <Time />
    </div>
  );
}

export default App;
