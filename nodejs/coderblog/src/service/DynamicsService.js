const connection = require('../app/database')
class DynamicsService {
  async create({ userId, content }) {
    try {
      const sql = `INSERT INTO dynamics (user_id, content) VALUES (?,?);`
      const [result] = await connection.execute(sql, [userId, content])
      return result
    } catch (error) {
      console.log(error);
    }
  }
  async queryDynamicsList({ offset, size }) {
    try {
      const sql = `SELECT
      d.id id, 
      d.content content, 
      d.createAt cteateTime, 
      d.updateAt updateTime,
      JSON_OBJECT('id', u.id, 'username', u.username) author
    FROM dynamics d
    LEFT JOIN sys_user u on d.user_id = u.id
    LIMIT ?, ?`
      const [result] = await connection.execute(sql, [offset, size])
      return result
    } catch (error) {
      console.log(error);
    }
  }
  async getSingleDataById(dynamicsId) {
    try {
      const sql = `SELECT
      d.id id, 
      d.content content, 
      d.createAt cteateTime, 
      d.updateAt updateTime,
      JSON_OBJECT('id', u.id, 'username', u.username) author
    FROM dynamics d
    LEFT JOIN sys_user u on d.user_id = u.id
    WHERE d.id = ?;`
      const [result] = await connection.execute(sql, [dynamicsId])
      return result
    } catch (error) {
      console.log(error);
    }
  }
  async updateDynamic({ content, dynamicsId }) {
    try {
      const sql = `UPDATE dynamics SET content = ? WHERE id = ?;`
      const [result] = await connection.execute(sql, [content, dynamicsId])
      return result
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new DynamicsService()