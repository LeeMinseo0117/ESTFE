let greeting = "hello world";
console.log(greeting[4]);
console.log(greeting[5]);
console.log(greeting[20]);
console.log(greeting[-1]);
//[음수값] 사용시 undefined 값이 나옴
console.log(greeting.at(-1));
// at(음수값) 사용시 뒤에서부터 자리값 나옴
console.log(greeting.length);
// 문자열의 길이를 나타냄
console.log(greeting[greeting.length - 1]);
// 문자열의 길이 - 1 = 인덱스의 길이

greeting[5] = "k";
console.log(greeting);
// 원시타입은 불변성이므로 값이 변경되지 않음

let greeting2 = "안녕하세요";
let company = "위니브";
console.log(greeting2 + company);
console.log("안녕하세요위니브" === greeting2 + company);
// true
