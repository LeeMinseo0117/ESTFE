// 필요한 DOM 요소 선택
const $todoPlusButton = document.querySelector(".todoPlusButton");
const $todoInput = document.querySelector(".todoInput");
const $todoList = document.querySelector(".todoList");

// 추가 버튼 클릭시
$todoPlusButton.addEventListener("click", (event) => {
  console.log(event);
  createTodo();
});

function enterKey() {
  if (window.event.keyCode == 13 && $todoInput.value !== "") {
    createTodo();
  } else {
    alert("항목을 작성해주세요");
  }
}

// 내용 추가
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
