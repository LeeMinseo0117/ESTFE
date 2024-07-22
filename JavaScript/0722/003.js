let result;
function xhrRequest() {
  const requestObj = new XMLHttpRequest();
  requestObj.open("GET", "http://test.api.weniv.co.kr/mall");
  requestObj.onreadystatechange = () => {
    if (requestObj.readyState === 4 && requestObj.status === 200) {
      result = requestObj.responseText;
      console.log(result, "내부"); // 콘솔에 무엇이 찍히는지 확인해봅시다.
    }
  };
  requestObj.send();
}

xhrRequest();
console.log(result, "외부"); // 콘솔에 무엇이 찍히는지 확인해봅시다.
