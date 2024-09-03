describe("클릭 이벤트 처리 및 뷰를 담당하는 함수입니다.", () => {
  it("viewManager 에 textManager가 잘 전달되는지 확인합니다.", () => {
    const textManager = null;
    const elements = {
      btnEl: document.createElement("button"),
      viewerEl: document.createElement("div"),
      inpEl: document.createElement("input"),
    };

    const actual = () => new ViewManager(textManager, elements);

    // toThrowError 를 사용하여 에러가 발생하는지 확인합니다.
    expect(actual).toThrowError();
  });
});
