// 箭头函数与this

const person = {
  name: 'lpl',
  // sayHi: function () {
  //   console.log(`hi,my name is ${this.name}`);
  // }
  sayHi: () => {
    console.log(`hi,my name is ${this.name}`);
  },
  sayHiAsync: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  }
}
person.sayHi()
person.sayHiAsync()
