// 위 코드를 promise를 이용해 비동기처리를 이쁘게 한다.
// 그리고 받은 응답을 화면에 잘 그려준다.

const req = new Promise((resolve, reject) => {
  const requestObj = new XMLHttpRequest();
  requestObj.open("GET", "https://test.api.weniv.co.kr/mall");
  requestObj.onreadystatechange = () => {
    if (requestObj.readyState === 4 && requestObj.status === 200) {
      const success = requestObj.responseText;
      resolve(success);
    } else if (requestObj.readyState === 4 && requestObj.status !== 200) {
      reject(new Error(`연결 안됨 ${requestObj.status}`));
    }
  };
  requestObj.send();
});
req
  .then((result) => {
    console.log(result);
    // const json = JSON.parse(result);
    // console.log(json);
    // document.write(json);
    document.write(result);
    return result;
  })
  .catch((error) => {
    console.log(error);
    document.body.innerHTML = `${error}`;
    return error;
  });
