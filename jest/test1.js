function level(money){
  return money >= 200?'吃大餐':'喝西北风';
}

function level2(money) {
  return money >= 1000?'大餐A':'大餐D'
}

module.exports = {
  level,
  level2
}

// 覆盖率
// npx jest --coverage