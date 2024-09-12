import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  // 반환값 작성
  return (
    // 컴포넌트를 감싸는 div 작성
    <div className="App">
      {/* todo 컴포넌트 불러오기 */}
      <Todo />
    </div>
  );
}

export default App;
