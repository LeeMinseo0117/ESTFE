import TodoView from "./TodoView";
import { useState } from "react";
import useTodoData from "../hooks/todoHook";

const Todo = () => {
  // 입력된 값을 관리하는 useState(빈 문자열) 추가
  // todoText 변수와 todoText 변수의 상태를 변경할 수 있는 setTodoText 함수
  const [todoText, setTodoText] = useState("");
  const [todoList, postTodo, isLoading] = useTodoData();
  // input 값이 변경 되었을 때 발생하는 이벤트 처리 부분의 함수
  const handleInput = (e) => {
    console.log(e.target.value);
    // 이벤트의 값을 저장하는 변수 생성
    const newTodoText = e.target.value;
    // 입력된 값의 상태를 관리하는 변수의 상태를 변경하는 함수에 저장
    setTodoText(newTodoText);
    // console.log(todoText);
  };
  const handleButton = () => {
    postTodo(todoText);
  };

  const props = { todoList, handleInput, todoText, handleButton };

  return isLoading ? <h1>로딩중 페이지</h1> : <TodoView {...props} />;
};
export default Todo;
