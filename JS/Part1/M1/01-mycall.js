Function.prototype.mycall = function (context, ...rest) {
  // context
  context.fun = this
  const r = context.fun(...rest)
  delete context.fun
  return r
}
function fn(a, b, c) {
  console.log(this)
  return a + b + c
}
console.log(fn.mycall({name: 'ming'}, 1, 2, 3));

