class Robot {
  constructor(name) {
    // 클래스의 생성자 함수
    // 하나의 클래스는 하나의 생성자만 정의 가능
    // 생성자 함수는 new 키워드가 호출될 때 자동으로 실행
    this.name = name;
  }
  sayName() {
    // 메서드 정의
    // 클래스가 생성한 인스턴스를 통해 사용 가능
    console.log(`my name is ${this.name}`);
  }
}
const robot = new Robot("민서");
console.log(robot);
robot.sayName();

console.log(robot.name);

robot.name = "mimim";
console.log(robot.name);

class BabyRobot extends Robot {
  constructor(name) {
    super(name);
    this.ownName = "미밈";
  }
  sayBabyName() {
    // 또한 상속을 받게되면 부모 클래스의 메소드를 사용할 수 있게 됩니다. 때문에 this로 접근 할 수 있습니다.
    this.sayName();
    console.log("Succeeding you, mother!");
  }
}
const babyRobot = new BabyRobot("일남");
console.log(babyRobot);
babyRobot.sayBabyName();
