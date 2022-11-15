import { name, age, say } from './modules/foo.js' // 在没有用脚手架时, 要加.js

console.log(name);
console.log(age)
console.log(say);

setTimeout(() => {
  console.log(name); // aaaaaaaaaaaa
}, 1000);







