const connection = require('../app/database')
class FileService {
  async createAvatar(filename, mimetype, size, userId) {
    const sql = `INSERT INTO avatar (filename, mimetype, size, user_id) values (?, ?, ?, ?);`
    try {
      const [result] = await connection.execute(sql, [filename, mimetype, size, userId])
      return result
    } catch (error) {
      console.log(error);
    }
  }
  async getAvatarByUserId(userId) {
    const sql = `SELECT * FROM avatar WHERE user_id = ?;`
    try {
      const [result] = await connection.execute(sql, [userId])
      return result.pop()
    } catch (error) {
      console.log(error);
    }
  }
  async createFile(filename, mimetype, size, userId, dynamicsId) {
    const sql = `INSERT INTO file (filename, mimetype, size, user_id, dynamics_id) values (?, ?, ?, ?, ?);`
    try {
      const [result] = await connection.execute(sql, [filename, mimetype, size, userId, dynamicsId])
      return result[0]
    } catch (error) {
      console.log(error);
    }
  }
  async getFileByName(filename){
    const sql = `SELECT * FROM file WHERE filename = ?;`
    try {
      const [result] = await connection.execute(sql, [filename])
      return result[0]
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new FileService()