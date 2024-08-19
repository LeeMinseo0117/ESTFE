import MenuList from "./components/MenuList/MenuList";
import DisplayMood from "./components/DisplayMood/DisplayMood";
import { useState } from "react";
import "./App2.css";

function App2() {
  const [currentMood, setCurrentMood] = useState("");

  console.log(currentMood);

  return (
    <>
      <h1>오늘의 기분을 선택해주세요 😄</h1>
      <article>
        <MenuList onItemClick={setCurrentMood} mood={currentMood} />
        <DisplayMood mood={currentMood} />
      </article>
    </>
  );
}

export default App2;
