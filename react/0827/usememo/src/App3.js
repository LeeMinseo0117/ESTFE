import React, { createContext } from "react";

const UserInfo = createContext({ name: "gary", id: "garyIsFree" });
console.log(UserInfo.Consumer);

const App3 = () => {
  return <HelloLicat />;
};

const HelloLicat = () => {
  return (
    <UserInfo.Consumer>
      {(value) => (
        <div>
          <h2>{value.name}</h2>
          <strong>{value.id}</strong>
        </div>
      )}
    </UserInfo.Consumer>
  );
};

export default App3;
