var peter = {
  name: "Peter Parker",
  sayName: function (is, is2) {
    console.log(this.name + " is " + is + " or " + is2);
  },
};

var bruce = {
  name: "Bruce Wayne",
};

peter.sayName.apply(bruce, ["batman", "richman"]);

/* peter.sayName.apply(bruce, ['batman', 'richman']) 의 결과가 무엇이 될지 생각해보고 
apply 를 call로 바꾸어 호출했을 때와 비교해 봅시다. */
