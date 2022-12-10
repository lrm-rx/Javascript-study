// 带标签的模板字符串
// const str = tag`hello vue`;

const uname = 'letme';
const gender = true;

function myTagFn(strings) {
  // console.log(strings, uname, gender);
  // return 100;
  return strings[0] + uname + strings[1] + gender + strings[2];
}

const result = myTagFn`hi~,${uname} is a ${gender}.`
console.log('result:', result);