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
const robot = new Robot("mimim");
console.log(robot);
robot.sayName();
