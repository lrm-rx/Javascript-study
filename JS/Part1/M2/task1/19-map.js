// Map 数据结构
// const obj = {};
// obj[true] = 'value';
// obj[123] = 'value';
// obj[{a: 1}] = 'value';

// console.log(Object.keys(obj));


const m = new Map();
const ming = {name: 'ming'};

m.set(ming, 90);
console.log(m);

console.log(m.get(ming));

/**
 * m.has()
 * m.delete()
 * m.clear()
 */
m.forEach((value,key) => {
  console.log(value, key);
})
