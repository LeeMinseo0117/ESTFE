import { useState, ChangeEvent } from "react";
import TodoView from "./TodoView";
import useTodoData from "../hooks/todoHook";

// Todo 컴포넌트 함수
const Todo = () => {
  // input안의 텍스트의 값이 변경될 때마다 페이지를 업데이트하는 string형의 useState(빈 문자열) 생성
  // 변수인 todoText와 그 변수의 값을 변경하는 setTodoText 함수
  const [todoText, setTodoText] = useState<string>("");
  /* 커스텀 훅(Custom Hook): React의 강력한 기능 중 하나로,
  컴포넌트 로직을 재사용 가능한 함수로 추출할 수 있게 해줌
  이를 통해 상태 관리나 사이드 이펙트 같은 로직을 여러 컴포넌트에서 쉽게 재사용할 수 있음 */
  // todoList(할일 목록), postTodo(할일 작성), isLoading(로딩 상태)를 가지는 커스텀 훅 생성
  // 각각 TodoItem[], string, boolean의 타입을 가짐
  // 훅이 함수
  const [todoList, postTodo, isLoading] = useTodoData();
  // onChange: 폼 요소의 값이 변경될 때 발생하는 이벤트를 처리하는 데 사용
  // ChangeEvent: 폼 요소들(예: input, textarea, select 등)의 값이 변경될 때 발생하는 이벤트를 처리하는 데 사용
  // HTMLInputElement 타입의 체인지 이벤트의 매개변수를 가지는 handleInput 함수 생성
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    // newTodoText는 변경된 값을 가짐
    const newTodoText = e.target.value;
    // input의 값을 변경하는 함수(setTodoText)에서 newTodoText를 인자로 호출..?
    setTodoText(newTodoText);
  };
  // handleButton 함수 생성
  const handleButton = () => {
    // postTodo함수에서 todoText 실행..?
    postTodo(todoText);
  };

  // props에 todoList, handleInput, todoText, handleButton 저장
  const props = { todoList, handleInput, todoText, handleButton };
  // isLoading이 true면 <h1>로딩중 페이지</h1> 리턴, false면 TodoView에 props를 전개하여 컴포넌트 실행..
  return isLoading ? <h1>로딩중 페이지</h1> : <TodoView {...props} />;
};

export default Todo;
