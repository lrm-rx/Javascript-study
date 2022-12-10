// Object.assign 方法
// const source1 = {
//   a: 123,
//   b: 234
// }

// const target = {
//   a: 999,
//   c: 0,
// }
// const result = Object.assign(target, source1)
// console.log(result);

// function func(obj) {
//   obj.name = 'obj';
//   console.log(obj);
//   const fnObj = Object.assign({}, obj);
//   fnObj.name = 'fn obj';
//   console.log(fnObj);
// }
// const obj = {name: 'ming', age: 26};
// func(obj)

// console.log(obj);

function func(obj) {
  console.log('原对象值:', obj);
  const {...newObj} = obj;
  newObj.name = 'obj';
  console.log('新的值:', newObj);
}
const obj = {name: 'ming', age: 26};
func(obj)

console.log('原值:', obj);

console.log('-----------');

// function funcA(arr) {
//   console.log('数组解构之前:', arr);
//   const [...newArr] = arr;
//   newArr[0] = 'obj';
//   console.log('数组解构之后, 值已经修改:',newArr);
// }
// const arr = ['a','b','c'];
// funcA(arr)

// console.log('数组原来的值:', arr);




