// 스코프
// 접근해서 사용할 수 있는 범위

// 전역 스코프 : 어디서든 접근이 가능
var a = 10;
let b = 20;
const c = 30;

function func1() {
  // 함수 스코프
  var fA = 40;
  let fB = 50;
  const fC = 60;
  console.log("function: ", a, b, c);
  console.log("function: ", fA, fA, fC);
}
func1();
console.log(fA);
console.log(fB);
console.log(fC);
// 지역변수로 인해 출력 불가능
// fA = 함수 스코프

{
  // var -> 함수 스코프
  // let, const -> 블럭 스코프
  var bA = 70;
  let bB = 80;
  const bC = 90;
  console.log("block: ", a, b, c);
  console.log("block: ", bA, bA, bC);
}
