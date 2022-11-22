const mysql = require('mysql2')

const config = require('./config')

const connections = mysql.createPool({
  host: config.MYSQL_HOST,
  port: config.MYSQL_PORT,
  database: config.MYSQL_DATABASE,
  user: config.MYSQL_USER,
  password: config.MYSQL_PASSWORD,
  // pool: config.MYSQL_POOL,
})
// 测试连接
connections.getConnection((error, conn)=>{
  conn.connect((error) => {
    if(error) {
      console.log('数据库连接失败:', error)
    }else{
      console.log('数据库连接成功!');
    }
  })
})

module.exports = connections.promise()
