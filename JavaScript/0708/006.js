// 문자열 탐색
const str = "Hello world, Hello weniv!";

console.log("---- indexOf ----");

console.log(str.indexOf("Hello"));
// 첫번째로 발견한 문자열의 인덱스를 반환
// -> 0
console.log(str.indexOf("weniv"));
// -> 19
console.log(str.indexOf("Hello", 5));
// 5번째부터 시작하여 Hello 탐색하여 인덱스 반환
// -> 13
console.log(str.indexOf("licat"));
// -> -1 (=false)

console.log("---- lastIndexOf ----");

console.log(str.lastIndexOf("Hello"));
// -> 13
console.log(str.lastIndexOf("weniv"));
// -> 19
console.log(str.lastIndexOf("Hello", 12));
// 뒤에서 12번째부터 시작하여 Hello 탐색하여 인덱스 반환
// -> 0
console.log(str.lastIndexOf("licat"));
// -> -1

console.log("---- includes ----");

console.log(str.includes("Hello"));
// -> true
console.log(str.includes("hello"));
// -> false

console.log(str.match(/[A-Z]/g)); // 대문자
// (2) ['H', 'H']
console.log(str.match(/[0-9]/g)); // 숫자
// null

const str2 = "Hello weniv!";

console.log("---- substring ----");

// 문자열의 일부를 가져오는 메서드
// 시작 인덱스 <= x < 종료 인덱스
// 종료 인덱스 없을 시 마지막까지 출력
console.log(str2.substring(6));
console.log(str2.substring(6, str2.length - 1));
console.log(str2.substring(-3));
console.log(str2.substring(2, -3));
console.log(str2.substring());
// 시작 인덱스, 종료 인덱스 둘 다 없으면 전체 문자 출력
console.log(str2.substring(-2, 5));
// (0,5)
console.log(str2.substring(2, "hello"));
// (2,0) -> 자동으로 (0,2)로 치환하여 출력
// 값이 음수나 숫자가 아닌 경우에는 0으로 변환

console.log("---- slice ----");

console.log(str2.slice(0, 5));
console.log(str2.slice(6, -1));
// 음수 인덱스 허용
console.log(str2.slice(2, "hello"));
// -> (2,0)
// 문자열 작성시 0으로 변환
// 시작 인덱스가 더 클 시 빈문자열로 출력
console.log(str2.slice(6));
console.log(str2.slice(-3));
console.log(str2.slice(6, 14));
console.log(str2.slice(8, 3));

console.log("---- substr ----");
// Deprecated -> 웹표준에서 제거될 수 있음

// substr(시작 인덱스, 뽑고자 하는 문자열의 길이)
console.log(str2.substr(4, 5));
console.log(str2.substr(6));
// 길이가 없으면 문자열의 끝까지 반환
console.log(str2.substr(6, 0));
console.log(str2.substr(6, -2));
// 음수나 0이면 빈 문자열 반환

console.log("---- split ----");
// 기준을 가진 것에 대해 배열로 반환
console.log("010-1234-1234".split("-"));
console.log("apple".split(""));
// 빈 문자열인 경우 모든 문자를 배열로 전환하여 반환
console.log("apple".split("", 2));
// 2개의 배열 가져오면 종료
console.log("apple banana watermelon strawberry".split(" ", 2));
// ["apple", "banana"]

const str3 = "Hello world";

console.log("---- replace ----");

console.log(str3.replace("Hello", "Hi"));
console.log(str3);
// str3의 값이 변한 것이 아니라 새로운 값을 만듬
console.log(str3.replace(/Hello/g, "Hi"));

console.log("---- replaceAll ----");
// 해당되는 모든 문자열을 Hi로 변경
console.log(str3.replaceAll("Hello", "Hi"));

let str4 = "I want to go home!";

console.log("---- toLowerCase, toUpperCase ----");

console.log(str4.toLowerCase());
console.log(str4.toUpperCase());
// javascript, JavaScript, JAVASCRIPT

console.log("---- repeat ----");

console.log("*".repeat(5));

console.log("---- trim ----");

console.log("         licat  ".trim()); // "licat"

console.log("---padStart, padEnd ---");
// 3시 -> 03
console.log("3".padStart(2, "0"));
console.log("3".padStart(2));
console.log("12".padStart(2, "0"));
console.log("12".padEnd(5, "-"));
