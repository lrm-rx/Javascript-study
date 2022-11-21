const mysql = require('mysql2')

// 1. 创建数据库连接
const connections = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  database: 'nodedb',
  user: 'root',
  password: '756131502'
})

// 测试数据库是否连接成功
connections.query('select 1;', (error, results, fields) => {
  // mysql2 模块工作期间报错了
  if (error) return console.log(error.message);
  // 能够成功的执行 SQL 语句
  console.log('mysql连接成功!', results); //结果为：[ RowDataPacket { '1': 1 } ]证明连接成功
})

// 2. 执行sql语句
const statement = `
  SELECT * FROM products;
`

connections.query(statement, (error, results, fields) => {
  console.log(results);
  // 终止方式一:
  // connections.end()
  // 终止方式二: 强制
  connections.destroy()
})

// 终止方式一:
// connections.on('error', (error) => {
//   console.log(error);
// })

// const statement = `INSERT INTO products SET ?;`
// const phoneJson = require('./phone.json');

// for (let phone of phoneJson) {
//   connections.query(statement, phone); 
// }