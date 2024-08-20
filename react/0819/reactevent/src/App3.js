import React, { useState } from "react";
import Login from "./components/Login";
import Homepage from "./components/Homepage";

export default function App3() {
  const user = {
    idUser: "jaehyun@weniv.com",
    pwUser: 1234,
  };
  const [isLogin, setisLogin] = useState(false);

  return isLogin ? (
    <Homepage />
  ) : (
    <Login infoUser={user} setLogin={setisLogin} />
  );
}
