function Robot(food) {
  this.food = food;
  this.menu = function () {
    console.log(`음식 랜덤 출력 : ${this.food}`);
  };
}