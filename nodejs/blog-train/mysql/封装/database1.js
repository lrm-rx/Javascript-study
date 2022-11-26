const mysql = require('mysql')
// 封装连接池方法
const db = {
  connectionLimit: 20,
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: '756131502',
  database: 'myblog'
}

const mysqlConnection = (sql, params) => {
  return new Promise((resolve, reject) => {
    // 一. 新建一个连接池
    let pool = mysql.createPool(db)
    // 二. 连接
    pool.getConnection((error, connection) => {
      if (error) throw error
      console.log('数据库连接成功!');
      // 三. 使用sql语句操作
      connection.query(sql, params, (err, results, fields) => {
        if (err) {
          reject(err)
        } else {
          resolve(results)
        }
        // 四. 释放连接池
        connection.release()
      })
    })
  })
}

module.exports = mysqlConnection
