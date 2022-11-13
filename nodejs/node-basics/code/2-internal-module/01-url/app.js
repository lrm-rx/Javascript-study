const url = require('url')
const logger = require('../utils/log')
const urlStr = 'https://www.baidu.com:443/path/index.html?id=2#tag=5'

const urlObj = {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'www.baidu.com:443',
  port: '443',
  hostname: 'www.baidu.com',
  hash: '#tag=5',
  search: '?id=2',
  query: 'id=2',
  pathname: '/path/index.html',
  path: '/path/index.html?id=2',
  href: 'https://www.baidu.com:443/path/index.html?id=2#tag=5'
}

// logger.debug(url.parse(urlStr))
// logger.debug(url.format(urlObj))
// logger.debug(url.resolve('http://www.abc.com/a','../'))
// logger.debug(url.resolve('http://www.abc.com/a','/b'))

const urlParams = new URLSearchParams(url.parse(urlStr).search)
logger.debug(urlParams)
logger.debug(urlParams.get('id'))

/**
 * 1. url.parse() --- 将字符串转换为对象
 * 2. url.format() --- 将对象转换为字符串
 * 3. url.resolve() --- url解析
 */