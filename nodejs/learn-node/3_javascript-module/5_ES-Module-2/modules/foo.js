let name = 'ming'
let age = 15
const say = function (name) {
  console.log('你好, ' + name);
}

setTimeout(() => {
  name = 'aaaaaaaaaaaa'
}, 1000);

export {
  name,
  age,
  say
}
