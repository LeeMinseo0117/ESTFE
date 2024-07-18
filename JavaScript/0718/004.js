// 1. P 태그를 클릭하면 p 태그의 컨텐츠를 출력하는 alert 창을 띄워주고
// 2. 삭제 버튼을 클릭하면 삭제할 것인지를 물어보는 confirm 창을 띄워주고
// 3. 확인을 누르면 P태그를 삭제합니다.

$ps = document.querySelectorAll("p");
$deleteButtons = document.querySelectorAll("button");

console.log($ps);

$ps.forEach((element) => {
  console.log(element);
  element.addEventListener("click", (event) => {
    console.log(event.currentTarget);
    window.alert(event.currentTarget.textContent);
  });
});

$deleteButtons.forEach((element) => {
  console.log(element);
  element.addEventListener("click", (event) => {
    console.log(event.currentTarget);
    if (window.confirm("삭제하시겠습니까?")) {
      event.currentTarget.parentElement.remove();
      event.stopPropagation();
    }
  });
});
