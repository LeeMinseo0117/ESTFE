const mimim = {
  name: "이민서",
  address: "서울 어딘가",
  age: 24,
  mbti: "ISFP",
  drink: function (drinkname) {
    drinkname.costUp;
  },
};

const coffee = {
  cost: 4000,
  costUp: function () {
    this.cost++;
  },
};

const milk = {
  cost: 2000,
  costUp: function () {
    this.cost++;
  },
};

console.log(mimim.drink(coffee));
console.log(mimim.drink(milk));

console.log(coffee);
console.log(milk);
