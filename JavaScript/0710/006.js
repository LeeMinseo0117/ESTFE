console.log(name);
name = name || "사용자";
console.log("이름: ", name);

// ES2020에 도입된 연산

console.log("--- nullish (??) ---");
// or 비슷한 기능 -> 첫번째로 오는 true
// ?? nullish -> 첫번쨰로 오는 undefined이나 null이 아닌 값
console.log(null ?? null ?? null);
console.log(null ?? null ?? undefined);
console.log(null ?? "" ?? undefined);

const a = null;
const b = 23;
console.log(a ?? b); // 23
console.log(b ?? a); // 23

let name = window.prompt("이름을 입력해주세요");
name = name ?? "사용자";
console.log("이름: ", name);

const user = {
  name: "경현",
  address: {
    city: "jeju",
  },
};
console.log(user.number); // undefined
// console.log(user.number.location);
console.log(user.number && user.number.location);
