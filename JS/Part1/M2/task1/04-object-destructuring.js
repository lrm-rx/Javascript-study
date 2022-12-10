// 对象的解构
const obj = { name: 'ming', age: 18 };

// const { name } = obj;
// console.log(name);

// const name = 'ning';
// const { name: objName } = obj;
// console.log(name);
// console.log(objName);

const name = 'ning';
const { name: objName = 'lpl' } = obj;
console.log(name);
console.log(objName);