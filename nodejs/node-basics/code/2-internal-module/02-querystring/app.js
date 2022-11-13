const logger = require('../utils/log')

const querystring = require('querystring')

const query1 = 'id=2&name=lrm&city=玉林'
const query2 = 'id:2&name:lrm&city:玉林'
const queryEscape = 'id%3D2%26name%3Dlrm%26city%3D%E7%8E%89%E6%9E%97'
const query1Obj = { id: '2', name: 'lrm', city: '玉林' }
// const queryEscape = 'id%'

// logger.debug(querystring.parse(query1)) // { id: '2', name: 'lrm', city: '玉林' }
// logger.debug(querystring.escape(query1)) // id%3D2%26name%3Dlrm%26city%3D%E7%8E%89%E6%9E%97
// logger.debug(querystring.unescape(queryEscape)) // id=2&name=lrm&city=玉林
// logger.debug(querystring.stringify(query1Obj,'&','=')) // id=2&name=lrm&city=%E7%8E%89%E6%9E%97
// logger.debug(querystring.parse(query2), '=', '&') // { 'id:2': '', 'name:lrm': '', 'city:玉林': '' } = &
const newQuery = querystring.stringify(query1Obj,null,null,{
  encodeURIComponent(string) {
    return querystring.unescape(string)
  }
})

logger.debug(newQuery) // id=2&name=lrm&city=玉林

/**
 * querystring 已经弃用 三种处理方法
 * 1. //升级到18.x版本后修改引入方式
 * const querystring= require('node:querystring')
 * 
 * 2. 官方推荐URLSearchParams替代
 * 因为不想升级就按照文档先用了URLSearchParams
 * const url = req.url.split('?')[1]//api/list?a='abc'&b=2
 * console.log(url)//a='abc'&b=2
 * const query = {}
 * for (const [name, value] of new URLSearchParams(url)) {
 *     query[name] = value
 * }
 * console.log(query)//{a:'abc',b：2}
 * 
 */


