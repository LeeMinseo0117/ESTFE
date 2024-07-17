// switch

let name = "민서";
switch (name) {
  case "민서":
    console.log("민서입니다");
  case "밍서":
    console.log("밍서입니다");
  case "미밈":
    console.log("미밈입니다");
}

switch (new Date().getDay()) {
  case 1:
    console.log("워어어어얼");
  case 2:
    console.log("화아아아");
  case 3:
    console.log("수우우");
  case 4:
    console.log("모옥");
  case 5:
    console.log("금");
  case 6:
  case 0:
    console.log("퇼");
  default:
    console.log("무슨 요일인지 모르겠습니다.");
}

const today = new Date();
console.log("오늘은 : ", today.getDay());
switch (today.getDay()) {
  case 1:
    console.log("월");
    break;
  case 2:
    console.log("화");
    break;
  case 3:
    console.log("수");
    break;
  case 4:
    console.log("목");
    break;
  case 5:
    console.log("금");
    break;
  case 0:
    console.log("토");
    break;
  default:
    console.log("무슨 요일인지 모르겠음");
    break;
}