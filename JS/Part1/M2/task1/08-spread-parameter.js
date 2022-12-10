// 展开数组参数
const arr = ['foo', 'bar', 'baz'];

console.log.apply(console, arr);
console.log(...arr);