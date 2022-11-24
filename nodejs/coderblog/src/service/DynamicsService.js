const connection = require('../app/database')
class DynamicsService {
  async create({ userId, content }) {
    const sql = `INSERT INTO dynamics (user_id, content) VALUES (?,?);`
    try {
      const [result] = await connection.execute(sql, [userId, content])
      return result
    } catch (error) {
      console.log(error);
    }
  }
  async queryDynamicsList({ offset, size }) {
    const sql = `SELECT 
    d.id id, 
    d.content content, 
    d.createAt createTime,
    d.updateAt updateTime,
    JSON_OBJECT('id', u.id, username, u.username) author,
    (SELECT COUNT(*) FROM comment c WHERE c.dynamics_id = d.id) comment_count,
    (SELECT COUNT(*) FROM dynamics_babel dl WHERE dl.dynamics_id = d.id) labelCount,
    (SELECT JSON_ARRAYAGG(CONCAT('http://localhost:8086/api/v1/dynamics/images/', file.filename)) 
    FROM file WHERE d.id = file.dynamics_id) images
    FROM dynamics d
    LEFT JOIN sys_user u ON d.user_id = u.id
    LIMIT ?, ?;`
    try {
      const [result] = await connection.execute(sql, [offset, size])
      return result
    } catch (error) {
      console.log(error);
    }
  }
  async getSingleDataById(dynamicsId) {
    const sql = `
      SELECT
      d.id id, d.content content, d.createAt cteateTime, d.updateAt updateTime,
      JSON_OBJECT('id', u.id, 'username', u.username, 'avatarUrl', u.avatar_url) author,
      IF(COUNT(l.id),JSON_ARRAYAGG(
        JSON_OBJECT(
          'id', l.id, 'name', l.label_name
        )
      ),NULL) lables,
      (SELECT 	IF(COUNT(c.id),JSON_ARRAYAGG(
        JSON_OBJECT(
          'id', c.id,
          'content', c.content,
          'commentId', c.dynamics_id,
          'createTime', c.createAt,
          'updateTime', c.updateAt,
          'userInfo', JSON_OBJECT(
            'id', cu.id,
            'username', cu.username,
            'avatarUrl', cu.avatar_url
          )
        )
      ), NULL) FROM comment c 
      LEFT JOIN sys_user cu ON c.user_id = cu.id 
      WHERE d.id = c.dynamics_id 
      ) comments,
      (SELECT JSON_ARRAYAGG(CONCAT('http://localhost:8086/api/v1/dynamics/images/', file.filename)) 
      FROM file WHERE d.id = file.dynamics_id) images
      FROM dynamics d
      LEFT JOIN sys_user u on d.user_id = u.id
      LEFT JOIN dynamics_babel dl ON d.id = dl.dynamics_id
      LEFT JOIN label l ON dl.label_id = l.id
      WHERE d.id = ?
      GROUP BY d.id;
    `
    try {
      const [result] = await connection.execute(sql, [dynamicsId])
      return result
    } catch (error) {
      console.log(error);
    }
  }
  async updateDynamicById({ content, dynamicsId }) {
    const sql = `UPDATE dynamics SET content = ? WHERE id = ?;`
    try {
      const [result] = await connection.execute(sql, [content, dynamicsId])
      return result
    } catch (error) {
      console.log(error);
    }
  }
  async deleteDynamicById(dynamicsId) {
    const sql = `DELETE FROM dynamics WHERE id = ?;`
    try {
      const [result] = await connection.execute(sql, [dynamicsId])
      return result
    } catch (error) {
      console.log(error);
    }
  }
  async hasLabel(dynamicsId, labelId) {
    const sql = `SELECT * FROM dynamics_babel WHERE dynamics_id = ? AND label_id = ?;`
    try {
      const [result] = await connection.execute(sql, [dynamicsId, labelId])
      return result[0] ? true : false
    } catch (error) {
      console.log(error);
    }
  }
  async addLabel(dynamicsId, labelId) {
    const sql = `INSERT INTO dynamics_babel (dynamics_id, label_id) VALUES (?, ?);`
    try {
      const [result] = await connection.execute(sql, [dynamicsId, labelId])
      return result
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new DynamicsService()