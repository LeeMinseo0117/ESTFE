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

fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
)
  .then((response) => {
    // response.ok 는 응답이 성공적(200-299)일 경우 true, 아니면 false를 반환합니다.
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    return data;
  })
  // fetch 함수는 네트워크 오류가 발생하면 reject 상태의 프로미스를 반환합니다.
  .catch((error) => {
    console.error(error);
  });
