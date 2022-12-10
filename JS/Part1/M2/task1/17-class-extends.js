// extends 继承

class Person {
  constructor(name) {
    this.name = name;
  }
  say() {
    console.log(`hi, my name is ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, num) {
    super(name);
    this.num = num;
  }
  hello() {
    super.say();
    console.log(`my num is ${this.num}`);
  }
}

const s = new Student('ming', 101)
s.hello()