import { useEffect, useState } from "react";

export interface TodoItem {
  id: string;
  todo: string;
}

function useTodoData(): [TodoItem[], (todoText: string) => void, boolean] {
  const [isLoading, setIsLoading] = useState(false);
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3000/todos")
      .then((res) => {
        return res.json();
      })
      .then((todoData) => {
        setIsLoading(false);
        setTodoList(todoData);
      });
  }, []);
  const postTodo = (todoText: string): void => {
    setIsLoading(true);
    const newTodo = {
      todo: todoText,
    };

    fetch("http://localhost:3000/todos", {
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
  };
  return [todoList, postTodo, isLoading];
}

export default useTodoData;
