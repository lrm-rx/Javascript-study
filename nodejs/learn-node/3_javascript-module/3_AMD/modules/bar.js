define(function () {
  const name = 'ming'
  const age = 10
  const say = function(uname){
    console.log('你好,' + uname);
  }
  return {
    name,
    age,
    say
  }
})