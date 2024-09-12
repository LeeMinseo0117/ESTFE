import { useEffect, useState } from "react";

// TodoItem의 인터페이스 생성
export interface TodoItem {
  // id는 string 타입
  id: string;
  // todo는 string 타입
  todo: string;
}

// useTodoData 함수
// useTodoData 함수의 배열 구조 분해 할당? 타입 지정
// 첫번째는 TodoItem[], 두번째는 (todoText: string) => void, 세번째는 boolean 타입
function useTodoData(): [TodoItem[], (todoText: string) => void, boolean] {
  // 로딩 페이지를 관리하는 useState 생성, isLoading 변수를 가지며 이 변수를 변경할 수 있는 setIsLoading 함수
  // 초기값은 fasle
  const [isLoading, setIsLoading] = useState(false);
  // 할일 목록을 관리하는 useState 생성, todoList 변수를 가지며 이 변수를 변경할 수 있는 setTodoList 함수
  // TodoItem 인터페이스의 배열을 감싼? 타입을 가지며 초기값은 빈 배열
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  // 효과를 주는 useEffect 훅(함수) 작성
  useEffect(() => {
    // isLoading를 true로 변경
    setIsLoading(true);
    // getTodo 이름을 가지는 async 함수 생성
    // async 키워드: 어떤 함수든 프로미스 객체를 반환 가능
    const getTodo = async () => {
      // "http://localhost:3300/todos"를 동기적으로 받아오는 res 변수 생성
      const res = await fetch("http://localhost:3300/todos");
      // TodoItem[] 타입의 todoData 변수에 res를 js?형태로 변경하여 저장
      const todoData: TodoItem[] = await res.json();
      // todoData 반환
      return todoData;
    };

    // 초기화 함수
    // initTodo 이름을 가지는 async 함수 생성
    const initTodo = async () => {
      // todoData 변수에 동기적으로 getTodo함수 실행
      const todoData = await getTodo();
      // 로딩 페이지의 상태를 false로 변경
      setIsLoading(false);
      // todoList에 todoData를 인자로 호출?
      setTodoList(todoData);
    };
    initTodo();
    // 처음 한 번만 실행
  }, []);

  // 인터페이스 TodoItem의 Partial타입인 newTodo를 매개변수로 가진 postTodo 이름의 async 함수 생성
  // 반환값은 Promise이며 인터페이스 TodoItem 타입을 가짐
  const postTodo = async (newTodo: Partial<TodoItem>): Promise<TodoItem> => {
    // "http://localhost:3300/todos"를 동기적으로 응답받는 res 변수 생성
    const res = await fetch("http://localhost:3300/todos", {
      // POST 방식
      method: "POST",
      // json 타입으로 받기?
      headers: {
        "Content-Type": "application/json",
      },
      //
      body: JSON.stringify(newTodo),
    });
    // addedTodo 변수에 동기적으로 res의 json 형태로 변환한 값을 저장
    const addedTodo = await res.json();
    // addedTodo 반환
    return addedTodo;
  };

  // string 타입의 todoText를 매개변수로 받는 addTodo 이름의 async 함수 생성
  // 반환값은 Promise인데 반환값이 없는..?
  const addTodo = async (todoText: string): Promise<void> => {
    // 로딩 상태를 true로 변경
    setIsLoading(true);
    // 할일을 새로 작성하는 객체 생성
    const newTodo = {
      // 키는 todo, 값은 todoText를 가짐
      todo: todoText,
    };
    // 새로운 할일을 보내는 투두 함수에서 호출....하여 addedTodo 변수에 저장
    const addedTodo = await postTodo(newTodo);
    // 로딩 페이지의 상태를 false로 변환
    setIsLoading(false);
    // prevTodoList를 매개변수로 가지고 할일 목록을 변경하는 setTodoList 함수 생성..
    setTodoList((prevTodoList) => {
      // 전개구문을 이용하여 기존 투두 리스트에 새로운 투두 추가하여 새로운 배열 생성하여 반환
      return [...prevTodoList, addedTodo];
    });
  };
  // todoList, addTodo, isLoading를 반환
  return [todoList, addTodo, isLoading];
}

export default useTodoData;
