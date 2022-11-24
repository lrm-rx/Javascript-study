const connection = require('../app/database')

class AuthService {
  async checkResource(tableName, id, userId) {
    const sql = `SELECT * FROM ${tableName} WHERE id = ? AND user_id = ?;`;
    try {
      const [result] = await connection.execute(sql, [id, userId]);
      return result.length === 0 ? false: true;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new AuthService()