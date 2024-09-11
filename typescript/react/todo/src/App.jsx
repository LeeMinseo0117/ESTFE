import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function Todo() {
  const [todoList, setTodoList] = useState([
    { id: "1", todo: "아침먹기" },
    { id: "2", todo: "점심먹기" },
  ]);
  return (
    <div>
      <h1>멋진 투두</h1>
      <ul>
        {todoList.map((todoItem) => (
          <li key={todoItem.id}>
            <p>{todoItem.todo}</p>
          </li>
        ))}
        {/* <li>{todoList[0].todo}</li> */}
        <input type="text"></input>
        <button type="button">투두추가</button>
      </ul>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
