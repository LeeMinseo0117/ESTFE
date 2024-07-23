let result;
function xhrRequest() {
  const requestObj = new XMLHttpRequest(); // 요청을 위한 XNR 객체
  console.log(requestObj.readyState); // 0
  requestObj.open("GET", "http://test.api.weniv.co.kr/mall"); // 요청을 준비 (요청을 open) open메서드의 첫번째 요소에는 http method, 두번째에는 요청을 보낸 URL
  // 요청 보낼 때, 요청 상태가 바뀔 때마다 실행될 콜백함수 설정
  // 1
  requestObj.onreadystatechange = () => {
    console.log(requestObj.readyState);
    if (requestObj.readyState === 4 && requestObj.status === 200) {
      result = requestObj.responseText;
      console.log(result, "내부"); // 콘솔에 무엇이 찍히는지 확인해봅시다.
    }
  };
  requestObj.send();
  // send를 하면 요청이 보내지고, readyState가 2로 변경
  // 요청에 대한 응답을 받기 전에는 readyState가 3으로 변경
  // 요청에 대한 응답을 받아서 통신이 완료되었을 땨는 readyState가 4로 변경
}

xhrRequest();
console.log(result, "외부");
