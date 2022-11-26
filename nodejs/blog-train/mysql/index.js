const mysql = require('mysql')

const db = {
  host: 'localhost',
  user: 'root',
  password: '756131502',
  port: 3307,
  database: 'myblog'
}

// 方式一: -- 直连数据库
const connection = mysql.createConnection(db)

connection.connect((err) => {
  if (err) throw err
  console.log('方式一:直连数据库连接成功')
})

// let sql = `select * from users where username = 'xiaohu' and state = 1;`
// connection.query(sql, (err, res) => {
//   console.log('res', res)
// })

// 占位符

let sql = `select * from users where username = ? and state = ?;`
connection.query(sql, ['xiaohu', '1'],  (err, res) => {
  console.log('res', res)
})

connection.end((err) => {
  if (err) throw err
  console.log('方式一:直连数据库断开连接')
})


// 方式二: 通过连接池连接数据库
let pool = mysql.createPool(db)
pool.getConnection((err, connection) => {
  if (err) throw err
  console.log('通过连接池连接数据库连接成功')
  let sql = 'select * from users where username = ?'
  connection.query(sql, 'xiaohu', (error, res) => {
    if (error) throw error
    console.log(res)
  })
  //释放连接池的连接
  connection.release()
})

