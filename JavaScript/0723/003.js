// const req = fetch("https://test.api.weniv.co.kr/mall");
// console.log(req);
// req
//   .then((res) => {
//     console.log(res);
//     return res.json();
//   })
//   .then((json) => {
//     // 여기에 응답된 객체가 json으로 온다.
//     console.log(json);
//     const $root = document.createElement("ol");
//     document.body.appendChild($root);
//     json.forEach((item) => {
//       // 여기 바꿔보세여
//       const $div = document.createElement("li");
//       $div.textContent = item.productName;
//       $root.appendChild($div);
//     });
//   })
//   .catch((err) => {
//     // console.log(err);
//   });

// const a = new Promise((resolve, reject) => {
//   const requestObj = new XMLHttpRequest();
//   requestObj.open("GET", "https://test.api.weniv.co.kr/mall");
//   requestObj.onreadystatechange = () => {
//     if (requestObj.readyState === 4 && requestObj.status === 200) {
//       const h = requestObj.response;
//       resolve(h);
//     }
//   };
//   requestObj.send();
// });
// a.then((result) => {
//   const json = JSON.parse(result);
//   console.log(json);
//   json.forEach((data) => {
//     document.write(data.productName);
//   });
// });

// 프로미스
const usePromise = new Promise((resolve, reject) => {
  const requestObj = new XMLHttpRequest();
  requestObj.open("GET", "https://test.api.weniv.co.kr/mall");
  console.log(requestObj.readyState); // 1
  requestObj.onreadystatechange = () => {
    console.log(requestObj.readyState);
    // 2
    // 3
    // 4
    if (requestObj.readyState === 4 && requestObj.status === 200) {
      const success = requestObj.response;
      // requestObj의 응답을 받는 객체 생성
      console.log(success);
      resolve(success);
    } else if (requestObj.readyState !== 4 && requestObj.status !== 200) {
      const fail = requestObj.response;
      console.log(fail);
      reject(fail);
    }
  };
  requestObj.send();
});

usePromise
  .then((result) => {
    console.log(result);
    console.log(typeof result);
    const json = JSON.parse(result);
    console.log(typeof json);
    const $ol = document.createElement("ol");
    json.forEach((data) => {
      const $li = document.createElement("li");
      $li.textContent = data.productName;
      $ol.appendChild($li);
    });
    document.body.appendChild($ol);
  })
  .catch((error) => {
    console.log(error);
  });
