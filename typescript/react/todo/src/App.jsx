import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function Todo() {
  const [todoList, setTodoList] = useState([
    { id: "1", todo: "아침먹기" },
    { id: "2", todo: "점심먹기" },
  ]);
  const [todoText, setTodoText] = useState("");
  const handleInput = (e) => {
    // console.log(e.target.value);
    const newTodoText = e.target.value;
    setTodoText(newTodoText);
    // console.log(todoText);
  };

  const handleButton = () => {
    setTodoList((prevTodoList) => {
      const newTodo = {
        id: +todoList[todoList.length - 1].id + 1,
        todo: todoText,
      };
      const newTodoList = [...prevTodoList, newTodo];
      if (newTodoList.length > 5) {
        alert("5개만 추가 가능");
        todoList.shift();
      }
      return newTodoList;
    });
  };

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
        <input type="text" value={todoText} onChange={handleInput} />
        <button type="button" onClick={handleButton}>
          투두추가
        </button>
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
