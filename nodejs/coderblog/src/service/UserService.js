const connection = require('../app/database')
class UserService {
  async create(user) {
    try {
      const { username, password } = user
      const sql = `INSERT INTO sys_user (username, password) VALUES (?,?);`
      const result = await connection.execute(sql, [username, password])
      return result
    } catch (error) {
      console.log(error);
    }
  }
  async getUserByName(username) {
    try {
      const sql = `SELECT * FROM sys_user WHERE username = ?;`
      const result = await connection.execute(sql, [username])
      return result
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new UserService()