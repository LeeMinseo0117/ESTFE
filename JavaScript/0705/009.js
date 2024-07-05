// 변수명 규칙

// 1. 문자, 숫자, $, _ 포함
// let hello-world -> X
let $__ = 10;
console.log($__);

// 2. 숫자로 시작 할 수 없음
let name1, name2;
// let 1name, 2name; -> X

// 3. 예약어 사용할 수 없음
// let const = 30; -> X

// 4. 대소문자 구분
let apple = 10;
let Apple = 10;
console.log("apple: ", apple);
console.log("Apple: ", Apple);
let Const = 10;
console.log("Const: ", Const);
// -> 추천하지 않음

// 5. 문자 -> 유니코드
let 변수 = 10;
