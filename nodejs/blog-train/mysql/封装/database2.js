const mysql = require('mysql')

// 封装直接连的方法
const db = {
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: '756131502',
  database: 'myblog'
}

const getDataBySQL = (sql, params) => {
  return new Promise((resolve, reject) => {
    let connection = mysql.createConnection(db)
    connection.connect((err, conn) => {
      if(err) throw err
      console.log('数据库连接成功!');
      connection.query(sql, params, (error, res) => {
        connection.end()
        if(error){
          reject(error)
        }else{
          resolve(res)
        }
      })
    })
  })
}

module.exports = getDataBySQL
