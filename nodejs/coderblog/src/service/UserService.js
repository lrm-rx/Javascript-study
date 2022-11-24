const connection = require('../app/database')
class UserService {
  async create(user) {
    const { username, password } = user
    const sql = `INSERT INTO sys_user (username, password) VALUES (?,?);`
    try {
      const result = await connection.execute(sql, [username, password])
      return result
    } catch (error) {
      console.log(error);
    }
  }
  async getUserByName(username) {
    const sql = `SELECT * FROM sys_user WHERE username = ?;`
    try {
      const result = await connection.execute(sql, [username])
      return result
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new UserService()