// 작은 따옴표, 큰 따옴표, 백틱으로 감싸진 텍스트
let str1 = "hello world";
let str2 = "hello\nworld";
// 작은 따옴표, 큰 따옴표는 문자열 내 엔터 불가능
let str3 = `hello 
world`;

console.log(typeof str1, typeof str2, typeof str3);
console.log(str1);
console.log(str2);
console.log(str3);

let a = 10;
let b = 20;

console.log(a + " + " + b + " = " + (a + b));
// 템플릿 리터럴을 사용하여 표현식 삽입
console.log(`${a} + ${b} = ${a + b}`);
