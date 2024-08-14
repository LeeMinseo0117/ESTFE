import "./App.css";

function App() {
  // 현재 시간 정보가 담겨있는 객체 반환하여 변수에 담기
  const time = new Date();

  console.log(time);
  // 2000년대 반영
  console.log(time.getFullYear());
  // 1900년대 반영
  console.log(time.getYear());
  // 0번째 인덱스부터 시작하여 항상 +1을 해줘야함
  console.log(time.getMonth() + 1);
  console.log(time.getDate());
  // 요일 정보를 숫자 데이터로 반환
  console.log(time.getDay());
  console.log(time.getHours());
  console.log(time.getMinutes());
  console.log(time.getSeconds());

  // 시간을 12시간으로 표현하는 방법
  const hour = time.getHours() > 12 ? time.getHours() - 12 : time.getHours;

  // 시간을 오전, 오후로 표현하는 방법
  const anpm = time.getHours() > 12 ? "오후" : "오전";

  // 분지 한자리일 경우 앞에 0을 붙이기
  const minutes =
    time.getMinutes() > 10 ? time.getMinutes() : "0" + time.getMinutes();

  return (
    <div>
      <h1>안녕, 라이캣 1호</h1>
      <h2>안녕, 라이캣 2호!</h2>
      <div className="newClass" />
      <div style={{ backgroundColor: "" }}>
        <h3 style={{ color: "red" }}>년 : {time.getFullYear()}</h3>
        <h3>
          월/일 : {time.getMonth()}/{time.getDate()}
        </h3>
        <h3>
          시간 : {time.getHours()}시 {time.getMinutes()}분 {time.getSeconds()}초
        </h3>
      </div>
    </div>
  );
}
export default App;
