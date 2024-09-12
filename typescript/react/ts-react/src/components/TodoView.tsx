import { ChangeEvent } from "react";
import { TodoItem } from "../hooks/todoHook";

// TodoViewProps 인터페이스 생성
interface TodoViewProps {
  // todoList는 TodoItem[] 타입을 가짐
  todoList: TodoItem[];
  // handleInput는 반환값이 없는 HTMLInputElement타입의 ChangeEvent를 가짐
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
  // todoText는 string 타입을 가짐
  todoText: string;
  // handleButton는 반환값이 없는 함수
  handleButton: () => void;
}

/* React.FC: "Function Component"의 약자로, React에서 함수형 컴포넌트를 정의할 때 사용되는 TypeScript 타입
이 타입을 사용하면 컴포넌트의 props 타입을 명시적으로 정의할 수 있음*/
// TodoViewProps가 정의한 타입을 매개변수로 가지는 TodoView 함수 생성
const TodoView: React.FC<TodoViewProps> = ({
  todoList,
  handleInput,
  todoText,
  handleButton,
}) => {
  // 반환값
  return (
    <div>
      <h1>멋진 투두</h1>
      <ul>
        {/* todoList의 id, todo를 순회하여 새로운 객체 생성 */}
        {todoList.map((todoItem) => (
          <li key={todoItem.id}>
            <p>{todoItem.todo}</p>
          </li>
        ))}
      </ul>
      {/* 인풋의 타입은 텍스트, 값은 todoText, 인풋 값이 변경될 때 발생하는 이벤트는 handleInput에서 보여줌..? */}
      <input type="text" value={todoText} onChange={handleInput} />
      {/* 버튼의 타입은 버튼, 클릭시 handleButton이 실행 */}
      <button type="button" onClick={handleButton}>
        투두추가
      </button>
    </div>
  );
};

export default TodoView;
