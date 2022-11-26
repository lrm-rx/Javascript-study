const mysqlConnection = require('./database2')

let sql = `select * from users where username = ? and state = ?;`

let arr = ['xiaohu', 1]

mysqlConnection(sql, arr).then((data) => {
  console.log('data:', data);
}).catch((err) => {
  console.error(err);
})