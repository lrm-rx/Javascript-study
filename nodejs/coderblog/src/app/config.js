const dotenv = require('dotenv')
const path = require('path')
const fs = require('fs')

dotenv.config()

const PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname, '../keys/private.key'))
const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname, '../keys/public.key'))
const TOKEM_TIME = '12h'
module.exports = {
  APP_PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_POOL,
  PATH_PREFIX
} = process.env

module.exports.PRIVATE_KEY = PRIVATE_KEY
module.exports.PUBLIC_KEY = PUBLIC_KEY
module.exports.TOKEM_TIME = TOKEM_TIME