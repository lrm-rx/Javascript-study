const connection = require('../app/database')

class AuthService {
  async checkMoment(dynamicsId, userId) {
    try {
      const sql = `SELECT * FROM dynamics WHERE id = ? AND user_id = ?;`
      const [result] = await connection.execute(sql, [dynamicsId, userId])
      return result.length === 0 ? false : true
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new AuthService()