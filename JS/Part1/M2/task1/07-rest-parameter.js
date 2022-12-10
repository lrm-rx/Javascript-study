// 剩余参数
function foo() {
  console.log(arguments);
}
foo(1,2,3,4,5)

function foo1(first, ...args) {
  console.log(first);
  console.log(args);
}
foo1(1,2,3,4,5)

