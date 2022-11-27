// 获取 cookie 的过期时间
const getCookieExpire = () => {
  const d = new Date()
  d.setTime(d.getTime() + (24 * 60 * 60 * 1000))
  console.log('d.toGMTString() is', d.toGMTString());
  return d.toGMTString()
}

module.exports = getCookieExpire