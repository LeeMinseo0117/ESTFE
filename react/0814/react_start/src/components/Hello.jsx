function Hello(props) {
  console.log(props);
  const name = "개리";
  const someStyle = { backgroundColor: "black", color: "white" };
  return (
    <div>
      <h1 style={someStyle}>안녕, {name} 1호</h1>
      {/* 이렇게하면 나옵니다. */}
      <h2>안녕, {name} 2호!</h2>
      <div className="newClass" /> {/* class대신 className=""로 진행! */}
    </div>
  );
}

export default Hello;
