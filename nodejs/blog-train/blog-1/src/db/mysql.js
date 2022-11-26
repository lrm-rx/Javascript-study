const mysql = require('mysql')

const { MYSQL_CONF } = require('../config/db')

// 创建链接对象
const conn = mysql.createConnection(MYSQL_CONF)

// 开始连接
conn.connect((error) => {
  if (error) throw error
  console.log('数据库连接成功')
})

// 统一执行sql的函数
function exec(sql) {
  const promise = new Promise((resolve, reject) => {
    conn.query(sql, (error, result) => {
      if(error) {
        console.error(error);
        reject(error)
        return
      }
      resolve(result)
    })
  })
  return promise
}

module.exports = {
  exec
}