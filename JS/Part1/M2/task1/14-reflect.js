// Reflect对象
// const obj = {
//   foo: 'abc',
//   bar: 'ddd'
// }
// const proxy = new Proxy(obj, {
//   get(target, property) {
//     console.log('watch');
//     return Reflect.get(target,  property)
//   }
// })
// console.log(proxy.foo);

const obj  = {
  name: 'zed',
  age: 15
}

// console.log('name' in obj);
// console.log(delete obj['age']);
// console.log(Object.keys(obj));

console.log(Reflect.has(obj, 'name'));
console.log(Reflect.deleteProperty(obj, 'age'));
console.log(Reflect.ownKeys(obj));