let result;
function xhrRequest() {
  const requestObj = new XMLHttpRequest();
  requestObj.open("GET", "hello.txt");
  requestObj.onreadystatechange = () => {
    if (requestObj.readyState === 4 && requestObj.status === 200) {
      result = requestObj.responseText;
      console.log(result);
      document.body.innerHTML = result;
    }
  };
  requestObj.send();
}

xhrRequest();
