var peter = {
  name: "Peter Parker",
  sayName: function () {
    console.log(this.name);
  },
};
var bruce = {
  name: "Bruce Wayne",
};
peter.sayName.call(bruce);
// peter에 있는 sayHello를 호출하는데 this를 bruce로 바꿔서 호출
