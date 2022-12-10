// for...of 循环

const arr = [100, 200, 300, 400];
// for (const item of arr) {
//   console.log(item);
// }

// console.log('--------');

// arr.forEach(item => {
//   console.log(item);
//   if(item > 100) {
//     return;
//   }
// });

// console.log('---------');

// for (const item of arr) {
//   console.log(item);
//   if(item > 100) {
//     return;
//   }
// }

/**
 * arr.forEach() // 不能跳出循环
 * arr.some()
 * arr.every()
 */

// const s = new Set(['ming', 'xiaohu']);
// for (const item of s) {
//   console.log(item);
// }

// const m = new Map();
// m.set('foo', '123');
// m.set('bar', '456');
// for (const [key, value] of m) {
//   console.log(key, value);
// }


// 报错
// const obj = {foo: 123, bar: 456};
// for (const item of obj) {
//   console.log(item);
// }