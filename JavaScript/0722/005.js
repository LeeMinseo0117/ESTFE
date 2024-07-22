class Robot {
  #password;
  constructor(name, pw) {
    this.name = name;
    this.#password = pw;
  }
  sayName() {
    console.log(`my name is ${this.name}`);
  }
  get password() {
    return this.#password;
  }
  set password(pw) {
    this.#password = pw;
  }
}
const miniRobot = new Robot("민서", 1234);
console.log(miniRobot.name);
console.log(miniRobot.pw);
