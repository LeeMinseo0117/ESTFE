console.log(a);
var a = 10;

// ->
// var a; // 선언문
// a = 10; // 할당문

// ->
// var a;
//console.log(a);
// a = 10;
// 선언문만 앞으로 가는것처럼 보임

//선언문과 할당문을 동시에 사용하더라도 선언문만 먼저 할당

console.log(b);
let b = 20;
// 에러 발생
// ->
// let b ;
// b = 20;
//선언문과 할당문으로 나누어지게 됨

console.log(c);

// b와 c는 다른 에러 메세지가 뜸
