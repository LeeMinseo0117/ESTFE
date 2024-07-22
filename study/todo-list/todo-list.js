// 필요한 DOM 요소 선택
const $todoPlusButton = document.querySelector(".todoPlusButton");
const $todoInput = document.querySelector(".todoInput");
const $todoList = document.querySelector(".todoList");

// 추가 버튼 클릭시
// $todoPlusButton.addEventListener("click", (event) => {
//   // console.log(event);
//   createTodo();
// });
$todoPlusButton.addEventListener("click", createTodo);

// 엔터키 클릭시 추가 -> 작동 안됨
// function enterKey() {
//   if (window.event.keyCode == 13 && $todoInput.value !== "") {
//     createTodo();
//   } else {
//     alert("항목을 작성해주세요");
//   }
// }

function enterKey(event) {
  if (event.keyCode == 13 && $todoInput.value !== "") {
    createTodo();
  } else {
    alert("항목을 작성해주세요");
  }
}

// 내용 추가 및 삭제 함수
function createTodo() {
  const $listLi = document.createElement("li");
  const $listSpan = document.createElement("span");
  const $listButton = document.createElement("button");
  const $listDel = document.createTextNode("삭제");

  // li 안에 span, button 추가
  $listLi.appendChild($listSpan);
  $listLi.appendChild($listButton);
  $listButton.appendChild($listDel);

  $listLi.style.textAlign = "left";

  // input에 내용 작성 후 추가 클릭시 li 생성 후 출력
  if ($todoInput.value) {
    $listSpan.textContent = $todoInput.value;
    $todoList.appendChild($listLi);
  } else {
    alert("항목을 작성해주세요");
  }

  // input 내용 삭제
  $todoInput.value = null;

  // 삭제 버튼 클릭시
  $listButton.addEventListener("click", (event) => {
    $todoList.removeChild($listLi);
  });
}

// 추가과제
// 배열이나 객체로 데이터(상태)를 관리하는애랑, UI 그려주는 애랑 분리하기
// 진행완료도
// TODO 등록한 순서대로 데이터가 있기
// TODO 내용 진행 여부
// 날짜 추가
// 취소선
// 내용 수정
// 전체 삭제
