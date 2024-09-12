import { useEffect, useState } from "react";

// use로 시작하는게 규칙
function useTodoData() {
  const [isLoading, setIsLoading] = useState(false);
  // 투두 리스트 상태 관리하는 useState(빈 배열) 추가
  // todoList 변수와 todoList 변수의 상태를 변경할 수 있는 setTodoList 함수
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3300/todos")
      .then((res) => {
        return res.json();
      })
      .then((todoData) => {
        setIsLoading(false);
        setTodoList(todoData);
      });
  }, []);

  const postTodo = (todoText) => {
    setIsLoading(true);
    const newTodo = {
      todo: todoText,
    };

    fetch("http://localhost:3300/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    })
      .then((res) => {
        return res.json();
      })
      .then((newTodo) => {
        setIsLoading(false);
        setTodoList((prevTodoList) => {
          return [...prevTodoList, newTodo];
        });
      });
    // // prevTodoList를 매개변수로 받는 setTodoList 함수 생성
    // setTodoList((prevTodoList) => {
    //   // newTodo에 아이디와 내용 추가
    //   const newTodo = {
    //     id: +todoList[todoList.length - 1].id + 1,
    //     todo: todoText,
    //   };
    //   // console.log(prevTodoList);
    //   // 이전 투두에 새로운 투두 추가
    //   const newTodoList = [...prevTodoList, newTodo];
    //   // 투두 리스트는 5개 까지만 작성 가능한 조건문 작성
    //   if (newTodoList.length > 5) {
    //     alert("5개만 추가 가능");
    //     // 길이가 5 넘으면 맨 앞 li 제거
    //     todoList.shift();
    //   }
    //   return newTodoList;
    // });
  };
  return [todoList, postTodo, isLoading];
}
export default useTodoData;
