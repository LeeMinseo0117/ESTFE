import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function Todo() {
  // 투두 리스트 상태 관리하는 useState(객체상태) 추가
  // todoList 변수와 todoList 변수의 상태를 변경할 수 있는 setTodoList 함수
  const [todoList, setTodoList] = useState([
    { id: "1", todo: "아침먹기" },
    { id: "2", todo: "점심먹기" },
  ]);
  // 입력된 값을 관리하는 useState(빈 문자열) 추가
  // todoText 변수와 todoText 변수의 상태를 변경할 수 있는 setTodoText 함수
  const [todoText, setTodoText] = useState("");

  // input 값이 변경 되었을 때 발생하는 이벤트 처리 부분의 함수
  const handleInput = (e) => {
    console.log(e.target.value);
    // 이벤트의 값을 저장하는 변수 생성
    const newTodoText = e.target.value;
    // 입력된 값의 상태를 관리하는 변수의 상태를 변경하는 함수에 저장
    setTodoText(newTodoText);
    // console.log(todoText);
  };

  // 버튼 클릭시 발생하는 이벤트 관리하는 함수 생성
  const handleButton = () => {
    // prevTodoList를 매개변수로 받는 setTodoList 함수 생성
    setTodoList((prevTodoList) => {
      // newTodo에 아이디와 내용 추가
      const newTodo = {
        id: +todoList[todoList.length - 1].id + 1,
        todo: todoText,
      };
      // console.log(prevTodoList);
      // 이전 투두에 새로운 투두 추가
      const newTodoList = [...prevTodoList, newTodo];
      // 투두 리스트는 5개 까지만 작성 가능한 조건문 작성
      if (newTodoList.length > 5) {
        alert("5개만 추가 가능");
        // 길이가 5 넘으면 맨 앞 li 제거
        todoList.shift();
      }
      return newTodoList;
    });
  };

  return (
    <div>
      <h1>멋진 투두</h1>
      <ul>
        {/*  */}
        {todoList.map((todoItem) => (
          <li key={todoItem.id}>
            <p>{todoItem.todo}</p>
          </li>
        ))}
        {/* <li>{todoList[0].todo}</li> */}
        {/* onChange: React에서 폼 요소의 값이 변경될 때 발생하는 이벤트를 처리하는 데 사용되는 prop */}
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
