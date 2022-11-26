const env = process.env.NODE_ENV //环境变量

let MYSQL_CONF

if (env === 'dev') {
  // mysql
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '756131502',
    port: 3307,
    database: 'myblog'
  }
}

if(env === 'production') {
  // mysql
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '756131502',
    port: 3307,
    database: 'myblog'
  }
}

module.exports = {
  MYSQL_CONF
}