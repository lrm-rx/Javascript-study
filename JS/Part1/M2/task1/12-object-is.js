// Object.is
console.log(
  0 == false,
  0 === false,
  +0 === -0,
  NaN === NaN,
  Object.is(+0, -0),
  Object.is(null, null),
  Object.is({}, {}),
);