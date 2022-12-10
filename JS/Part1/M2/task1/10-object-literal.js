// 对象字面量
const bar = '234'

const obj = {
  foo: 12,
  bar,
  // method1: function () {
  //   console.log(111);
  // },
  method1(){
    console.log(this);
  },
  ['e'+'d'+'g']: 'iboy'
}

obj[Math.random()] = 123;
console.log(obj);
obj.method1()