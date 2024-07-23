const requestObj = new XMLHttpRequest();
console.log(requestObj.readyState); // 0

requestObj.open("GET", "https://test.api.weniv.co.kr/mall");
console.log(requestObj.readyState); // 1

requestObj.onreadystatechange = () => {
  console.log(requestObj.readyState);
  // 2
  // 3
  // 4
  if (requestObj.readyState === 4 && requestObj.status === 200) {
    const result = requestObj.responseText;
    console.log(JSON.parse(result)[0]);
  }
};
requestObj.send();
