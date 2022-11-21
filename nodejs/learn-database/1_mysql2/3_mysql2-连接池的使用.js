const mysql = require('mysql2')

// 1. 创建数据库连接
const connections = mysql.createPool({
  host: 'localhost',
  port: 3307,
  database: 'nodedb',
  user: 'root',
  password: '756131502',
  connectionLimit: 20
})

// 2. 执行SQL语句
const statement = `SELECT * FROM products WHERE price > ? AND score > ?;`

connections.execute(statement, [6000, 6], (error, results) => {
  console.log(results);
})