// 콘솔
console.log("로그입니다");
console.error("오류입니다");
console.warn("경고입니다");

console.table([1, 2, 3, "a", "b", "c"]);
console.table({ name: "민서", company: "무직" });

// 타이머 체크
// time의 이름은 동일하게
// start -> 1,2,3 -> start, end -> start -> end
console.time("start");
console.log(1, 2, 3);
console.time("end");
console.timeEnd("start");
console.timeEnd("end");
