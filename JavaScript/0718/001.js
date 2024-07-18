// 이벤트 객체 확인

// const btnFirst = document.querySelector(".btn-first");
// // 이벤트가 실행될 때 event 객체를 넣어줌
// // event 매개변수 안에 event 객체를 넣어줌
// btnFirst.addEventListener("click", (event) => {
//   // 클릭시 이벤트 함수 실행
//   console.log(event);
// });

// 이벤트 버블링, 캡쳐링 확인
// 캡처링에서 false, 버블링에서 true가 나오면 그 해당 단계에서 실행

// const parent = document.querySelector(".parent");
// const btnFirst = document.querySelector(".btn");
// btnFirst.addEventListener(
//   "click",
//   (event) => {
//     console.log("btn capture!");
//   },
//   true
// );

// window.addEventListener(
//   "click",
//   () => {
//     console.log("window capture!");
//   },
//   true
// );
// // true : 캡처링 단계의 이벤트가 발생
// // false(기본값) : 버블링 단계의 이벤트 발생

// document.addEventListener(
//   "click",
//   () => {
//     console.log("document capture!");
//   },
//   true
// );

// parent.addEventListener(
//   "click",
//   () => {
//     console.log("parent capture!");
//   },
//   true
// );

// btnFirst.addEventListener("click", (event) => {
//   console.log("btn bubble!");
// });

// parent.addEventListener("click", () => {
//   console.log("parent bubble!");
// });

// document.addEventListener("click", () => {
//   console.log("document bubble!");
// });

// window.addEventListener("click", () => {
//   console.log("window bubble!");
// });

// 이벤트 this
