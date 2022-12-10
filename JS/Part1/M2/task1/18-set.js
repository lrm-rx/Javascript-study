// Set 数据结构
const s = new Set();

s.add(1).add(2).add(3);
// console.log(s);
// console.log(Array.from(s));

// for(let i of s){
//   console.log(i);
// }

// console.log(s.size);

// console.log(s.has(1));
// console.log(s.delete(3));
// console.log(s);

// s.clear()
// console.log(s);

const arr = [1, 2, 3, 1, 2, 3];
const result = Array.from(new Set(arr));
console.log(result);
