import { useState } from "react";

function App() {
  const [message, setMessage] = useState();
  const onHandleOnMouseEnter = () => {
    setMessage("안녕하세요");
  };
  const onHandleOnMouseLeave = () => {
    setMessage("안녕히가세요");
  };
  return (
    <div
      onMouseEnter={onHandleOnMouseEnter}
      onMouseLeave={onHandleOnMouseLeave}
    >
      {message}
    </div>
  );
}
export default App;
