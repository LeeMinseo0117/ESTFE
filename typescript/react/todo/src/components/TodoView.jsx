const TodoView = ({ todoList, handleInput, todoText, handleButton }) => {
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
        {/* onChange: React에서 폼 요소의 값이 변경될 때 발생하는 이벤트를 처리하는 데 사용되는 prop */}
        <input type="text" value={todoText} onChange={handleInput} />
        <button type="button" onClick={handleButton}>
          투두추가
        </button>
      </ul>
    </div>
  );
};
export default TodoView;
