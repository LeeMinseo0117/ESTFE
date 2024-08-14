import React, { useState } from "react";

function ColorText(props) {
  return <h1 style={{ color: props.color }}>색이 바뀌었어요!</h1>;
}

function App8() {
  // let like = 0;
  const [like, setLike] = useState(0);
  // 0은 like 값의 초기값
  // setLike는 함수
  // like를 변경시킬 수 있는 유일한 함수

  // 아래와 동일한 코드
  // const like = useState(0)[0];
  // const setLike = useState(0)[1];
  function clickLike() {
    like += 1;
    console.log(like);
  }

  return (
    <div>
      <ColorText color="red" />
      <ColorText color="green" />
      <ColorText color="blue" />

      {/* <button onClick={clickLike}>버튼 {like}</button> */}
      <button>버튼 {like}</button>
    </div>
  );
}
export default App8;
