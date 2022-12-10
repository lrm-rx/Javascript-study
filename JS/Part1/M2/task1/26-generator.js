// Generator 函数
// function * foo() {
//   console.log('ming');
//   return 100;
// }

// const result = foo();
// console.log(result.next());

function * foo() {
  console.log(111);
  yield 100;
  console.log(222);
  yield 200;
  console.log(333);
  yield 300;
}

const generator = foo();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());