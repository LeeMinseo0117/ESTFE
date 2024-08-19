import { useState } from "react";

function App() {
  const [like, setLike] = useState("");

  function clickLike() {
    // +1 은 기존의 like 값과 1을 더해 새로운 값을 반환하는것이고
    // ++ 변수의 값 자체를 직접적으로 변경하려는 시도입니다. -> 이런식으로 스테이트 업데이트 안 됨
    // setLike(like + 1);
    if (like === "") {
      setLike("like");
    } else {
      setLike("");
    }
  }

  return (
    <div style={{ border: "solid 1px", width: "500px" }}>
      <button onClick={clickLike}>like</button> <span>{like}</span>
    </div>
  );
}

export default App;
